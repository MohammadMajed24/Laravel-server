/* eslint-disable react-refresh/only-export-components */

import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => { },
    setToken: () => { }
})

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    console.log(token);
    const setToken = (newToken) => {
        console.log('🔑 setToken called with:', newToken);
        _setToken(newToken)
        if (newToken) {
            localStorage.setItem('ACCESS_TOKEN', newToken);
            console.log('✅ localStorage now has', localStorage.getItem('ACCESS_TOKEN'));
        }
        else {
            localStorage.removeItem('ACCESS_TOKEN');
            console.log('🗑️ localStorage cleared');
        }



    };
    return (
        <StateContext.Provider value={{
            user,
            setUser,
            token,
            setToken
        }}>
            {children}
        </StateContext.Provider>)
}
export const useStateContext = () => useContext(StateContext);


