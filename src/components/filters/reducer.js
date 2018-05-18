
import {FILTER,FILTER_ALL} from './actionTypes'

export default (state=FILTER_ALL,action) => {
	switch(action.type){
		case FILTER:
			return action.filter;
		default:
			return state;
	}
}