import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAnimal } from '../redux/actions/animals';

class NewAnimal extends Component {
  state = {
    name: "",
    animal_type: "",
    color: "",
    size: "",
    description: ""
  };
  render() {
    return (
      <div>
        <form>
        <label>Name:</label>
        <input type="text" name="name" value={this.state.name} />
        <label>Type of Animal:</label>
        <input type="text" name="animal_type" value={this.state.animal_type} />
        <label>Color:</label>
        <input type="text" name="color" value={this.state.color} />
        <label>Size:</label>
        <input type="text" name="size" value={this.state.size} />
        <label>Description:</label>
        <input type="text" name="description" value={this.state.description} />
        </form>
      </div>
    )
  }
}

export default connect(null, {
  addAnimal
})(NewAnimal)
