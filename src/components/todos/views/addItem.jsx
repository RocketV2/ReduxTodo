import React from 'react'

class AddItem extends React.Component{
	constructor(){
		super(...arguments)
	}

	render(){
		return (
			<form>
				<input type="text"/>
				<button type='submit'>add</button>
			</form>
		);
	}
}

export default AddItem;