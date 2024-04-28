import React, { createContext } from 'react';
import axios from 'axios'
export const AppContext=createContext({})
export function AppProvider({children}){
    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

