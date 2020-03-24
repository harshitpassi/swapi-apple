export const SET_CURRENT_PERSON = 'SET_CURRENT_PERSON';
export const SET_PERSON_PROFILE = 'SET_PERSON_PROFILE';
export const SET_PERSON_WORLD = 'SET_PERSON_WORLD';
export const SET_PERSON_MOVIES = 'SET_PERSON_MOVIES';
export const SET_PERSON_STARSHIPS = 'SET_PERSON_STARSHIPS';

export function setCurrentPerson(id) {
    return {
        type: SET_CURRENT_PERSON,
        id
    };
}

export function getPersonProfile(url) {
    return dispatch =>
        fetch(url)
        .then(res => res.json())
        .then(profile => {
            dispatch(setPersonProfile(profile));
        });
}

export function setPersonProfile(profile) {
    return {
        type: SET_PERSON_PROFILE,
        profile,
    };
}

export function getPersonWorld(url) {
    return dispatch =>
        fetch(url)
        .then(res => res.json())
        .then(world => {
            dispatch(setPersonWorld(world));
        });
}

export function setPersonWorld(world) {
    return {
        type: SET_PERSON_WORLD,
        world,
    };
}

export function getPersonMovies(movieUrls) {
    return dispatch =>
        Promise.all(movieUrls.map(url =>
            fetch(url)
            .then(res => res.json())
        ))
        .then(movies => {
            dispatch(setPersonMovies(movies));
        });
}

export function setPersonMovies(movies) {
    return {
        type: SET_PERSON_MOVIES,
        movies,
    };
}

export function getPersonStarships(starshipUrls) {
    return dispatch =>
        Promise.all(starshipUrls.map(url =>
            fetch(url)
            .then(res => res.json())
        ))
        .then(starships => {
            dispatch(setPersonStarships(starships));
        });
}

export function setPersonStarships(starships) {
    return {
        type: SET_PERSON_STARSHIPS,
        starships,
    };
}