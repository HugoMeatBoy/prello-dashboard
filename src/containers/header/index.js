import React from 'react';

// ===== Actions

// ===== Others
import logoPrello from '../../assets/logo_prello_white.png';
import './style.css';

class Header extends React.Component {
    render() {
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

// Put info from the store state in props (None)

export default Header
