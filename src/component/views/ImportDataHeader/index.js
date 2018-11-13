import React from 'react';
import PropTypes from 'prop-types';


// ===== Others
import './style.css';


// ==================================

const ImportDataHeader = props =>(    
    <div className="importData">
        <div className="dashboardTitle">
            <div>
                <h2>Dashboard for prello</h2>
                <p>Designed by group 2.2</p>
            </div>
        </div>
        <div className="importFileForm">
            <p>Import your json file</p>
            <input id="fileImported" type="file" onChange={ (e) => props.handleFileChange(e.target.files) } />
            
        </div>
    </div>
)

ImportDataHeader.propTypes = {
    handleFileChange: PropTypes.func.isRequired,
}
export default ImportDataHeader

