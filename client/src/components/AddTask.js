/*
  Component Description: Form to create task, adds new task to Database
  Future Updates: implement material ui to make it look sleek
*/

import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';
import axios from "axios";
 
class AddTask extends Component {

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
    }

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

    axios.post('http://localhost:3001/api/tasks/add', task).then(res => {
      console.log(res.data);
    });

    this.setState({
      title: '',
      priority: '',
      due_date: ''
    })

    this.props.history.push('/tasks');

  }

  render() {
    return (
      <Container>
        <br />
        <h2>Create a New Task!</h2>
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
            placeholder="Enter Due Date month/day @ time" 
            value = {this.state.due_date}
            onChange = {this.onChangeDuedate}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
 
export default AddTask;