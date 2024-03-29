import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import NewAnimal from './components/NewAnimal';
import AnimalShow from './components/AnimalShow';
import EditAnimal from './components/EditAnimal'
import Navbar from './components/Navbar';
import ListOfAnimals from './components/ListOfAnimals';
import LostAnimals from './components/LostAnimals';
import FoundAnimals from './components/FoundAnimals';

import { connect } from 'react-redux';
import { getAnimals } from './redux/actions/animals';



class App extends React.Component {
  componentDidMount() {
    this.props.getAnimals();
  }
  render() {

    return (

  <div className="App">

    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/animals" component={ListOfAnimals} />
          <Route path="/animals/lost" component={LostAnimals} />
          <Route path="/animals/found" component={FoundAnimals} />
          <Route path="/animals/new" component={NewAnimal} />
          <Route path="/animals/:id/edit" component={EditAnimal} />
          <Route path="/animals/:id" component={AnimalShow} />


        </Switch>
    </Router>

    </div>
  );
 }
}

export default connect(
  null,
   { getAnimals }
)(App);
