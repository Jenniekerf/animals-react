import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAnimal } from '../redux/actions/animals';

class EditAnimal extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: "",
        animal_type: "",
        area: "",
        status: "",
        description: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.animal.name !== this.props.animal.name) {
      this.setState({
        name: this.props.animal.name,
        animal_type: this.props.animal.animal_type,
        color: this.props.animal.area,
        size: this.props.animal.status,
        description: this.props.animal.description
      });
    }
  }

handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  });
};

update = event => {
  event.preventDefault();

  this.props.updateAnimal(this.state, this.props.animal.id, this.props.history);
};

  render() {
    return (
      <div className="container">
        <form onSubmit={this.update}>
        <div className="form-group">
        <label>Name:</label>
        <input
          onChange={this.handleChange}
          type="text"
          className="form-control"
          name="name"
          value={this.state.name || ""} />
        </div>
        <div className="form-group">
        <label>Type of Animal:</label>
        <input
          onChange={this.handleChange}
          type="text"
          className="form-control"
          name="animal_type"
          value={this.state.animal_type || ""} />
        </div>
        <div className="form-group">
        <label>Color:</label>
        <input
          onChange={this.handleChange}
          type="text"
          className="form-control"
          name="area"
          value={this.state.area || ""} />
        </div>
        <div className="form-group">
        <label>Size:</label>
        <input
          onChange={this.handleChange}
          type="text"
          className="form-control"
          name="status"
          value={this.state.status || ""} />
        </div>
        <div className="form-group">
        <label>Description:</label>
        <input
          onChange={this.handleChange}
          type="text"
          id="inputlg"
          className="form-control input-lg"
          name="description"
          value={this.state.description || ""} />
        </div>
        <button type="submit" className="btn btn-primary">Edit Info</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const animal = state.filter(animal => animal.id == id)[0] || {};

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
