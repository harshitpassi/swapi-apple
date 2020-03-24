import { SET_PERSON_STARSHIPS } from '../actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PERSON_STARSHIPS:
            return action.starships;
        default:
            return state;
    }
}