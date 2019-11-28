import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const FoundAnimals = (props) =>  {
     return (
        <div className="lostandfound-wrapper">
        <h1 className="container__title">Found Animals</h1>
        {props.animals.filter(function (animal) {
          return animal.status === 'found'
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

export default connect(mapStateToProps)(FoundAnimals);
