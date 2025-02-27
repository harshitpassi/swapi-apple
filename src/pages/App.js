import React from 'react';
import {Container, Row, Jumbotron} from 'react-bootstrap';
import './App.css';
import PeopleList from './components/PeopleList';
import Navigation from './components/Navigation';
import {connect} from 'react-redux';


function App({person}) {
  return (
    <Container fluid>
      <Navigation />
      <Jumbotron>
  <h1>Star Wars Character Catalogue</h1>
  <p>
    This is a Star Wars Character Catalogue, built on top of the <a href="https://swapi.co" target="_blank" rel="noopener noreferrer">SWAPI</a> API. You can click on
    the name of a character to learn all about their characteristics, their homeworlds, the films they appeared in, and more!
  </p>
</Jumbotron>
      <Row>
        <PeopleList />
      </Row>
    </Container>
  );
}

const mapStateToProps= ({person}) => ({
  person
});

export default connect(mapStateToProps)(App);
