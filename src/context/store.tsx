'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
    userIdContext: string,
    setUserIdContext: Dispatch<SetStateAction<string>>,
    emailContext: string,
    setEmailContext: Dispatch<SetStateAction<string>>, 
    usernameContext: string, 
    setUsernameContext: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>({
    userIdContext: '',
    setUserIdContext: (): string => '',
    emailContext: '',
    setEmailContext: (): string => '' , 
    usernameContext: '', 
    setUsernameContext: (): string => '' 
    
})

export const GlobalContextProvider = ({ children }) => {
    const [userIdContext, setUserIdContext] = useState('');
    const [emailContext, setEmailContext] = useState('');
    const [usernameContext, setUsernameContext] = useState('');
    
    return (
        <GlobalContext.Provider value={{ userIdContext, setUserIdContext, emailContext, setEmailContext, usernameContext, setUsernameContext }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);