import React from 'react';

// ===== Others
import './style.css';

// ==================================

const GeneralInfoView = props =>(    
    <div className="dataType dataOverview">

        <div className="rows">
            <div className="c">
                <h1 className="statsTitle">Overview</h1>
            </div>
        </div>


        <div className="rowOverview">
            <p className="rowTitle">First card created:</p>
            <b className="rowData">{props.data.firstCardCreated}</b>
        </div>
        <div className="rowOverview">
            <p className="rowTitle">Last card created: </p> 
            <b className="rowData">{props.data.lastCardCreated}</b>  
        </div>


        <div className="rowOverview">
            <p className="rowTitle">Cards completed:  </p> 
            <b className="rowData">{props.data.checklistsCompleted}%</b>
        </div>
        
        <div className="rowOverview">
            <p className="rowTitle">Number of lists in board: </p>
            <b className="rowData">{props.data.listsNumber}</b>
        </div>
        <div className="rowOverview">    
            <p className="rowTitle"> Number of cards in board: </p>
            <b className="rowData">{props.data.cardsNumber}</b>
        </div>
        <div className="rowOverview">
            <p className="rowTitle"> Number of members in board:</p>
            <b className="rowData">{props.data.membersNumber}</b>
        </div>
    </div>
)

export default GeneralInfoView