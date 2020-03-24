import { SET_PERSON_MOVIES } from '../actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PERSON_MOVIES:
            return action.movies.sort((movie1, movie2) =>
                movie1.episode_id - movie2.episode_id
            );
        default:
            return state;
    }
}