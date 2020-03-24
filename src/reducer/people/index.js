import { SET_PEOPLE } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PEOPLE:
            return action.people;
        default:
            return state;
    }
}