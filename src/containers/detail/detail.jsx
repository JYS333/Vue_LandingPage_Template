import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import '../../mock/detail';

const Detail = () => {
    const [data, setData] = useState([]);
    // const [test, setTest] = useState(['11', '22']);

    useEffect(() => {
        axios.get('/detail').then(res => {
            console.log(res);
        })
        // axios.post('/postDetail', {
        //     data: {
        //         username: '11'
        //     }
        // }).then(res => {
        //     console.log(res);
        // })
    }, [data])

    const handleClick = () => {
        setData([22, 33]);
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', background: '#2A2' }}>
                Detail Page
                <NavLink to="/home">Jump to Home</NavLink>
                <NavLink to="/dashboard">Jump to Dashboard</NavLink>
                <div style={{ cursor: 'pointer' }} onClick={handleClick}>Click me and test mock data, F12 then check console.</div>
            </div>
        </>
    )
}

export default Detail;