import React, { Component } from 'react';
import { getAnimals } from '../redux/actions/animals'
import { connect } from 'react-redux'

class ListOfAnimals extends Component {

componentDidMount() {
  this.props.getAnimals();

}

  render() {
    return (
      <div>
        <h1>List Of Animals</h1>
      </div>
    )
  }
}

export default connect(null, { getAnimals })(ListOfAnimals);
