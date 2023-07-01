import { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link to={`/Dentis/${odontologo.id}`}>
                <button >Profile</button>
            </Link>
        </div>
    );
}

