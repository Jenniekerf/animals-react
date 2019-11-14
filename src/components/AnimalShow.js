import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { deleteAnimal } from '../redux/actions/animals'
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
    background-color: LightSteelBlue
`;

class AnimalShow extends Component {
  delete = () => {
    this.props.deleteAnimal(this.props.animal.id, this.props.history);
  };
  render() {
    const { animal, loading } = this.props;
    if (loading && !animal) {
      return <p>Loading...</p>
    }

    if (!loading && !animal) {
      return <p>Animal not found</p>
    }
    return (
      <div>
         <h1>Animal Info</h1>

         <p>{animal.name}</p>
         <p>{animal.size}</p>

         <StyledButton onClick={this.delete}>Back with owner? Click here!</StyledButton>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const animal = state.filter(animal => animal.id == id)[0];
    return {
      animal
  };
};

export default connect(mapStateToProps,
  { deleteAnimal }
)(AnimalShow);
