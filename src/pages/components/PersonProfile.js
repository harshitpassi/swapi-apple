import React from 'react';
import {connect} from 'react-redux';

const PersonProfile = ({profile, world}) => {
    return <>
    {profile.name && <p>Name: {profile.name}</p>}
    {profile.height && <p>Height: {profile.height} cm</p>}
    {profile.mass && <p>Mass: {profile.mass} kg</p>}
    {profile.gender && <p>Gender: {profile.gender}</p>}
    {world.name && <p>Homeworld: {world.name}</p>}
</>
};

const mapStateToProps = ({person : {profile, world}}) => ({
    profile, world
});

export default connect(mapStateToProps)(PersonProfile);