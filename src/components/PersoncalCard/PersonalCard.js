import CardBody from '../CardBody/CardBody';
import React, { Component, Fragment } from 'react';
import './PersonalCard.css';

class PersonalCard extends Component {
  render() {
    return (
      <Fragment>
        <div className='personalCardWrapper'>
          <header>
            {this.props.name}
          </header>
          <CardBody />
        </div>
      </Fragment>
    );
  }
}

export default PersonalCard;