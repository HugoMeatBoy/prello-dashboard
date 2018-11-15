import React from 'react';
import {Pie, Bar} from 'react-chartjs-2';

// ===== Others
import './style.css';

// ==================================

const ListCardsView = props =>(
    <div className="col-sm-6 dataType">
        <div className="dataValues">
            <Pie data = {props.data} 
                width={20}
                height={10}
                options={{
                    title: {
                        display: true,
                        text: 'Cards per list',
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
                    scales: {
                        yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                }}
            />
        </div>
    </div>





)

export default ListCardsView