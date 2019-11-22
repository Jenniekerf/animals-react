import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class LostAnimals extends Component {
  render() {
    let lostAnimals = this.props.animals.filter(function (animal) {
      return animal.status === "lost"
    })

    if (lostAnimals.length === 0) {
      return <p className="lostandfound-wrapper" id="alert">There are currently no animals added</p>;
    }

    return (
      <div className="lostandfound-wrapper">
        <h1 className="container__title">Lost Animals</h1>
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
