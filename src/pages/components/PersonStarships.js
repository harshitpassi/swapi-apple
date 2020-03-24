import React from 'react';
import {connect} from 'react-redux';

const PersonStarships = ({starships}) =>  <>
    <ul>
        {starships.map(starship => {
        return <li key={starship.name}> {starship.name}</li>
        })}
    </ul>
</>

const mapStateToProps = ({person : {starships}}) => ({
    starships
});

export default connect(mapStateToProps)(PersonStarships);