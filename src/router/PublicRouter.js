import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

export const PublicRouter = ({ children }) => {
    const { state } = useContext(AuthContext);
    const { user } = state;

    return user && user.logged
        ? <Navigate to="/" />
        : children;
}
