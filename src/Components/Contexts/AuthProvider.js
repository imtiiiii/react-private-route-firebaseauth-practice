import React, { createContext } from 'react';

import useFirebase from '../../Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const allInfo = useFirebase();
    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;