import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import human from './icons/human.svg';
import droid from './icons/droid.svg';
import other from './icons/wookie.svg';
import {connect} from 'react-redux';
import { setCurrentPerson, getPersonProfile, getPersonWorld, getPersonMovies, getPersonStarships } from '../../reducer/person/actions';
import { openProfileModal } from '../../reducer/modals/actions'

const PersonCard = ({props, setPerson}) => {
    let specie = (props.ownProps.currentPerson && props.ownProps.currentPerson.species.length !== 0) ? props.ownProps.currentPerson.species[0].split('/')[5] : null;
    let filmsExist = (props.ownProps.currentPerson && props.ownProps.currentPerson.films);
    let starshipsExist = (props.ownProps.currentPerson && props.ownProps.currentPerson.starships);
    let img;
    switch(specie) {
        case '1' :
            img = human;
            break;
        case '2' :
            img = droid;
            break;
        default :
            img = other;
    }
    return <Card onClick={setPerson(props.ownProps.currentPerson.url, props.ownProps.currentPerson.homeworld, props.ownProps.currentPerson.films, props.ownProps.currentPerson.starships)} className="person-card" style={{ width: '100%', cursor: 'pointer', marginTop: '10px' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
    <Card.Title>{props.ownProps.currentPerson.name}</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush person-list">
        <ListGroupItem>Films: { filmsExist && props.ownProps.currentPerson.films.length}</ListGroupItem>
        <ListGroupItem>Starships: { starshipsExist && props.ownProps.currentPerson.starships.length}</ListGroupItem>
    </ListGroup>
    </Card>
}

const mapStateToProps = ({people}, ownProps)=>({
    props:{
        people,
        ownProps
    }
});

const mapDispatchToProps = dispatch => ({
    setPerson(profileUrl, worldUrl, films, starships) {
        let id = profileUrl.split('/')[5];
        return () => {
            dispatch(setCurrentPerson(id));
            dispatch(getPersonProfile(profileUrl));
            dispatch(getPersonWorld(worldUrl));
            dispatch(getPersonMovies(films));
            dispatch(getPersonStarships(starships));
            dispatch(openProfileModal());
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonCard);