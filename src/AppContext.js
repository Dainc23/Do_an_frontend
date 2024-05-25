import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'
export const AppContext = createContext({})
export function AppProvider({ children }) {
    const [product, setProduct] = useState(null)
    function getData() {
        const url = "https://661b930865444945d04fca10.mockapi.io/ps"
        axios.get(url)
            .then(function (res) {
                setProduct(res.data)

            })
            .catch(function (error) {
                console.log(error)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <AppContext.Provider value={{product}} >
            {children}
        </AppContext.Provider>
    )
}

