import React, { Component } from 'react';
import Checkbox from '../Checkbox/Checkbox';

//Temporary hard-coded list of tasks 
const items = [
	'One',
	'Two',
	'Three',
];

class Task extends Component {

createCheckboxes = () => (
	items.map(this.createCheckbox)
)

createCheckbox = label => (
	<Checkbox
		label = {label}
		handleCheckboxChange = {this.toggleCheckbox}
		key = {label}
	/>
)

toggleCheckbox = label => {
	if (this.selectedCheckboxes.has(label)) {
		this.selectedCheckboxes.delete(label);
	} else {
		this.selectedCheckboxes.add(label);
	} 
}

componentWillMount = () => {
	this.selectedCheckboxes = new Set();
}

	render() {
		return (
			<div className="Task">
				<form onSubmit={this.handleFormSubmit}>
            {this.createCheckboxes()}
        </form>
			</div>
		);
	}
}

export default Task;