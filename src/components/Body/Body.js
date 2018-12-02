import React, { Component, Fragment } from 'react';
import PersonalCard from '../PersoncalCard/PersonalCard';
import './Body.css';

class Body extends Component {
  constructor(props){
    super(props)
    this.state = {
      userList: [],
      isAddingUserActive: true,
    }
  }

  setUser = () => {
    const userList = this.state.userList;
    const userName = document.getElementById('userInput').value;
    userList.push({
      name: userName,
      number: userList.length,
    })
    this.setState({
      userList,
    })
    document.getElementById('userInput').value = '';
  }

  renderUserInput = () => {
    if(this.state.isAddingUserActive){
      return (
        <div className='userInputContainer'>
          <h2>Enter new user</h2>
          <input id='userInput' placeholder='Username'></input>
          <button 
            onClick={this.setUser}
          >
            Add
          </button>
          <ul>
            {this.state.userList.map(user => <li key={user.number}>{user.name}</li>)}
          </ul>
          <button 
            onClick={this.setAddingUserStatus}
          >
            {this.state.isAddingUserActive? 'Submit' : 'Add more users'}
          </button>
        </div>
      )
    }
    return null;
  }

  renderUserCard = () => {
    if(!this.state.isAddingUserActive){
      return (
        <Fragment>
          <button 
            onClick={this.setAddingUserStatus}
          >
            {this.state.isAddingUserActive? 'Submit' : 'Add more users'}
          </button>
          <div id='userCardContainer'>
            {this.state.userList.map(user => <PersonalCard name={user.name} key={user.number} />)}
          </div>
        </Fragment>
      )
    }
    return null;
  }

  setAddingUserStatus = () => {
    this.setState({
      isAddingUserActive: !this.state.isAddingUserActive,
    })
  }

  render() {
    return (
      <Fragment>
        {this.renderUserInput()}
        {this.renderUserCard()}
      </Fragment>
    );
  }
}

export default Body;