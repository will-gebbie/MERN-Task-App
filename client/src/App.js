import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  
  constructor(props){

    super(props);

    this.state = {
      data: [],
      id: 0,
      title: null,
      isDone: false,
      intervalIsSet: false

    };

  }
  
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = function(){
    fetch("http://localhost:3001/api/getData")
    .then(function(data){
      return data.json();
    })
    .then(function(res){
      return this.setState({data : res.data})
    })
  };
  
  render() {
    return <h1>{this.state.data}</h1>
  }
}

export default App;
