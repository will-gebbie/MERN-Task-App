/*
  Component Description: Main app component (root). Organizes all other components in one file.
  Acts as Router for front end.
  Future Updates: Add more components
*/
import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
//Component Imports
import Header from './components/Header';
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import UpdateTask from './components/UpdateTask';
import AddTask from './components/AddTask';

class App extends Component {
  
  render() {
    return(
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/tasks" exact component={Tasks}/>
            <Route path="/tasks/edit/:id" component={UpdateTask}/>
            <Route path="/tasks/create" component={AddTask}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
