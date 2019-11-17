import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class LostAnimals extends Component {
  render() {
    if (this.props.animals.length === 0) {
      return <p>There are no animals added</p>;
    }

    return (
      <div>
        <h1>Lost Animals</h1>
        {this.props.animals.filter(function (animal) {
          return animal.status === 'lost'
        }).map(animal => (
          <p key={animal.id}>
            <Link to={`/animals/${animal.id}`}>{animal.name}</Link></p>
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

export default connect(mapStateToProps)(LostAnimals);
