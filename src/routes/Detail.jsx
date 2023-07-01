import { useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'


const Detail = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [dentista, setDentista] = useState()


    const volverhome = () => {
        navigate(-1)
    }
    async function getdentista() {

        const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
        )
        const data = await response.json()
        setDentista(data)
    }

    useEffect(() => {
        getdentista()
    },[])


    return (
        <>
        <h1>Detail Dentist id </h1>
        <article>
            {/* <h3>{dentista.name}</h3>
            <p>{dentista.username}</p> */}
        </article>
        <button onClick={volverhome}>back</button>
        </>
    )
    }

export default Detail