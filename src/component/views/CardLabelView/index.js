import React from 'react';
import { Doughnut } from 'react-chartjs-2';

// ===== Others
import './style.css';

import PropTypes from 'prop-types';

// ==================================

const CardLabelView = props => (
    <div className="col-sm-6 dataType">
        <div className="dataValues">
            <Doughnut
                data={props.data}

                options={{
                    title: {
                        display: true,
                        text: 'Cards per label',
                        fontSize: 20,
                    },
                    maintainAspectRatio: true,
                    circumference: Math.PI,
                    rotation: Math.PI,
                }}
            />
        </div>
    </div>
);

CardLabelView.propTypes = {
    data: PropTypes.object.isRequired,
};

export default CardLabelView;
