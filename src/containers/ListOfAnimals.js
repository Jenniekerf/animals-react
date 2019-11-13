import React, { Component } from 'react';
import { connect } from 'react-redux'

class ListOfAnimals extends Component {
  render() {
    if (this.props.animals.length === 0) {
      return <p>Loading..</p>;
    }
    return (
      <div>
        <h1>List Of Animals</h1>
        {this.props.animals.map(animal => (
            <p>{animal.name}</p>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
return {
  animals: state
  };
};

export default connect(mapStateToPropsgetAnimal)(ListOfAnimals);
