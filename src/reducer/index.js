import { combineReducers } from 'redux';
import people from './people';
import person from './person';
import modals from './modals/index';

export default combineReducers({
    people,
    person,
    modals
});