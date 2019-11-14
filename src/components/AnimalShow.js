import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: purple

`;

function AnimalShow(props) {
  if (!props.animal) {
    return <p>Loading...</p>
  }
  return (
    <div>
       <h1>Animal Info</h1>
       <p>{props.animal.name}</p>
       <p>{props.animal.size}</p>
       <StyledButton>Back with owner? Click here!</StyledButton>
    </div>
  )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const animal = state.filter(animal => animal.id == id)[0];
    return {
      animal
  };
};

export default connect(mapStateToProps)(AnimalShow)
