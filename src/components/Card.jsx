// import React, { useContext } from "react";
// import { Link } from 'react-router-dom;';
// import { GlobalElements } from "../context/GlobalElements";

export default function Card(props) {
    const { odontologo } = props

    const addFav = ()=>{
        // Aqui iria la logica para agregar la Card en el localStorage
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
            <button onClick={addFav} className="favButton">Add fav</button>
        </div>
    );
}

