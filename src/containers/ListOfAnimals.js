import React, { Component } from 'react';
import { getAnimals } from '../redux/actions/animals'
import { connect } from 'react-redux'

class ListOfAnimals extends Component {

componentDidMount() {
  this.props.getAnimals();

}

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

export default connect(
  mapStateToProps, { getAnimals })(ListOfAnimals);
