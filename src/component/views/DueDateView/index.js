import React from 'react';
import { Bar } from 'react-chartjs-2';

import PropTypes from 'prop-types';

// ===== Others
import './style.css';

// ==================================

const DueDateView = props => (
    <div className="col-sm-6 dataType">
        <div className="dataValues">
            <Bar
                data={props.data}
                width={30}
                height={20}
                options={{
                    title: {
                        display: true,
                        text: 'Due dates',
                        fontSize: 20,
                    },
                    maintainAspectRatio: true,
                    legend: {
                        display: false,
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                suggestedMin: 0,
                                suggestedMax: 8,
                            },
                        }],
                    },
                }}
            />
        </div>
    </div>


);

DueDateView.propTypes = {
    data: PropTypes.object.isRequired,
};

export default DueDateView;
