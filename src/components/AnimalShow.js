import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { deleteAnimal } from '../redux/actions/animals'
import { Link } from 'react-router-dom';

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
      <div className="show-wrapper">
      <div className="animal-info">
        <br></br>
         <h1 className="title-hp">Animal Info</h1>

         <p className="animal-key">Name:
           <span className="animal-value"> {animal.name}</span>
         </p>
         <p className="animal-key">Type:
           <span className="animal-value"> {animal.animal_type}</span>
         </p>
         <p className="animal-key">Area:
           <span className="animal-value"> {animal.area}</span>
         </p>
         <p className="animal-key">Description and Contact info:
           <span className="animal-value"> {animal.description}</span>
         </p>

         <Link to={`/animals/${animal.id}/edit`}><bold>Edit Info</bold></Link>
         <br></br>
         <br></br>
         <button onClick={this.delete}>Reunited with owner? <br/> Click here to remove from list!</button>

</div>
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
