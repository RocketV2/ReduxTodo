import React from 'react'

// 引入组件
import AddItem from './addItem'
import ListItem from './listItem'

export const Todos = () => {

	return (
		<div>
			<AddItem />
			<ListItem />
		</div>
	)
}
