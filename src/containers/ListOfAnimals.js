import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class ListOfAnimals extends Component {
  render() {
    if (this.props.animals.length === 0) {
      return <p className="lostandfound-wrapper" id="alert">There are currently no animals added</p>;
    }
    return (
      <div className="lostandfound-wrapper">
        <h1 className="container__title">List Of Animals</h1>
        {this.props.animals.map(animal => (
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

export default connect(mapStateToProps)(ListOfAnimals);
