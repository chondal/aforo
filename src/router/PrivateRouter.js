import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'

export const PrivateRouter = ({ children }) => {


    const { user } = useContext(AuthContext);


    

    return user.logged
        ? children
        : <Navigate to="/login" />;




}
