import React from 'react';
import PropTypes from 'prop-types';

// ===== Actions

// ===== Others
import logoPrello from '../../assets/logo_prello_white.png';
import './style.css';

class Header extends React.Component {
    render() {
        const {
            goAbout, goBoardExample, goHome, goProfile, goRegister, goSignIn,
        } = this.props;
        const element = (
            <div className="header-bar">
                
                <div className="centerHeader-div">
                    <img className="prello-logo" src={logoPrello} alt="Logo Prello" />
                </div>
            </div>
        );
        return element;
    }
}
Header.propTypes = {
};

// Put info from the store state in props (None)

export default Header
