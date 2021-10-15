import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import useAuth from '../Hooks/useAuth';

const PrivateRoute = (props) => {
    console.log(props);
    const { children, ...others } = props;
    console.log(others);
    const { userInfo } = useAuth();

    return (
        <Route
            {...others}
            render={
                ({ location }) => userInfo?.email ? children :
                    <Redirect
                        to={
                            {
                                pathname: '/login',
                                state: { from: location }

                            }
                        }>
                    </Redirect>
            }>
        </Route >

    );
};

export default PrivateRoute;