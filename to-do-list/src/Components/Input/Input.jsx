import React, { useState } from "react";
import "./Input.css"


export default function Input(){
    const[content, useContent] = useState("")

    return(
        <div className="input">

                <div className="poer">
                <input type="checkBox" />


                <span>{content}</span>
                </div>

                <div className="buttons">
                <div className="click">

                </div>
                <div className="click">


                </div>
        </div>
        </div>
    )
    };
