import React, { useMemo } from 'react';
import App from './App';
import { useState, createContext } from "react";
export const UserContext = createContext<any>('')
const User = () => {
    const [user, setUser] = useState<string>("");

    return (
        <UserContext.Provider value={[user, setUser]}>
            <App />
        </UserContext.Provider>
    )
}

export default User