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