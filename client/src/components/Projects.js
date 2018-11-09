import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component {
  state = {};
  render() {
    const { projects } = this.props;
    return (
      <div>
        {projects.map(project => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    );
  }
}

export default Projects;
