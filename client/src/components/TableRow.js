/*
  Component Description: Table Row used in Tasks Component
  Future update: Improve looks of things
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button'

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://127.0.0.1:3001/api/tasks/delete/'+ this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            {this.props.obj.priority}
          </td>
          <td>
            {this.props.obj.due_date}
          </td>
          <td>
            <Link to={"tasks/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <Button onClick={this.delete} className="btn btn-danger">Delete</Button>
          </td>
        </tr>
    );
  }
}

export default TableRow;