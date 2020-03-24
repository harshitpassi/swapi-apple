import { SET_PEOPLE } from './actions';

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
        default:
            return state;
    }
}