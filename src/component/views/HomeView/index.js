import React from 'react';
import PropTypes from 'prop-types';


// ===== Others
import './style.css';
import IGLogo from '../../../assets/ig_logo.png';
import PolytechLogo from '../../../assets/polytech_montpellier_logo.png';


// ==================================

const HomeView = props => (
    <div className="content">
        <div className="homeHeader">
            <div className="homeTitle">
                <h1>Dashboard for Prello</h1>
                <b>Designed by Group 2.2</b>
            </div>
            <div className="importFileHomeForm">
                <p className="importText">
                    Import your json file
                    {''}
                    <input id="fileImported" type="file" onChange={e => props.handleFileChange(e.target.files)} />
                </p>
            </div>
        </div>
        <div className="homeInfo">
            <div className="infoPanel">
                <h4 className="titleInfo">Supervize your Prello projets</h4>
                <p className="textInfo">Manage the data from your board on various charts</p>
            </div>

            <div className="row text-center homeLogo">
                <div className="col-sm-6">
                    <img
                        src={ PolytechLogo }
                        width="200"
                        alt="Logo Polytech Montpellier"
                    />
                </div>
                <div className="col-sm-6">
                    <img
                        src={ IGLogo }
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
    </div>
);

HomeView.propTypes = {
    handleFileChange: PropTypes.func.isRequired,
};
export default HomeView;
