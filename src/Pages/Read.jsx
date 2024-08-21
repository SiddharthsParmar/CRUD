import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Read() {
    const [data, setData] = useState({});
    const { id } = useParams(); 

    useEffect(() => {
        axios.get(`http://localhost:3000/product/${id}`)
        .then((res) => {
            setData(res.data);
            console.log(res.data); // It's better to log res.data directly
        })
        .catch((err) => {
            console.error(err);
        });
    }, [id]); // Add id to the dependency array

    return (
        <div>
            <h1>{data.name}</h1>
            <h1>{data.price}</h1>
            <h2>{data.discount}</h2>
        </div>
    )
}

export default Read;
