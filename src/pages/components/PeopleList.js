import React from 'react';
import {Col, Card, Button, Row, Spinner} from 'react-bootstrap';
import {connect} from 'react-redux';
import { setCurrentPerson, getPersonProfile, getPersonWorld, getPersonMovies, getPersonStarships } from '../../reducer/person/actions';

const PeopleList = ({people, setPerson}) => 
    <Col lg={12}>
    <Card>
    <Card.Header as="h3">People</Card.Header>
    <Card.Body>
        <Row>
        {people.loading && <Spinner animation="grow" variant="info" size="lg" style={{margin: "auto"}} />}
        {!people.loading && people.data.map((p, index)=> <Col md={{span:2, offset: index % 5===0 ? 1 : 0 }}>
            <Button className="people-button" variant="primary" onClick={setPerson(p.url, p.homeworld, p.films, p.starships)}>{p.name}</Button>{' '}
        </Col>
            )}
        </Row>
    </Card.Body>
    </Card>
    </Col>;

const mapStateToProps = ({people})=>({
    people,
});

const mapDispatchToProps = dispatch => ({
    setPerson(profileUrl, worldUrl, films, starships, setShow) {
        let id = profileUrl.split('/')[5];
        return () => {
            dispatch(setCurrentPerson(id));
            dispatch(getPersonProfile(profileUrl));
            dispatch(getPersonWorld(worldUrl));
            dispatch(getPersonMovies(films));
            dispatch(getPersonStarships(starships));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);