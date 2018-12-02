import CardBody from '../CardBody/CardBody';
import React, { Component, Fragment } from 'react';
import './PersonalCard.css';

class PersonalCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      isAddingTask: false,
    }
    this.taskInputRef = React.createRef();
  }

  toggleAddingTaskField = () => {
    this.setState({
      isAddingTask: !this.state.isAddingTask,
    })
  }

  addTask = () => {
    const task = this.taskInputRef.current.value;
    const tasks = this.state.tasks;
    tasks.push(task);
    this.setState({
      tasks,
    })
    this.taskInputRef.current.value = '';
  }

  renderAddingTaskInput = () => {
    if(this.state.isAddingTask){
      return (
        <div className='addingTaskWrapper'>
          <input id='taskInput' ref={this.taskInputRef}></input>
          <button onClick={this.addTask}>Add</button>
        </div>
      )
    }
    return null;
  }

  render() {
    return (
      <Fragment>
        <div className='personalCardWrapper'>
          <header>
            {this.props.name}
            <div
              onClick={this.toggleAddingTaskField}
            >
              {this.state.isAddingTask? 'x' : '+'}
            </div>
          </header>
          {this.renderAddingTaskInput()}
          <CardBody 
            tasks={this.state.tasks}
          />
        </div>
      </Fragment>
    );
  }
}

export default PersonalCard;