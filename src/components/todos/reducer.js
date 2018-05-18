/**
 * reducer 纯函数
 * 在此进行state的操作
 */

import {TODO_ADD,TODO_CHANGE,TODO_DELETE} from './actionTypes'

export default (state=[],action) => {

	switch(action.type){
		case TODO_ADD: // 添加item
			return [...state,{
				id: action.id,
				type: action.type,
				text: action.text,
			}];
		case TODO_CHANGE:// 改变item
			return state;
		case TODO_DELETE:// 删除item
			return state.filter((item,index)=>{
				return action.id !== item.id;
			});
		default:
			return state;
	}

}