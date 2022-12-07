import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Assets/Css/Global.css";
import { NavigationBottom } from "./Companents/Navbar/NavigationBottom";
import Paper from '@mui/material/Paper';
import { NavigationTop } from "./Companents/Navbar/NavigationTop";
import { MainScreen } from "./Pages/MainScreen/MainScreen";
import { useLocation } from "react-router-dom";


export function Router() {

    const location = useLocation();

    return (
        <div id="router">
            <div style={location.pathname === "/" ? { display: "none" } : { display: "block" }}>
            <NavigationTop /> 
            </div>
            <Routes>
                <Route path="/" element={<MainScreen />} />
                {/* <Route path="/portfolios" element={<Portfolios />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/add_portfolio" element={<AddPortfolio />} />
                <Route path="/portfolios/view_portfolio" element={<EditPortfolio/>} /> */}
            </Routes>
            <Paper sx={MyStyle.Paper} elevation={3}>
                <NavigationBottom />
            </Paper>
        </div>
    );
}

const MyStyle = {
    Paper: {
        maxWidth: "768px",
        width: "100%",
        position: "fixed",
        bottom: 0,
    },
};
