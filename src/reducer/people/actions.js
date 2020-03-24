import { API_URL } from '../../constants';

export const SET_PEOPLE = 'SET_PEOPLE';
export const SHOW_LOADER = 'SHOW_LOADER';

export function getPeople() {
    return dispatch =>
        fetch(`${API_URL}/people`)
        .then(res => res.json())
        .then(res => res.results)
        .then(people =>
            dispatch(setPeople(people))
        );
}

export function getPeoplePage(pageNumber) {
    return dispatch => {
        dispatch(showLoader());
        return fetch(`${API_URL}/people/?page=${pageNumber}`)
            .then(res => res.json())
            .then(res => res.results)
            .then(people =>
                dispatch(setPeople(people))
            );
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
        loading: true
    }
}

export function setPeople(people) {
    return {
        type: SET_PEOPLE,
        people
    }
}