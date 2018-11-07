import React from 'react';

// ===== Others
import './style.css';

// ==================================

const MembersNumberView = props => (    
    <div className="col-sm-6 dataType">
        <div className="dataValues">
            Number of members attached to the board: <b>{props.data}</b>
        </div>
    </div>
)

export default MembersNumberView