import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import NewAnimal from './components/NewAnimal';
import ListOfAnimals from './containers/ListOfAnimals';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/animals" component={ListOfAnimals} />
        <Route path="/animals/new" component={NewAnimal} />
      </Router>

    </div>
  );
}

export default App;
