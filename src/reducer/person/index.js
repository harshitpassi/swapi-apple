import { combineReducers } from 'redux';
import id from './reducers/id';
import profile from './reducers/profile';
import world from './reducers/world';
import movies from './reducers/movies';
import starships from './reducers/starships';

export default combineReducers({
    id,
    profile,
    world,
    movies,
    starships
})