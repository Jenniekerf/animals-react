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

handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  });
};

submit = event => {
  event.preventDefault();

  this.props.addAnimal(this.state, this.props.history);
};


  render() {
    return (
      <div className="container">
        <form onSubmit={this.submit}>
        <div className="form-group">
        <label>Name:</label>
        <input
          onChange={this.handleChange}
          type="text"
          className="form-control"
          name="name"
          value={this.state.name} />
        </div>
        <div className="form-group">
        <label>Type of Animal:</label>
        <input
          onChange={this.handleChange}
          type="text"
          className="form-control"
          name="animal_type"
          value={this.state.animal_type} />
        </div>
        <div className="form-group">
        <label>Color:</label>
        <input
          onChange={this.handleChange}
          type="text"
          className="form-control"
          name="color"
          value={this.state.color} />
        </div>
        <div className="form-group">
        <label>Size:</label>
        <input
          onChange={this.handleChange}
          type="text"
          className="form-control"
          name="size"
          value={this.state.size} />
        </div>
        <div className="form-group">
        <label>Description:</label>
        <input
          onChange={this.handleChange}
          type="text"
          id="inputlg"
          className="form-control input-lg"
          name="description"
          value={this.state.description} />
        </div>
        <button type="submit" className="btn btn-primary">Add Animal</button>
        </form>
      </div>
    );
  }
}


export default connect(
  null,
   {
     addAnimal
   }
)(NewAnimal);
