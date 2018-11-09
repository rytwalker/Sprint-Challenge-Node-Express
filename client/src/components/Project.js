import React, { Component } from 'react';

class Project extends Component {
  render() {
    const { project } = this.props;
    return (
      <div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    );
  }
}

export default Project;
