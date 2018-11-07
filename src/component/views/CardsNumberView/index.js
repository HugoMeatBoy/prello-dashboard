import React from 'react';

// ===== Others
import './style.css';

// ==================================

const CardsNumberView = props =>(    
    <div className="dataType row">
        <div className="dataValues">
            <div className="col-sm-6">
                Number of cards in board: <b>{props.data.cardsNumber}</b>
            </div>
            <div className="col-sm-6">
                Number of members in board: <b>{props.data.membersNumber}</b>
            </div>
        </div>
    </div>
)

export default CardsNumberView