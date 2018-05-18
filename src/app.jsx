import React from 'react'

// 引入组件
import {view as Todos} from './components/todos'
import {view as Filters} from './components/filters'



export default () => {
	return (
		<div>
			<Todos />
			<Filters />
		</div>
	)
}