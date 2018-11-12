import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './common/common.css';
// import 'typeface-roboto'
// import Login from './screens/login/Login';
import Header from './common/header/Header';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Header />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
