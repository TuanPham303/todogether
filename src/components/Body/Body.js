import React, { Component } from 'react';
import PersonalCard from '../PersoncalCard/PersonalCard';

class Body extends Component {
  render() {
    return (
      <div className="Body">
        {/* This is the body */}
        <PersonalCard />
      </div>
    );
  }
}

export default Body;