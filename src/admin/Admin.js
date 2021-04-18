import React from 'react';
import { withRouter } from 'react-router-dom';

import AdminTab from './AdminTab';
import AdminHeader from './AdminHeader';
import './Admin.css';
function Admin({ logout }) {
    return (
        <div className="admin">
            <AdminHeader logout={logout} />
            <AdminTab />
        </div>
    )
}

export default withRouter(Admin);
