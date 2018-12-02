import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  constructor(props) {
		super(props);
		this.state = {
			isChecked: false,
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
				id={label}
				type="checkbox"
				value={label}
				checked={isChecked}
				onChange={this.toggleCheckboxChange}
				/>
        <label for={label}>
          {label}
        </label>
			</div>
		);
	}
}

export default Task;