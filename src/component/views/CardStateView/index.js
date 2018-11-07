import React from 'react';
import {Pie, Bar} from 'react-chartjs-2';

// ===== Others
import './style.css';

// ==================================

const CardStateView = props =>(
    <div className="col-sm-6 dataType">
        <div className="dataValues">
            <Pie data = {props.data} 
                width={20}
                height={10}
                options={{
                    title: {
                        display: true,
                        text: 'Cards state',
                        fontSize: 20
                    },
                    maintainAspectRatio: true,
                }}
            />
        </div>
        <div className="dataValues">
            <Bar data = {props.data} 
                width={20}
                height={10}
                options={{
                    maintainAspectRatio: true,
                    legend: {
                        display:false
                    },
                }}
            />
        </div>
    </div>





)

export default CardStateView