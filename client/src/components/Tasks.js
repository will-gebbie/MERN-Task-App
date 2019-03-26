/*
  Component Description: Shows a table of tasks with a create task button on top. Retrieves data from Database and displays it.
  Future update: update design with material ui
*/

import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TableRow from './TableRow';

class Tasks extends Component {

  constructor(props){

    super(props);

    this.state = {
      tasks: []
    };

  }
  
  componentDidMount() {
      //updates every tenth of a second
      this.interval = setInterval(() => {
        axios.get("http://127.0.0.1:3001/api/tasks").then(res => {
            this.setState({tasks: res.data});
          }).catch(err => {
            console.log(err);
          });
      }, 100);

  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  tableRow() {
    return this.state.tasks.map((task, i) => {
      return(
        <TableRow obj={task} key={i}/>
      );
    });


  }

  render() {
    const headStyle = {
      font : "bold",
      fontSize : "20px"
    };
    const createStyle = {
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center',
      fontSize : "25px",
      font : "bold"
    }
    return(
      <div>
        <br />
        <Link to={"tasks/create"} className="btn btn-info" style={createStyle}>Create a Task</Link>
        <br />
        <br />
        <Table>
          <thead style = {headStyle} >
            <tr>
              <th>Task</th>
              <th>Priority</th>
              <th>Due Date</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.tableRow()}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Tasks;
