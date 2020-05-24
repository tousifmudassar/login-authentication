import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AppRouter from './Routes/AppRoute';
import {store,persistor} from './Store';
import {PersistGate} from 'redux-persist/integration/react';
import Login from "../src/Component/Login/LoginContainer";
import  './css/style.css'

ReactDOM.render(
    <Provider
    store={store}
    >
    <PersistGate persistor={persistor} loading={null}>
        <Login />
    </PersistGate>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
