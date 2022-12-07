import React from 'react'
import { SearchBar } from '../../Companents/SearchBar/SearchBar'
import "./MainScreen.css"
import rightArrow from '../../Assets/Icons/Right Arrow.svg'


export function MainScreen() {
    return (
        <div id="main-screen-main-container">
            <SearchBar />
            <div id='main-screen-inside-content'>
                <h2>Добро пожаловать в <span>Cocteil</span></h2>
                <p>Экономим Ваше время! Предлагаем лучшие цены! Доставляем в кратчайшие сроки!</p>
                <div id='main-screen-see-more-content'>
                    <p>Каталог</p>
                    <img src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}
