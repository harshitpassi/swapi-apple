import React from 'react';
import {Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import { setCurrentPerson, getPersonProfile, getPersonWorld, getPersonMovies } from '../../reducer/person/actions';

const PeopleList = ({people, setPerson}) => 
    <Col md={6}>
        <h1>People</h1>
        <ul>
            {people.map((p)=>
                <li key={p.name} onClick={setPerson(p.url, p.homeworld, p.films)}>
                    {p.name}
                </li>
                )}
        </ul>
    </Col>;

const mapStateToProps = ({people})=>({
    people,
});

const mapDispatchToProps = dispatch => ({
    setPerson(profileUrl, worldUrl, films) {
        let id = profileUrl.split('/')[5];
        return () => {
            dispatch(setCurrentPerson(id));
            dispatch(getPersonProfile(profileUrl));
            dispatch(getPersonWorld(worldUrl));
            dispatch(getPersonMovies(films));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);