import React from 'react';
import PropTypes from 'prop-types';


// ===== Others
import './style.css';

// ==================================

const MembersNumberView = props => (
    <div className="col-sm-6 dataType">
        <div className="dataValues">
            Number of members attached to the board:
            {' '}
            <b>{props.data}</b>
        </div>
    </div>
);

MembersNumberView.propTypes = {
    data: PropTypes.object.isRequired,
};

export default MembersNumberView;
