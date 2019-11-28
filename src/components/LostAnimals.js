import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const LostAnimals = (props) =>  {
     return (

      <div className="lostandfound-wrapper">
        <h1 className="container__title">Lost Animals</h1>
        {props.animals.filter(function (animal) {
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
