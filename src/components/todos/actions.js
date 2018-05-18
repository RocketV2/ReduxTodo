/**
 * 根据不同的action类型，返回不同的action对象
 */

import {TODO_ADD,TODO_CHANGE,TODO_DELETE} from './actionTypes'

// 添加item
let itemId = 0;
export const addItem = (text) => {
	return {
		id: itemId++,
		type: TODO_ADD,
		text: text
	}
}

// 删除item
export const deleteItem = (id) => {
	return {
		id: id,
		type: TODO_DELETE
	}
}

// 改变item状态
export const changeItem = (text) => {
	return {
		id: id,
		type: TODO_CHANGE
	}
}

// redux-thunk 异步处理
// 如果dispatch传入的是object，直接进入reducer
// 如果传入的是function，则在中间件中处理
export const asyncGetData = (val) => {
	return (dispatch,getState) => {
		setTimeout(()=>{
			dispatch(addItem(val));
		},1000)
	}
}