import React, { Component } from 'react';
import styled from 'styled-components';

const StyledProject = styled.div`
  padding: 2rem;
  border-radius: 5px;
  background: #fff;
  margin-bottom: 2rem;
`;

class Project extends Component {
  render() {
    const { project } = this.props;
    return (
      <StyledProject>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </StyledProject>
    );
  }
}

export default Project;
