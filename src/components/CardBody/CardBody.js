import React, { Component } from 'react';
import Task from '../Task/Task';

const uuidv4 = require('uuid/v4');

class CardBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTasks: new Set(),
		}
	}

	createTasks = () => (
		this.props.tasks.map(label => (
			<Task
				label = {label}
				handleCheckboxChange = {this.toggleCheckbox}
				key = {uuidv4()}
			/>
		))
	)

	toggleCheckbox = label => {
		if (this.state.selectedTasks.has(label)) {
			this.state.selectedTasks.delete(label);
		} else {
			this.state.selectedTasks.add(label);
		} 
	}

	render() {
		return (
			<div className="Task">
				<form onSubmit={this.handleFormSubmit}>
						{this.createTasks()}
				</form>
			</div>
		);
	}
}

export default CardBody;