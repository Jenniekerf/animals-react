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
      <div class="container">
        <form>
        <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" name="name" value={this.state.name} />
        </div>
        <div class="form-group">
        <label>Type of Animal:</label>
        <input type="text" class="form-control" name="animal_type" value={this.state.animal_type} />
        </div>
        <div class="form-group">
        <label>Color:</label>
        <input type="text" class="form-control" name="color" value={this.state.color} />
        </div>
        <div class="form-group">
        <label>Size:</label>
        <input type="text" class="form-control" name="size" value={this.state.size} />
        </div>
        <div class="form-group">
        <label>Description:</label>
        <input type="text" id="inputlg" class="form-control input-lg" name="description" value={this.state.description} />
        </div>
        <button type="submit" class="btn btn-primary">Add Animal</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {
  addAnimal
})(NewAnimal)
