import React from 'react';
import { Link } from 'react-router-dom';

import './ColectaBanner.css';

const ColectaBanner = () => {
    return(
        <div className="banner-colecta">
            <div className="banner__container">
                <div className="banner-text">#YOMEQUEDOENCASA y quiero seguir colaborando:</div>
                <Link to="/colecta-virtual" className="banner-btn">Colecta Virtual</Link>
            </div>
        </div>
    )
}

export default ColectaBanner;