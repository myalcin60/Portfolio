'use client'
import {createContext, useContext, useState} from "react";

export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
const [mode, setMode] = useState('dark');
    return (
        <GlobalContext.Provider value={{
        mode, setMode
        }}>
            {children}
       </GlobalContext.Provider>
    )
}
export const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error("useGlobalContext must be used inside GlobalProvider");
    }
    return context;
};
