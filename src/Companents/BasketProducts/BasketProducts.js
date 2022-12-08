import React from 'react'
import modelImg from "../../Assets/Images/Model Woman Imgae.png"
import trashIcon from "../../Assets/Icons/trash Icon.svg"
import IconButton from '@mui/material/IconButton';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./BasketProducts.css"
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Checkbox } from "@mui/material";


export function BasketProducts() {
    const data = [
        {
            id: 1,
            name: "Платье женское ",
            cost: "50.00 р",
            img: modelImg,
            code: "Арт 09456784",
            color: "синий",
            size: "34",
            count: "1",
        },
        {
            id: 1,
            name: "Платье женское ",
            cost: "50.00 р",
            img: modelImg,
            code: "Арт 09456784",
            color: "синий",
            size: "34",
            count: "1",
        },
        {
            id: 1,
            name: "Платье женское ",
            cost: "50.00 р",
            img: modelImg,
            code: "Арт 09456784",
            color: "синий",
            size: "34",
            count: "1",
        },
        {
            id: 1,
            name: "Платье женское ",
            cost: "50.00 р",
            img: modelImg,
            code: "Арт 09456784",
            color: "синий",
            size: "34",
            count: "1",
        },
        {
            id: 1,
            name: "Платье женское ",
            cost: "50.00 р",
            img: modelImg,
            code: "Арт 09456784",
            color: "синий",
            size: "34",
            count: "1",
        },
        {
            id: 1,
            name: "Платье женское ",
            cost: "50.00 р",
            img: modelImg,
            code: "Арт 09456784",
            color: "синий",
            size: "34",
            count: "1",
        },

    ]
    return (
        <div id='product-catalogs-main-container'>
            {data.map((item, index) => {
                return (
                    <div id='product-catalog-main-container'>
                        <div id='product-catalog-main-container-top'>
                            <div id='product-catalog-main-container-top-left'>
                                <figure>
                                    <img src={item.img} alt="" />
                                </figure>
                            </div>
                            <div id='product-catalog-main-container-top-right'>
                                <div id='product-catalog-main-container-top-right-first-content'>
                                    <h6>{item.name}</h6>
                                    <p>{item.code}</p>
                                </div>
                                <div id='product-catalog-main-container-top-right-second-content'>
                                    <p>Цвет: {item.color}</p>
                                    <p>Размер: {item.size}</p>
                                </div>
                                <div id='product-catalog-main-container-top-right-third-content'>
                                    <IconButton>
                                        -
                                    </IconButton>
                                    <h3>{item.count}</h3>
                                    <IconButton>
                                        +
                                    </IconButton>
                                </div>
                                <div id='product-catalog-main-container-top-right-fourth-content'>
                                    <div>
                                        <h6>Стоимость</h6>
                                        <h4>{item.cost}</h4>
                                    </div>
                                    <div id='product-catalog-main-container-top-right-fourth-content-bottom'>
                                        <Checkbox
                                            icon={<FavoriteBorderIcon style={{ color: "black", fontSize: "15px" }} />}
                                            checkedIcon={<FavoriteIcon style={{ color: "black", fontSize: "15px" }} />}
                                        />
                                        <p>В избранное</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='product-catalog-main-container-bottom'>
                            <div id='product-catalog-main-container-bottom-left'>
                                <img src={trashIcon} alt="" />
                                <p>Удалить</p>
                            </div>
                            <div id='product-catalog-main-container-bottom-right'>
                                <p>Информация о доставке</p>
                                <IconButton>
                                    <ArrowRightAltIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}
