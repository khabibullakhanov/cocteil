import React from 'react'
import modelImg from "../../Assets/Images/Model Woman Imgae.png"
import trashIcon from "../../Assets/Icons/trash Icon.svg"
import IconButton from '@mui/material/IconButton';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./BasketProducts.css"
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Checkbox } from "@mui/material";
import { toast } from "react-toastify"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";




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

    const plus = (id) => {
        // setCart(() =>
        data.map((item) =>
            // item.id === id
            //     ? {
            //         ...item,
            //         count: item.count + 1,
            //     }
            //     : item
            alert(item.count++)
        )
        // );
    };

    return (
        <div id='product-catalogs-main-container'>
            {data.map((item, index) => {
                return (
                    <div key={index} id='product-catalog-main-container'>
                        <div id='product-catalog-main-container-top'>
                            <div id='product-catalog-main-container-top-left'>
                                {/* <figure>
                                    <img src={item.img} alt="" />
                                </figure> */}
                                <Swiper grabCursor={true} effect={"creative"} creativeEffect={{ prev: { shadow: true, translate: [0, 0, -400], }, next: { translate: ["100%", 0, 0], }, }} modules={[EffectCreative]} className="mySwiper">
                                    <SwiperSlide id="swiper-img-content"><img src={item.img} alt="" /></SwiperSlide>
                                    <SwiperSlide id="swiper-img-content"><img src={item.img} alt="" /></SwiperSlide>
                                    <SwiperSlide id="swiper-img-content"><img src={item.img} alt="" /></SwiperSlide>
                                </Swiper>

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
                                        <p>-</p>
                                    </IconButton>
                                    <h3>{item.count}</h3>
                                    <IconButton
                                        onClick={() => plus(item.id)}
                                    >
                                        <p>+</p>
                                    </IconButton>
                                </div>
                                <div id='product-catalog-main-container-top-right-fourth-content'>
                                    <div id='product-catalog-main-container-top-right-fourth-content-top'>
                                        <h6>Стоимость</h6>
                                        <h4>{item.cost}</h4>
                                    </div>
                                    <div id='product-catalog-main-container-top-right-fourth-content-bottom'>
                                        <Checkbox
                                            icon={<FavoriteBorderIcon id="like-basket-content" style={{ color: "black", fontSize: "15px" }} />}
                                            checkedIcon={<FavoriteIcon id="like-basket-content" style={{ color: "black", fontSize: "15px" }} />}
                                        />
                                        <p>В избранное</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='product-catalog-main-container-bottom'>
                            <div id='product-catalog-main-container-bottom-left'>
                                <img onClick={() => {
                                    toast.success("Product seccessfully deleted !");
                                }} src={trashIcon} alt="" />
                                <p>Удалить</p>
                            </div>
                            <div id='product-catalog-main-container-bottom-right'>
                                <p>Информация о доставке</p>
                                <IconButton>
                                    <ArrowRightAltIcon id="catalog-right-icon" />
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
