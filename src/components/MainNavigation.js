import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png'
import NavLinks from './NavLinks';
import Sidebar from './Sidebar';
import BackDrop from './Backdrop';

import './MainNavigation.css';

const MainNavigation = () => {
    const [sidebarWidth, setSideBarWidth] = useState(0);
    const [hamburgerMenuX, setHamburgerMenuX] = useState(false);

    const toggleSidebar = () => {
        if (sidebarWidth === 0) {
            setSideBarWidth(260);
            document.body.classList.add('sidebar__open');
        } else {
            setSideBarWidth(0);
            document.body.classList.remove('sidebar__open');
        }

        !hamburgerMenuX ? setHamburgerMenuX(true) : setHamburgerMenuX(false);
    }

    return (
        <>
            {sidebarWidth > 0 && <BackDrop onClick={toggleSidebar} />}

            <nav className="main-navigation">
                <div className="main-navigation__logo-container">
                    <Link to='/'>
                        <img src={Logo} alt="Capilla Marin" />
                    </Link>
                </div>
                <div className="main-navigation__navlinks-container">
                    <NavLinks />
                </div>
                <div className="mobile-navigation">
                    <div className={`hamburger-menu ${hamburgerMenuX && "active"}`} onClick={toggleSidebar}>
                        <span className="top-bun"></span>
                        <span className="center-meat"></span>
                        <span className="bottom-bun"></span>
                    </div>
                    <div className="mobile-navigation__sidebar" style={{ width: sidebarWidth }}>
                        <Sidebar active={hamburgerMenuX} toggleSidebar={toggleSidebar} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default MainNavigation;