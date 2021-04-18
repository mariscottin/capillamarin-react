import React from 'react';
import NavLinks from './NavLinks';

import './Sidebar.css';

const Sidebar = (props) => {
    return(
        
        <div className="sidebar__container">
            <NavLinks toggleSidebar={props.toggleSidebar}/>
        </div>
    )
}

export default Sidebar;