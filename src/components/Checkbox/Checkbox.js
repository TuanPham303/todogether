import React, { Component } from 'react';
import './Checkbox.css';

class Checkbox extends Component {
  state = {
    isChecked: false,
  }

  //This function will be called when user checks or 
  //unchecks a checkbox.
  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

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

export default Checkbox;