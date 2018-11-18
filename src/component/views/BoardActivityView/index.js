import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

// ===== Others
import './style.css';

// ==================================

const BoardActivityView = props => (
    <div className="col-sm-6 dataType">
        <div className="dataValues">
            <Line
                data={props.data}
                width={30}
                height={20}
                options={{
                    title: {
                        display: true,
                        text: 'Board activity',
                        fontSize: 20,
                    },
                    maintainAspectRatio: true,
                }}
            />
        </div>
    </div>
);
BoardActivityView.propTypes = {
    data: PropTypes.object.isRequired,
};

export default BoardActivityView;
