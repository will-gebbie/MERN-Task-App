import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import axios from 'axios';

class Tasks extends Component {
  
  constructor(props){

    super(props);

    this.state = {
      tasks: [],
      intervalIsSet: false

    };

  }
  
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 5000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    axios.get("http://127.0.0.1:3001/api/getData")
      .then(res => {
        this.setState({tasks: res.data})
      });
  };

  
  
  render() {
    const {tasks} = this.state;
    return(
      <div>
        <h1>Tasks</h1>
        {
          tasks.map(task => 
              <ul>
                <Button variant="primary">{task.title}</Button>
              </ul>
            )
        }
      </div>
    );
  }
}

export default Tasks;
