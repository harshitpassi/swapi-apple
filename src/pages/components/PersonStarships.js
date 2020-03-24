import React from 'react';
import {Col} from 'react-bootstrap';
import {connect} from 'react-redux';

const PersonStarships = ({starships}) =>  <Col md={3}>
    {starships.length > 0 && <h1>Starships</h1>}
    <ul>
        {starships.map(starship => {
        return <li key={starship.name}> {starship.name}</li>
        })}
    </ul>
</Col>

const mapStateToProps = ({person : {starships}}) => ({
    starships
});

export default connect(mapStateToProps)(PersonStarships);