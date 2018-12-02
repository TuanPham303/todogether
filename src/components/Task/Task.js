import React, { Component } from 'react';
import './Task.css';

const uuidv4 = require('uuid/v4');

class Task extends Component {
  constructor(props) {
		super(props);
		this.state = {
			isChecked: false,
			id: uuidv4(),
		}
	}

  //This function will be called when user checks or 
  //unchecks a checkbox.
  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState({
			isChecked: !this.state.isChecked,
		});

    handleCheckboxChange(label);
  }

	render() {
    const { label } = this.props;
    const { isChecked } = this.state;

		return (
			<div className="inputGroup">
				<input 
				id={this.state.id}
				type="checkbox"
				value={label}
				checked={isChecked}
				onChange={this.toggleCheckboxChange}
				/>
        <label htmlFor={this.state.id}>
          {label}
        </label>
			</div>
		);
	}
}

export default Task;