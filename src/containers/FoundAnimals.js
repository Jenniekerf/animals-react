import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class FoundAnimals extends Component {
  render() {
    if (this.props.animals.length === 0) {
      return <p>There are no animals added</p>;
    }

    return (
      <div className="lostandfound-wrapper">
        <h1 className="container__title">Found Animals</h1>
        {this.props.animals.filter(function (animal) {
          return animal.status === 'found'
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

export default connect(mapStateToProps)(FoundAnimals);
