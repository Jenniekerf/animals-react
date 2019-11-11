import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import ListOfAnimals from './containers/ListOfAnimals';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/animals" component={ListOfAnimals} />
      </Router>

    </div>
  );
}

export default App;
