import React from 'react';
import {Container, Row} from 'react-bootstrap';
import './App.css';
import PeopleList from './components/PeopleList';
import PersonProfile from './components/PersonProfile';
import PersonWorld from './components/PersonWorld';
import PersonMovies from './components/PersonMovies';
import Navigation from './components/Navigation';


function App() {
  return (
    <Container fluid="sm">
      <Navigation />
      <Row>
        <PeopleList />
        <PersonProfile />
        <PersonWorld />
        <PersonMovies />
      </Row>
    </Container>
  );
}

export default App;
