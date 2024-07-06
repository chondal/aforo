import React, { createContext, useReducer, useEffect } from 'react';
import { authReducer } from './authReducer';

const AuthContext = createContext();

const initialState = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? { user, logged: true } : { user: null, logged: false };
};

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {}, initialState);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state.user]);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
