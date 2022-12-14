import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Assets/Css/Global.css";
import { NavigationBottom } from "./Companents/Navbar/NavigationBottom";
import Paper from '@mui/material/Paper';
import { NavigationTop } from "./Companents/Navbar/NavigationTop";
import { MainScreen } from "./Pages/MainScreen/MainScreen";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Menu } from "./Pages/Menu/Menu";
// import { CatalogSearch } from "./Companents/CatalogSearch/CatalogSearch";
import { Catalogs } from "./Pages/Catalogs/Catalogs";
import { Registration } from "./Pages/Registration/Registration";
import { Feedback } from "./Pages/Feedback/Feedback";
import { Basket } from "./Pages/Basket/Basket";

export function Router() {

    const location = useLocation();

    return (
        <div id="router">
            <div style={location.pathname === "/" || location.pathname === "/menu" ? { display: "none" } : { display: "block" }}>
                <NavigationTop />
            </div>
            {/* <div style={location.pathname === "/menu" ? { display: "block" } : { display: "block" }}>
                <CatalogSearch />
            </div> */}
            <Routes>
                <Route path="/" element={<MainScreen />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/catalog" element={<Catalogs />} />
                <Route path="/feedbacks" element={<Feedback />} />
                <Route path="/basket" element={<Basket />} />
                {/* <Route path="/portfolios" element={<Portfolios />} />
                <Route path="/add_portfolio" element={<AddPortfolio />} />
                <Route path="/portfolios/view_portfolio" element={<EditPortfolio/>} /> */}
            </Routes>
            <Paper sx={MyStyle.Paper} elevation={3}>
                <div style={location.pathname === "/" ? { display: "flex" } : { display: "none" }} id="navigation-bottom-top-part-category">
                    <NavLink>????????????????</NavLink>
                    <NavLink>????????????????</NavLink>
                    <NavLink>??????????</NavLink>
                </div>
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
