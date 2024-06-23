import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    children: React.ReactNode;
}

const isValidToken = (token: string | null): boolean => {
    if (!token || token === "") {
        return false;
    }
    return true;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const token = localStorage.getItem('authToken');
    console.log("Token from localStorage:", token);  // Debugging log
    return isValidToken(token) ? <>{children}</> : <Navigate to="/home/error" />;
};

export default PrivateRoute;
