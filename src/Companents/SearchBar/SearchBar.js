import React from 'react'
import searchIcon from "../../Assets/Icons/Search Icon.svg"
import "./SearchBar.css"



export function SearchBar() {
    return (
        <>
            <form id='search-form'>
                <img src={searchIcon} alt="" />
                <input type="text" placeholder='Search...' />
            </form>
            <div>

            </div>
        </>
    )
}
