import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAnimal } from '../redux/actions/animals';

class EditAnimal extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: props.animal.name,
        animal_type: props.animal.animal_type,
        color: props.animal.color,
        size: props.animal.size,
        description: props.animal.description
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.animal.name !== this.props.animal.name) {
      this.setState({
        name: this.props.animal.name,
        animal_type: this.props.animal.animal_type,
        color: this.props.animal.color,
        size: this.props.animal.size,
        description: this.props.animal.description
      })
    }
  }

handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  });
};

update = event => {
  event.preventDefault();

  this.props.updateAnimal(this.state, this.props.animal.id, this.props);
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
        <button type="submit" className="btn btn-primary">Edit Info</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const animal = state.filter(animal => animal.id == id)[0] || {}
  return {
    animal
  };
};



export default connect(
  mapStateToProps,
   {
     updateAnimal
   }
)(EditAnimal);
