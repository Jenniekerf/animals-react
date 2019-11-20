import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAnimal } from '../redux/actions/animals';
import ImageUploader from 'react-images-upload';


class NewAnimal extends Component {

  state = {
    name: "",
    animal_type: "",
    area: "",
    status: "",
    description: "",
    pictures: []
  };

handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

onDrop(picture) {
  this.setState({
    pictures: this.state.pictures.concat(picture)
  });
}

submit = e => {
  e.preventDefault();

  this.props.addAnimal(this.state, this.props.history);
};


  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
      <div className="container">
        <div className="row">

        <div className="col-xs-5 title-container">
          <h1>Add new animal</h1>
          </div>

          <div>
           <form className="col-xs-7 form-container" onSubmit={this.submit}>
          <br></br>

        <label>Name:</label>
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          value={this.state.name} />

        <label>Type of Animal:</label>
        <input
          onChange={this.handleChange}
          type="text"
          name="animal_type"
          value={this.state.animal_type} />
        <br></br>

        <label>Area lost/found:</label>
        <select
          onChange={this.handleChange}
          type="text"

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


        <label>Did you lose your pet or found a lost one?</label>
        <select
          onChange={this.handleChange}
          type="text"

          name="status"
          value={this.state.status}>
          <option value=""></option>
          <option value="lost">Lost</option>
          <option value="found">Found</option>
          </select>

<br></br>
        <label>Description:</label>
        <textarea
          onChange={this.handleChange}
          type="text"
          id="inputlg"
          className="form-control input-lg"
          name="description"
          value={this.state.description} />

        <ImageUploader
          withIcon={true}
          buttonText='Choose a photo'
          onChange={this.onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
            />
          <br></br>
          <br></br>
        <div>
          <button type="submit" className="btn btn-primary">Add Animal</button>
        </div>

        </form>
      </div>
        </div>
      </div>
      </div>
      </div>
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
