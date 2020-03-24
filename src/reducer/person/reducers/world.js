import { SET_PERSON_WORLD } from '../actions';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PERSON_WORLD:
            return action.world;
        default:
            return state;
    }
}