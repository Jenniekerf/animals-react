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
         <p>{animal.animal_type}</p>
         <p>{animal.area}</p>
         <p>{animal.status}</p>
         <p>{animal.description}</p>
         <Link to={`/animals/${animal.id}/edit`}>Edit Info</Link>
         <br></br>
         <StyledButton onClick={this.delete}>Reunited with owner? <br/> Click here to remove from list!</StyledButton>


    </div>
    )
  }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const animal = state.filter(animal => animal.id == id)[0];
    return {
      animal,
      loading: state.loading
  };
};

export default connect(mapStateToProps,
  { deleteAnimal }
)(AnimalShow);
