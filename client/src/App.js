import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  
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

    return(
      <div>
        {
          this.state.tasks.map(task => 
              <tr>
                <td>Title: </td>
                <td>{task.title}</td>
              </tr>
            )
        }
      </div>
    );
  }
}

export default App;
