import React from "react";
import { Box, BottomNavigation, BottomNavigationAction, } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import "./NavigationBottom.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';

export function NavigationBottom() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();


    return (
        <div>
            <Box
                sx={{
                    width: "100%",
                    height: "auto",
                    backgroundColor: "#514A7E",
                    zIndex: "99999",
                }}
            >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#514A7E",
                        color: "white",
                    }}
                >
                    {/* <BottomNavigationAction
                        label="Menu"
                        icon={<LunchDiningIcon />}
                        onClick={() => {
                            dispatch(acOpenMenu(true));
                            navigate("/");
                        }}
                    /> */}
                    <BottomNavigationAction
                        id="navigation-bottom-icons"
                        icon={<HomeIcon style={{ color: "white", fontSize: "26px", marginRight:"-90px" }} />}
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                    <BottomNavigationAction
                        id="navigation-bottom-icons"
                        icon={
                            <FavoriteBorderIcon style={{ color: "white", fontSize: "26px", marginLeft:"45px" }} />
                        }
                        onClick={() => {
                            navigate("/portfolios");
                        }}
                    />

                    <BottomNavigationAction
                        id="navigation-bottom-icons"
                        icon={
                            <PersonIcon style={{ color: "white", fontSize: "26px", marginLeft:"2px" }} />
                        }
                        onClick={() => {
                            navigate("/feedback");
                        }}
                    />
                    <BottomNavigationAction
                        id="navigation-bottom-icons"
                        icon={
                            <ShoppingBagIcon style={{ color: "white", fontSize: "26px", marginLeft:"-40px" }} />
                        }
                        onClick={() => {
                            navigate("/add_portfolio");
                        }}
                    />

                    <BottomNavigationAction
                        id="navigation-bottom-icons"
                        icon={
                            <MenuIcon style={{ color: "white", fontSize: "26px", marginRight:"90px" }} />
                        }
                        onClick={() => {
                            navigate("/add_portfolio");
                        }}
                    />
                </BottomNavigation>
            </Box>
        </div>
    )
}
