import React from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'

import Store from '../../../store/store'
import {changeItem as changeItemAction} from '../actions'
/**
 * UI组件
 */
const ListItem = ({itemInfo,changeStatus}) => {
	let fontDeco = '';
	let liItem = itemInfo.map((item,index)=>{
		if(item.status){
			fontDeco = 'li-delete'
		}else{
			fontDeco = 'li-no-del'
		}
		
		return (
			<li 
				key={item.id}
				data-id={item.id}
				onClick={changeStatus.bind(null,item.id)}
				className={fontDeco}
			>
				{item.text}
			</li>
		);
	});

	return (
		<ul>
			{liItem}
		</ul>
	);
}
ListItem.propTypes = {
	itemInfo: PropTypes.array.isRequired,
	changeStatus: PropTypes.func.isRequired
}

/**
 * 容器组件
 */
/*class Container extends React.Component{
	constructor(){
		super(...arguments)
		this.state = {
			todos: Store.getState().todos
		}
		this.changeState = this.changeState.bind(this)
	}

	changeState(){
		this.setState({
			todos: Store.getState().todos
		});
	}

	componentDidMount(){
		Store.subscribe(this.changeState);
	}

	changeStatus(){
		console.log('改变组件状态 完成、删除')
	}

	render(){
		const items = this.state.todos;
		return (
			<ListItem 
				itemInfo={items}
				changeStatus={this.changeStatus}
			/>
		);
	}
}
export default Container;
*/

/**
 * [过滤todolist 数据]
 * @param  {[type]} itemInfo   [description]
 * @param  {[type]} filterType [description]
 * @return {[type]}            [description]
 */
const filterTodoList = (itemInfo,filterType) => {
	let itemInfoFilter = itemInfo;
	switch(filterType){
		case 'all':
			break;
		case 'finished':
			itemInfoFilter = itemInfo.filter((item,index)=>{
				return item.status
			});
			break;
		case 'unfinished':
			itemInfoFilter = itemInfo.filter((item,index)=>{
				return !item.status;
			});
			break;
		default:
			break;
	}
	return itemInfoFilter;
}

const mapStateToProps = (state) => {

	return {
		itemInfo: filterTodoList(state.todos,state.filters),
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeStatus: (id) => {
			dispatch(changeItemAction(id))
		},
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ListItem);

