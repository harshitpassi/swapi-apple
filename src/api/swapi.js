import axios from 'axios';
import config from './api-config.js'

const instance = axios.create({
    baseURL: config.url,
    timeout: 1000
});

export function getAllData(endpoint) {
    console.log(config[endpoint]);
    instance.get(config[endpoint]).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
}

export function searchForItem(endpoint, query) {
    instance.get(config[endpoint], {
        search: query
    }).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
}