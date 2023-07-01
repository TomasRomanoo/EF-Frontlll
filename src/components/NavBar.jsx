import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalElements } from '../context/GlobalElements'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

const { tema, cambiarTema } = useContext(GlobalElements);

    return (
        <nav>
        <Link to='/'>Home </Link>
        <Link to='/Contact'>Contact </Link>
        <Link to='/Favs'>Favoritos </Link>
        <button onClick={cambiarTema}>{tema === 'claro' ? ("White Mode") : ("Dark Mode")}</button>
        </nav>
    )
}

export default Navbar