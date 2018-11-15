import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


// ===== Others
import './style.css';


// ==================================

const ImportDataHeader = props =>(    
    <Fragment>
        <div className="dashboardTitle">
            <div>
                <h1>Dashboard for prello</h1>
                <p>Designed by group 2.2</p>
                <hr />
            </div>
        </div>
        <div className="importFileForm">
            <p className="importText">Import your json file</p>
            <input id="fileImported" type="file" className="browseFileBtn" onChange={ (e) => props.handleFileChange(e.target.files) } /> 
        </div>
    </Fragment>
)

ImportDataHeader.propTypes = {
    handleFileChange: PropTypes.func.isRequired,
}
export default ImportDataHeader