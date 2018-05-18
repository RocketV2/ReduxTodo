import React from 'react'

// 引入组件
import AddItem from './addItem'
import ListItem from './listItem'

import './style.css'

export const Todos = () => {

	return (
		<div>
			<AddItem />
			<ListItem />
		</div>
	)
}
