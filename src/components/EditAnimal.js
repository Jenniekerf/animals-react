import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAnimal } from '../redux/actions/animals';

class EditAnimal extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: props.animal.name,
        animal_type: props.animal.animal_type,
        area: props.animal.area,
        status: props.animal.status,
        description: props.animal.description
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
    <div>
      <div className="wrapper" id="full-size">
        <div className="main">
         <div className="container">
           <div className="row">
             <div className="col-xs-5 title-container">
              <h1><strong>Edit info here</strong></h1>
             </div>
                <div className="col-xs-7 form-container">

        <form onSubmit={this.update}>
          <label className="label2">Name:</label>
         <input
           onChange={this.handleChange}
           type="text"
           name="name"
           value={this.state.name || ""} />

         <label className="label2">Type of Animal:</label>
         <input
           onChange={this.handleChange}
           type="text"
           name="animal_type"
           value={this.state.animal_type || ""} />
         <br/>
           <label className="label1">Area lost/found:</label>
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
           <br/>
             <label className="label2">Lost or found?</label>
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
                     <label className="label2">Description:</label>
                     <textarea
                       onChange={this.handleChange}
                       type="text"
                       className="form-control input-lg"
                       name="description"
                       value={this.state.description} />
                     <br></br>
                       <input
                         type="file"
                         onChange={this.imgHandler}
                         name="file" />
                         <button onClick={this.imgUpload}>Upload Photo</button>
                         <br></br>
                         <br></br>
                       <div>
                         <button type="submit">Update Info</button>
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
