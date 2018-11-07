import React from 'react';
import {Pie} from 'react-chartjs-2';

// ===== Others
import './style.css';

// ==================================

const CardStateView = props =>(
    <div className="col-sm-6 dataType">
        <div className="dataValues">
            <h1 className="chartTitle">
                Cards state
            </h1>
            <Pie data = {props.data} 
                width={20}
                height={10}
                options={{
                    maintainAspectRatio: true
                }}
            />
        </div>
    </div>
)

export default CardStateView