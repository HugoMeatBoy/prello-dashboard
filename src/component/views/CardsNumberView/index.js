import React from 'react';

// ===== Others
import './style.css';

// ==================================

const CardsNumberView = props =>(    
    <div className="col-sm-6 dataType">
        <div className="dataValues">
            Number of cards in board: <b>{props.data}</b>
        </div>
    </div>
)

export default CardsNumberView