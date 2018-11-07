import React from 'react';

// ===== Others
import './style.css';

// ==================================

const GeneralInfoView = props =>(    
    <div className="dataType dataValues">

        <div className="row">
            <div className="col-sm-12">
                <h1 className="statsTitle">Overview</h1>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-6">
                First card created: <b>{props.data.firstCardCreated}</b>
            </div>
            <div className="col-sm-6">
                Last card created: <b>{props.data.lastCardCreated}</b>
            </div>
        </div>
        
        <div className="row">
            <div className="col-sm-4">
                Number of lists in board: <b>{props.data.listsNumber}</b>
            </div>
            <div className="col-sm-4">
                Number of cards in board: <b>{props.data.cardsNumber}</b>
            </div>
            <div className="col-sm-4">
                Number of members in board: <b>{props.data.membersNumber}</b>
            </div>
        </div>
    </div>
)

export default GeneralInfoView