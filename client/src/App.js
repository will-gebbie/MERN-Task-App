/*
  Container Description: Main app component (root). Organizes all other components in one file.
*/
import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
//Component Imports
import Header from './components/Header';
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import Workouts from "./components/Workouts";
import Notes from "./components/Notes";
import UpdateTask from './components/UpdateTask';
import AddTask from './components/AddTask';
import Budget from './components/Budget';

class App extends Component {
  
  render() {
    return(
      <Router>
        <div>
          <Header />
          <switch>
            <Route path="/" exact component={Home}/>
            <Route path="/tasks" exact component={Tasks}/>
            <Route path="/tasks/edit:id" component={UpdateTask}/>
            <Route path="/tasks/add" component={AddTask}/>
            <Route path="/workouts" component={Workouts}/>
            <Route path="/notes" component={Notes}/>
            <Route path="/budget" component={Budget}/>
          </switch>
        </div>
      </Router>
    );
  }
}

export default App;
