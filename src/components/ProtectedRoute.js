import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useStateValue } from '../StateProvider';


function ProtectedRoute({
    component: Component,
    ...rest
}) {

    const [{ user }] = useStateValue();
    return (
        <Route
            {...rest}
            render={() => {
                if (user) {
                    return <Component />;
                } else {
                    return (
                        <Redirect to='/login' />
                    );
                }
            }}
        />
    )
}

export default ProtectedRoute;
