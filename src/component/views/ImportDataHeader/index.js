import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


// ===== Others
import './style.css';


// ==================================

const ImportDataHeader = props => (
    <Fragment>
        <div className="homeHeader">
            <div className="homeTitle">
                <h1>Dashboard for Prello</h1>
                <b>Designed by group 2.2</b>
            </div>
            <div className="importFileHomeForm">
                <p className="importText">
                    Import your JSON file
                    {' '}
                    <input id="fileImported" type="file" className="browseFileBtn" onChange={e => props.handleFileChange(e.target.files)} />
                </p>
            </div>
        </div>
    </Fragment>
);

ImportDataHeader.propTypes = {
    handleFileChange: PropTypes.func.isRequired,
};
export default ImportDataHeader;
