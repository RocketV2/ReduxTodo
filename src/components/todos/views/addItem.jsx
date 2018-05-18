import React from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import Store from '../../../store/store'
import {addItem as addItemAction, asyncGetData} from '../actions'

/**
 * UI组件 负责展示，不进行业务逻辑、数据处理等  
 */
class AddItem extends React.Component{
	constructor(){
		super(...arguments)
		this.eventHandler = this.eventHandler.bind(this)
		this.refDom = this.refDom.bind(this)
	}

	refDom(dom){
		this.textInput = dom;
	}

	eventHandler(e){
		// 点击按钮
		if(e && e.target.type === 'submit' && e.type === 'click'){
			e.preventDefault();
			if(this.textInput.value !== ''){
				this.props.addItem(this.textInput.value);
				this.textInput.value = '';// 置空
				this.textInput.focus();
			}
		}
		// input回车
		if(e && e.target.type === 'text' && e.type === 'keydown'){
			if(e.keyCode === 13 && this.textInput.value!==''){
				e.preventDefault();
				this.props.addItem(this.textInput.value);
				this.textInput.value = '';// 置空
				this.textInput.focus();
			}
		}
	}

	render(){
		return (
			<form onClick={this.eventHandler} onKeyDown={this.eventHandler} >
				<input type="text" ref={this.refDom} />
				<button type='submit'>add</button>
				<p>
					使用redux-thunk异步处理,输入后1s再处理
				</p>
			</form>
		);
	}
}
AddItem.propTypes = {
	addItem: PropTypes.func.isRequired
}

/**
 * 容器组件 只负责业务逻辑、数据处理；不负责UI展示
 *
 * react-redux 的connect函数 就是生成个 容器组件
 */
/*class Container extends React.Component{
	constructor(){
		super(...arguments)
		this.addItem = this.addItem.bind(this)
	}

	addItem(val){
		// dispatch action
		Store.dispatch(addItemAction(val))
	}

	render(){
		return(
			<AddItem addItem={this.addItem} />
		)
	}
}
export default Container;*/

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addItem: (val) => {
			// 使用redux-thunk异步处理
			dispatch( asyncGetData(val) )
			// dispatch(addItemAction(val))
		},
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(AddItem);



