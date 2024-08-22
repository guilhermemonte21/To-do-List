import React from "react";
import "./searchBar.css"
import image from "../../assets/material-symbols_search.png"
import { FaMagnifyingGlass } from "react-icons/fa6"

export default function SearchBar({placeholder,
    value,
    onChange}){
    return(
        <div className="search">
            <div className="iconBox">
                <FaMagnifyingGlass />
            </div>
            <input
                value={value}
                onChange={onChange}
                className="searchInput"
                type="text"
                placeholder={placeholder}
            />
        </div>
    )
    };
