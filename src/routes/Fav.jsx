import {useState} from "react";
import Card from "../components/Card"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

    const [favs, setFavs] = useState(
        localStorage.getItem("favUsers")
        ? JSON.parse(localStorage.getItem("favUsers"))
        : []
    )
    return (
        <>
        <h1>Dentists Favs</h1>
        <div className="card-grid">
            {favs.map(odontologo =>(
                    <Card
                    key={odontologo.id}
                    odontologo={odontologo}
                />
                ))}
        </div>
        </>
    );
    };

export default Favs;