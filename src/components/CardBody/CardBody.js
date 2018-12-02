import React, { Component } from 'react';
import Task from '../Task/Task';

//Temporary hard-coded list of tasks 
const items = [
	'One',
	'Two',
	'Three',
];

class CardBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTasks: new Set(),
		}
	}

	createTasks = () => (
		items.map(label => (
			<Task
				label = {label}
				handleCheckboxChange = {this.toggleCheckbox}
				key = {label}
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