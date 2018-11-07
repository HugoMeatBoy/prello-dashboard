import React from 'react';
import {Doughnut, Bar, Pie} from 'react-chartjs-2';

// ===== Others
import './style.css';

// ==================================

const CardLabelView = props =>(
    <div className="col-sm-6 dataType">
        <div className="dataValues">
            <Doughnut 
                data = {props.data} 
                width={30}
                height={10}
                options={{
                    title: {
                        display: true,
                        text: 'Cards labels',
                        fontSize: 20
                    },
                    maintainAspectRatio: true,
                    circumference: Math.PI,
                    rotation: Math.PI
                }}
            />
        </div>
        <div className="dataValues">
            <Pie data = {props.data} 
                width={20}
                height={10}
                options={{
                    title: {
                        display: false
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
                    legend: {
                        display: false
                    },
                    maintainAspectRatio: true,
                    scales:{
                        yAxes:[{
                            ticks:{
                                suggestedMin: 0,
                                suggestedMax: 11
                            }
                        }]
                    }
                }}
            />
        </div>
    </div>
)

export default CardLabelView