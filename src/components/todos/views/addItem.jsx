import React from 'react'
import PropTypes from 'prop-types'

import Store from '../../../store/store'
import {addItem as addItemAction} from '../actions'

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
			this.props.addItem(this.textInput.value);
			this.textInput.value = '';// 置空
			this.textInput.focus();
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
			</form>
		);
	}
}
AddItem.propTypes = {
	addItem: PropTypes.func.isRequired
}

/**
 * 容器组件 只负责业务逻辑、数据处理；不负责UI展示
 */
class Container extends React.Component{
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
export default Container;