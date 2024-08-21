import React from "react";
import "./searchBar.css"
import image from "../../assets/material-symbols_search.png"
import { FaMagnifyingGlass } from "react-icons/fa6"

export default function SearchBar(){
    return(
        <input type="search" className="search" placeholder="Procurar Tarefa" icon={<FaMagnifyingGlass />}/>
    )
    };
