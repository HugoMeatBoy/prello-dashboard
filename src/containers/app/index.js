import React from 'react';
import BoardStatComp from '../BoardStatComp';
import Header from '../header';

import './style.css';

const App = () => (
    <div className="appContainer">
    <Header />
        <main>
            <BoardStatComp />
        </main>
    </div>
);

export default App;
