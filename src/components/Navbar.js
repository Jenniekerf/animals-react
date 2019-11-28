import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (

  <nav className="navbar navbar-default navbar-expand-sm navbar-dark bg-dark">
    <div  className="container">
      <div className="navbar-header">

<div className="navbar-brand">Paws On The Loose BK</div>
      </div>
    <ul  className="nav navbar-nav nav-fill w-100%">
      <li class="nav-link"><Link to="/">Home</Link></li>
      <li class="nav-link"><Link to="/animals">All Animals</Link></li>
      <li class="nav-link"><Link to="/animals/lost">Lost Animals</Link></li>
      <li class="nav-link"><Link to="/animals/found">Found Animals</Link></li>
      <li class="nav-link"><Link to="/animals/new">Add New Animal</Link></li>
    </ul>

</div>

  </nav>

);


export default Navbar;
