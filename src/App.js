import React from 'react';
import { AppProvider } from './AppContext';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
const App = () => {
    return (
        <div>
            <AppProvider>

                <BrowserRouter>
                    <Home />
                    
                    <Routes>
                        
                    </Routes>

                </BrowserRouter>

            </AppProvider>

        </div>
    );
}

export default App;
