// import React, { useContext } from "react";
// import { Link } from 'react-router-dom;';
// import { GlobalElements } from "../context/GlobalElements";

import { useState } from "react";
import { json } from "react-router-dom";

export default function Card(props) {
    const { odontologo } = props
    const [favs, setFavs] = useState(
        localStorage.getItem("favUsers")
        ? JSON.parse(localStorage.getItem("favUsers"))
        : []
    )
    const addFav = (user)=>{
        const newFavs = [...favs, user]
        setFavs(newFavs)
        localStorage.setItem("favUsers",JSON.stringify(newFavs))
    }


    return (
        <div className="card">
                <p>
                    <span className='titulo'>Nombre:</span> {odontologo.name}
                </p>
                <hr></hr>
                <p>
                    <span className='titulo'>User:</span> {odontologo.username}
                </p>
            <button onClick={() => addFav(odontologo)} className="favButton">Add fav</button>
        </div>
    );
}

