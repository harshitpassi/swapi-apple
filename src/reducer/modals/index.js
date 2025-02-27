import { MODAL_OPEN, MODAL_CLOSE } from './actions';

const initialState = false;

export default (state = initialState, action) => {
    switch (action.type) {
        case MODAL_OPEN:
            return true;
        case MODAL_CLOSE:
            return false;
        default:
            return state;
    }
}