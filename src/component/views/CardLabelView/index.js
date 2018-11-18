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
            
                options={{
                    title: {
                        display: true,
                        text: 'Cards per label',
                        fontSize: 20
                    },
                    maintainAspectRatio: true,
                    circumference: Math.PI,
                    rotation: Math.PI
                }}
            />
        </div>
    </div>
)

export default CardLabelView