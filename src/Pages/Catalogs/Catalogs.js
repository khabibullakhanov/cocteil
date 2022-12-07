import React from 'react'
import "./Catalogs.css"
import modelImg from "../../Assets/Images/Model Woman Imgae.png"
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Checkbox } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export function Catalogs() {

    const data = [
        {
            id: 1,
            name: "Блузка женская классная",
            cost: "50.00 р",
            img: modelImg,
        },
        {
            id: 1,
            name: "Блузка женская классная",
            cost: "50.00 р",
            img: modelImg,
        },
        {
            id: 1,
            name: "Блузка женская классная",
            cost: "50.00 р",
            img: modelImg,
        },
        {
            id: 1,
            name: "Блузка женская классная",
            cost: "50.00 р",
            img: modelImg,
        },
        {
            id: 1,
            name: "Блузка женская классная",
            cost: "50.00 р",
            img: modelImg,
        },
        {
            id: 1,
            name: "Блузка женская классная",
            cost: "50.00 р",
            img: modelImg,
        },
        {
            id: 1,
            name: "Блузка женская классная",
            cost: "50.00 р",
            img: modelImg,
        },
        {
            id: 1,
            name: "Блузка женская классная",
            cost: "50.00 р",
            img: modelImg,
        },
        {
            id: 1,
            name: "Блузка женская классная",
            cost: "50.00 р",
            img: modelImg,
        },
        {
            id: 1,
            name: "Блузка женская классная",
            cost: "50.00 р",
            img: modelImg,
        },
        {
            id: 1,
            name: "Блузка женская классная",
            cost: "50.00 р",
            img: modelImg,
        },
        {
            id: 1,
            name: "Блузка женская классная",
            cost: "50.00 р",
            img: modelImg,
        },
    ]

    return (
        <div id='catalogs-main-container'>
            {data.map((item, index) => {
                return (
                    <div id='catalog-main-container'>
                        <figure id='catalog-figure-content'>
                            <img src={item.img} alt="" />
                            <IconButton>
                                <Checkbox
                                    icon={<FavoriteBorderIcon style={{ color: "black" }} />}
                                    checkedIcon={<FavoriteIcon style={{ color: "black" }} />}
                                />
                            </IconButton>
                        </figure>
                        <div id='catalog-inside-bottom-content'>
                            <p>{item.cost}</p>
                            <div id='catalog-inside-bottom-content-basket'>
                                <span>{item.name}</span>
                                <div id='catalog-inside-bottom-content-text'>
                                    <div id='catalog-stars-container'>
                                        <Checkbox
                                            icon={<StarOutlineOutlinedIcon id="catalog-stars" style={{ color: "#514A7E" }} />}
                                            checkedIcon={<StarOutlinedIcon id="catalog-stars" style={{ color: "#514A7E" }} />}
                                        />
                                        <Checkbox
                                            icon={<StarOutlineOutlinedIcon id="catalog-stars" style={{ color: "#514A7E" }} />}
                                            checkedIcon={<StarOutlinedIcon id="catalog-stars" style={{ color: "#514A7E" }} />}
                                        />
                                        <Checkbox
                                            icon={<StarOutlineOutlinedIcon id="catalog-stars" style={{ color: "#514A7E" }} />}
                                            checkedIcon={<StarOutlinedIcon id="catalog-stars" style={{ color: "#514A7E" }} />}
                                        />
                                        <Checkbox
                                            icon={<StarOutlineOutlinedIcon id="catalog-stars" style={{ color: "#514A7E" }} />}
                                            checkedIcon={<StarOutlinedIcon id="catalog-stars" style={{ color: "#514A7E" }} />}
                                        />
                                    </div>
                                    <div id='catalog-basket-icon-content'>
                                        <IconButton >
                                            <ShoppingBagOutlinedIcon id='catalog-basket-icon' style={{ color: "black" }} />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
