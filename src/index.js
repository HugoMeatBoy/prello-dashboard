import React from 'react';
import { render } from 'react-dom';
import App from './containers/app';

const target = document.querySelector('#root');
require('dotenv').config();

render(
    <App />,
    target,
);
