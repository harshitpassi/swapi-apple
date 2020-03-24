import React from 'react';
import {Navbar} from 'react-bootstrap';

export default () => (<Navbar className='header-bar' variant="dark">
<Navbar.Brand href="#home">
  <img
    alt=""
    src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Star_Wars_Yellow_Logo.svg"
    width="60"
    height="60"
    className="d-inline-block align-top"
  />{' '}
  Character Catalogue
</Navbar.Brand>
</Navbar>) 