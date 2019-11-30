import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const LostAnimals = (props) =>  {
const lostAnimals = props.animals.filter(function (animal) {
  return animal.status === 'lost'
})

  if (lostAnimals.length === 0) {
    return <p id="alert">There are currently no animals added</p>
  }
     return (
      <div className="lostandfound-wrapper">
        <h1 className="container__title">Lost Animals</h1>
        {lostAnimals.filter(function (animal) {
          return animal.status === 'lost'
        }).map(animal => (
          <p key={animal.id}>
            <Link to={`/animals/${animal.id}`}>{animal.name}</Link></p>
        ))}
     </div>
    );
  }


const mapStateToProps = (state) => {
return {
  animals: state
  };
};

export default connect(mapStateToProps)(LostAnimals);
