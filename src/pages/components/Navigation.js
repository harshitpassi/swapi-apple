import React from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import { getPeoplePage } from '../../reducer/people/actions';

const Navigation = ({goHome}) => (<Navbar className='header-bar' variant="dark">
<Navbar.Brand style={{cursor: 'pointer'}} onClick={goHome()} >
  <img
    alt=""
    src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Star_Wars_Yellow_Logo.svg"
    width="90"
    height="90"
    className="d-inline-block"
    style={{marginRight: '10px'}}
  />{' '}
  Character Catalogue
</Navbar.Brand>
</Navbar>)

const mapDispatchToProps = dispatch => ({
    goHome() {
        return () => {
            dispatch(getPeoplePage(1));
        }
    }
});

export default connect(null, mapDispatchToProps)(Navigation);