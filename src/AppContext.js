import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'
export const AppContext=createContext({})
export function AppProvider({children}){
    
    return(
        <AppContext.Provider >
            {children}
        </AppContext.Provider>
    )
}

