import {createStore,combineReducers,applyMiddleware,compose} from 'redux'

// 引入reducer // 为何无法引入？
// import {reducer as TodoReducer} from '../components/todos'
import TodoReducer from '../components/todos/reducer'

const unitedReducer = combineReducers({
	todos: TodoReducer,
});

// 开发工具参数
const devTool = window.devToolsExtension && window.devToolsExtension();

// 增强参数
const storeEnhancers = compose(
	devTool
);

export default createStore(unitedReducer,{},storeEnhancers)



