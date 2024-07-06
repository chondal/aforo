import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

export const PrivateRouter = ({ children }) => {
    const { state } = useContext(AuthContext);
    const { user, logged } = state;

    return logged ? children : <Navigate to="/login" />;
}
