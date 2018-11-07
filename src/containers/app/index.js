import React from 'react';
import { Route } from 'react-router-dom';
import BoardStatComp from '../BoardStatComp';

import './style.css';

const App = () => (
    <div className="appContainer">
        <main>
            <BoardStatComp />
        </main>
    </div>
);

export default App;
