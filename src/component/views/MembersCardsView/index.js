import React from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';


// ===== Others
import './style.css';

// ==================================

const MembersCardsView = props => (
    <div className="col-sm-6 dataType">
        <div className="dataValues">
            <Bar
                data={props.data}
                width={20}
                height={10}
                options={{
                    title: {
                        display: true,
                        text: 'Cards per member',
                        fontSize: 20,
                    },
                    maintainAspectRatio: true,
                    responsive: true,
                    scales: {
                        xAxes: [{
                            stacked: true,
                        }],
                        yAxes: [{
                            stacked: true,
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

MembersCardsView.propTypes = {
    data: PropTypes.object.isRequired,
};

export default MembersCardsView;
