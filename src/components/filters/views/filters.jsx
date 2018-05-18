
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {FILTER} from '../actionTypes'

const Filter = ({selectFilter}) => {

	return (
		<div onClick={selectFilter}>
			<label name="all">
				<input type="radio" name="filter" value="all"/>
				<span>全部</span>
			</label>
			<label name="finished">
				<input type="radio" name="filter" value="finished"/>
				<span>已办</span>
			</label>
			<label name="unfinished">
				<input type="radio" name="filter" value="unfinished"/>
				<span>未办</span>
			</label>
		</div>
	);
}
Filter.propTypes = {
	selectFilter: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
	return {
		selectFilter: (e) => {
			if(e && e.target.tagName=='INPUT' && e.type==='click'){
				dispatch({
					type: FILTER,
					filter: e.target.value
				})
			}
		},
	}
}
export default connect(null,mapDispatchToProps)(Filter)

