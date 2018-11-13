import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


// ===== Others
import './style.css';


// ==================================

const HomeView = props =>(    
    <Fragment>
        <div className="homeHeader">
            <div className="homeTitle">
                <div>
                    <h1>Dashboard for prello</h1>
                    <b>Designed by group 2.2</b>
                    <hr />
                </div>
            </div>
            <div className="importFileHomeForm">
                <p className="importText">Import your json file  !  </p>
                <input id="fileImported" type="file" onChange={ (e) => props.handleFileChange(e.target.files) } /> 
            </div>
        </div>
        <div className="homeInfo">
            <div className="infoPanel">
                <h4 className="titleInfo">Supervize your prello projets</h4>
                <p className="textInfo">Manage the data from your board on various charts</p>
            </div>
            
            <div className="row text-center homeLogo">
                <div className="col-sm-6">
                    <img
                        src="http://www.sietmanagement.fr/wp-content/uploads/2016/05/Polytech-Montpellier.png"
                        width="200"
                        alt="Logo Polytech Montpellier"
                    />
                </div>
                <div className="col-sm-6">
                    <img
                        src="http://asa.polytech.univ-montp2.fr/polymap/files/picto/IG.png"
                        width="100"
                        alt="Informatique et Gestion logo"
                    />
                </div>
            </div>
        </div>
        
        
        <footer className="text-center">
            <hr />
            <b>Created by Hugo FAZIO - Kévin HASSAN - Cyprien LEGRAND - Clément LOUBIERE - Clément ROIG</b>
        </footer>
    </Fragment>
)

HomeView.propTypes = {
    handleFileChange: PropTypes.func.isRequired,
}
export default HomeView