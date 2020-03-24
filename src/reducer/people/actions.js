import { API_URL } from '../../constants';

export const SET_PEOPLE = 'SET_PEOPLE';

export function getPeople() {
    return dispatch =>
        fetch(`${API_URL}/people`)
        .then(res => res.json())
        .then(res => res.results)
        .then(people =>
            dispatch(setPeople(people))
        );
}

export function setPeople(people) {
    return {
        type: SET_PEOPLE,
        people
    }
}