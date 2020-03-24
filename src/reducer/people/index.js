import { SET_PEOPLE, SHOW_LOADER } from './actions';

const initialState = {
    loading: true,
    data: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PEOPLE:
            return {
                loading: false,
                data: action.people
            };
        case SHOW_LOADER:
            return {
                loading: true
            }
        default:
            return state;
    }
}