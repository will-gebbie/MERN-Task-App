/*
  Component Description: Form to update a task, updates tasks in Database
  Future Update: improve look and feel
*/

import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from "axios";
 
class UpdateTask extends Component {

  constructor(props){
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangePriority = this.onChangePriority.bind(this);
    this.onChangeDuedate = this.onChangeDuedate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      priority: '',
      due_date: ''
    };

  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/tasks/edit/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          title: res.data.title,
          priority: res.data.priority,
          due_date: res.data.due_date
        })
      }).catch(err => {
        console.log(err);
      });
  }

  onChangeTitle(e){
    this.setState({
      title: e.target.value
    });
  }

  onChangePriority(e){
    this.setState({
      priority: e.target.value
    });
  }

  onChangeDuedate(e){
    this.setState({
      due_date: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();
    const task = {
      title: this.state.title,
      priority: this.state.priority,
      due_date: this.state.due_date
    };

    axios.post('http://localhost:3001/api/tasks/update/' + this.props.match.params.id, task).then(res => {
      console.log(res.data);
    });

    this.props.history.push('/tasks');

  }

  render() {
    return (
      <div>
        <h2>Update this Task!</h2>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicText">
            <Form.Label>Task</Form.Label>
            <Form.Control type="text" 
              placeholder="Enter task here"
              value = {this.state.title}
              onChange = {this.onChangeTitle}
               />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Priority</Form.Label>
            <Form.Control type="text" 
            placeholder="Enter priority (low, medium, high)" 
            value = {this.state.priority}
            onChange = {this.onChangePriority}
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Due Date</Form.Label>
            <Form.Control type="text" 
            placeholder="Enter due date month/day @ time" 
            value = {this.state.due_date}
            onChange = {this.onChangeDuedate}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    );
  }
}
 
export default UpdateTask;