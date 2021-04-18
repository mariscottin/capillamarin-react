import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Logo from '../assets/img/logo.png'
import './AdminHeader.css';

function AdminHeader() {
    const history = useHistory();
    const logout = () => {
        auth.signOut();
        history.push('/')
    }
    return (
        <div className="adminHeader">
            <div className="adminHeader__brand">
                <img src={Logo} alt="Capilla Marin Admin" />
                <h3>Admin</h3>
            </div>
            <div className="adminHeader__nav">
                <div onClick={logout}>
                    <ExitToAppIcon />
                    Salir
                </div>

            </div>
        </div>
    )
}

export default AdminHeader;
