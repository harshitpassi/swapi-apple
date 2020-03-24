import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import './fonts/star-jedi.ttf';
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {getPeople} from './reducer/people/actions'

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

store.dispatch(getPeople());

const root = document.getElementById('root');

ReactDOM.render( 
<Provider store={store}>
    <App /> 
</Provider>
, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();