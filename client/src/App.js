import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Projects from './components/Projects';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      actions: []
    };
  }

  componentDidMount() {
    this.getProjects();
    this.getActions();
  }

  getProjects = () => {
    axios
      .get('http://localhost:5000/api/projects')
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
  };

  getActions = () => {
    axios
      .get('http://localhost:5000/api/actions')
      .then(res => this.setState({ actions: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    const { projects } = this.state;
    return (
      <div className="App">
        <h1>Welcome to projects n stuff da da da</h1>
        {!projects ? (
          <div style={{ color: '#000' }}> loading projects... </div>
        ) : (
          <Projects projects={projects} />
        )}
      </div>
    );
  }
}

export default App;
