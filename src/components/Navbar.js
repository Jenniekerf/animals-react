import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    li {
      list-style: none
      margin-right: 90px;
    }

    ul {
      display: flex;
      justify-content: space-around;
    }
`;

const Navbar = () => (
  <StyledNav>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div  className="container">
    <ul  className="navbar-nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/animals/lost">Lost Animals</Link></li>
      <li><Link to="/animals/found">Found Animals</Link></li>
      <li><Link to="/animals/new">Add New Animal</Link></li>
    </ul>
  </div>
  </nav>
  </StyledNav>
);


export default Navbar;
