import React, { Component } from 'react';
import Task from '../Task/Task';

class PersonalCard extends Component {
  render() {
    return (
      <div className="PersonalCard">
        {/* This is the personal card */}
        <Task />
      </div>
    );
  }
}

export default PersonalCard;