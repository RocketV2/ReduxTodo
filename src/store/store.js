import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'

// 引入reducer // 为何无法引入？
// import {reducer as TodoReducer} from '../components/todos'
import TodoReducer from '../components/todos/reducer'
import FilterReducer from '../components/filters/reducer'

const unitedReducer = combineReducers({
	todos: TodoReducer,
	filters: FilterReducer,
});
// 中间件
const middleWares = [thunk];

// 开发工具参数
const devTool = window.devToolsExtension && window.devToolsExtension();

// 增强参数
const storeEnhancers = compose(
	applyMiddleware(...middleWares),
	devTool
);

export default createStore(unitedReducer,{},storeEnhancers)



