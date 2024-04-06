import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const isAuthenticatedInitialValue = localStorage.getItem('isAuthenticated') === 'true';
    console.log('Initial isAuthenticated value:', isAuthenticatedInitialValue);

    const [isAuthenticated, setIsAuthenticated] = useState(isAuthenticatedInitialValue);
    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true'); // Save an authentication flag
    };
    
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated'); // Clear the authentication flag
    };
    
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
