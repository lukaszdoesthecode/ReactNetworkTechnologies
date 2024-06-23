import React, { useEffect, useState, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useApi } from './api/connection/ApiProvider';

interface RoleBasedRedirectProps {
    children: ReactNode;
}

const RoleBasedRedirect: React.FC<RoleBasedRedirectProps> = ({ children }) => {
    const apiClient = useApi();
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    useEffect(() => {
        const checkUserRole = async () => {
            try {
                const username = localStorage.getItem('username');
                if (!username) throw new Error('No username found');

                console.log(`Checking role for user: ${username}`);
                const role = await apiClient.getUserRoleByName(username);
                console.log(`User role: ${role}`);

                if (role === 'ROLE_W') {
                    setIsAuthorized(true);
                } else {
                    setIsAuthorized(false);
                }
            } catch (error) {
                console.error('Error checking user role:', error);
                setIsAuthorized(false);
            }
        };

        checkUserRole();
    }, [apiClient]);

    if (isAuthorized === null) {
        return <div>Loading...</div>; // or any loading spinner
    }

    return isAuthorized ? <>{children}</> : <Navigate to="/home/error" />;
};

export default RoleBasedRedirect;
