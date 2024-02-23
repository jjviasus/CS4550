import React from 'react';
import './App.css';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
    return (
        <HashRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/Labs"/>}/>
                    <Route path="/Labs/*" element={<Labs/>}/>
                    <Route path="/Kanbas/*" element={<Kanbas/>}/>
                    <Route path="/hello" element={<HelloWorld/>}/>
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;

// TODO 2.3.2 Implementing a Navigation component
