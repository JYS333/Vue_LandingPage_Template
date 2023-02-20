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
            <div>
                详情页
                <NavLink to="/home">跳到首页</NavLink>
                <NavLink to="/dashboard">跳到dash</NavLink>
                <div onClick={handleClick}>点我</div>
            </div>
        </>
    )
}

export default Detail;