import React from 'react';
import {Doughnut} from 'react-chartjs-2';

// ===== Others
import './style.css';

// ==================================

const CardLabelView = props =>(
    <div className="col-sm-6 dataType">
        <div className="dataValues">
            <h1 className="chartTitle">
                Cards labels
            </h1>
            <Doughnut 
                data = {props.data} 
                width={30}
                height={10}
                options={{
                    maintainAspectRatio: true,
                    circumference: Math.PI,
                    rotation: Math.PI
                }}
            />
        </div>
    </div>
)

export default CardLabelView