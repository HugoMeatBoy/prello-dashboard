import React from 'react';
import BoardStatComp from '../BoardStatComp';
import Header from '../header';

import './style.css';

const board = {
    _id:"b00000000001",
    name:"Board 1"
}

const App = () => (
    <div className="appContainer">
    <Header />
        <main>
            <BoardStatComp board={board}/>
        </main>
    </div>
);

export default App;
