import React from "react";
import "./searchBar.css"
import image from "../../assets/material-symbols_search.png"

export default function SearchBar(){
    return(
        <div className="search">
                <img src={image} alt="" />

                <span>Procurar Tarefa</span>
        </div>
    )
    };
