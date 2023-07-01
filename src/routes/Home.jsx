import { useContext, useState, useEffect } from 'react'
import { GlobalElements } from '../context/GlobalElements';
import Card from '../components/Card';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    const { odontologos } = useContext(GlobalElements);
    return (
        <main className="" >
        <h1>Home</h1>

        <div className='card-grid'>
            <ul>
                {odontologos.map(odontologo =>(
                    <Card
                    key={odontologo.id}
                    odontologo={odontologo}
                />
                ))}
            </ul>
        </div>
        </main>
    )
}

export default Home