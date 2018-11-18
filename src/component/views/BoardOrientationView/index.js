import React from 'react';
import { Radar } from 'react-chartjs-2';

// ===== Others
import './style.css';

// ==================================

const BoardOrientationView = props => (
    <div className="col-sm-12 dataType">
        <div className="dataValues">
            <Radar
                data={props.data}
                options={{
                    title: {
                        display: true,
                        text: 'Board orientation',
                        fontSize: 20,
                    },
                    legend: {
                        display: false,
                    },
                    maintainAspectRatio: true,
                    circumference: Math.PI,
                    rotation: Math.PI,
                }}
            />
        </div>
    </div>
);

export default BoardOrientationView;
