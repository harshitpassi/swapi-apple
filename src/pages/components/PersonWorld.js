import React from 'react';
import {connect} from 'react-redux';

const notUnknown = item => item && item !== 'unknown';

const PersonWorld = ({world}) => {
    return <>
    {notUnknown(world.name) && <p>Name: {world.name}</p>}
    {notUnknown(world.population) && <p>Population: {world.population}</p>}
    {notUnknown(world.rotation_period) && <p>Rotation Period: {world.rotation_period} hours</p>}
    {notUnknown(world.orbital_period) && <p>Orbital Period: {world.orbital_period} days</p>}
    {notUnknown(world.diameter) && <p>Diameter: {world.diameter} km</p>}
    {notUnknown(world.climate) && <p>Climate: {world.climate}</p>}
    {notUnknown(world.gravity) && <p>Gravity: {world.gravity}</p>}
    {notUnknown(world.terrain) && <p>Terrain: {world.terrain}</p>}
    {notUnknown(world.surface_water) && <p>Surface Water: {world.surface_water}</p>}
</>
};

const mapStateToProps = ({person : {world}}) => ({
    world
});

export default connect(mapStateToProps)(PersonWorld);