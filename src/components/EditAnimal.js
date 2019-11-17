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
        area: this.props.animal.area,
        status: this.props.animal.status,
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
          <label>Area lost/found:</label>
          <select
            onChange={this.handleChange}
            type="text"
            className="form-control"
            name="area"
            value={this.state.area}>
              <option value=""></option>
              <option value="Dumbo">Dumbo</option>
              <option value="Williamsburg">Williamsburg</option>
              <option value="Park Slope">Park Slope</option>
              <option value="Brooklyn Heights">Brooklyn Heights</option>
              <option value="Bushwick">Bushwick</option>
              <option value="Bedstuy">Bedstuy</option>
              <option value="Crown Heights">Crown Heights</option>
              <option value="Fort Greene">Fort Greene</option>
              <option value="Flatbush">Flatbush</option>
              <option value="Prospect Heights">Prospect Heights</option>
              <option value="Greenpoint">Greenpoint</option>
              <option value="Carroll Gardens">Carroll Gardens</option>
              <option value="Cobble Hill">Cobble Hill</option>
              <option value="Red Hook">Red Hook</option>
              <option value="Downtown Brooklyn">Downtown Brooklyn</option>
              <option value="Sunset Park">Sunset Park</option>
              <option value="Bay Ridge">Bay Ridge</option>
              <option value="Clinton Hill">Clinton Hill</option>
              <option value="Boerum Hill">Boerum Hill</option>
              <option value="Gowanus">Gowanus</option>
            </select>
        </div>
        <div className="form-group">
          <label>Did you lose your pet or found a lost one?</label>
          <select
            onChange={this.handleChange}
            type="text"
            className="form-control"
            name="status"
            value={this.state.status}>
            <option value=""></option>
            <option value="Lost">Lost</option>
            <option value="Found">Found</option>
            </select>
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
