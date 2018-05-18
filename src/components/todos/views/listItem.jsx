import React from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'

import Store from '../../../store/store'
import {addItem as addItemAction} from '../actions'
/**
 * UI组件
 */
const ListItem = ({itemInfo,changeStatus}) => {

	let liItem = itemInfo.map((item,index)=>{
		return (
			<li 
				key={item.id}
				data-id={item.id}
				onClick={changeStatus}
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
const mapStateToProps = (state) => {
	return {
		itemInfo: state.todos
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeStatus: (id) => {
		},
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ListItem);

