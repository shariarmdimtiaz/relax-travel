import React, { useContext } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return <div>
            {/* <h3>Loaging...</h3> */}
            <progress className="progress w-72"></progress>
        </div>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to="/login" state={{from: location}} replace ></Navigate>
    );
};

export default PrivateRoute;