import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {
    SlackOutlined,
    AmazonOutlined,
    CodepenCircleOutlined,
    AntDesignOutlined,
    TwitterOutlined,
    GithubOutlined,
    MediumOutlined,
    HomeOutlined
} from '@ant-design/icons';

import './detail.less';

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
                {/* Top Nav */}
                <div className='DetailPanel'>
                    <div className='TopNav'>
                        <div className='NavLeft'>
                            <NavLink to='/home'><SlackOutlined style={{ fontSize: '32px', color: '#FFF' }} /> To Home</NavLink>
                        </div>
                        <div className='NavRight'>
                            {/* <NavLink style={{ marginRight: '5px', cursor: 'pointer', textDecoration: 'none', color: '#fff' }} to="/dashboard">jump to Dashboard</NavLink> */}
                            <div className='IconList'>
                                <div className='Icon'>
                                    <AmazonOutlined />
                                </div>
                                <div className='Icon'>
                                    <CodepenCircleOutlined />
                                </div>
                                <div className='Icon'>
                                    <AntDesignOutlined />
                                </div>
                                <div className='Icon'>
                                    <TwitterOutlined />
                                </div>
                                <div className='Icon'>
                                    <GithubOutlined />
                                </div>
                                <div className='Icon'>
                                    <MediumOutlined />
                                </div>
                            </div>
                            <div className='JumpButton'>
                                <div className='ButtonLogo'><HomeOutlined /></div>
                                <div className='ButtonText'>Open app</div>
                            </div>
                        </div>
                    </div>
                    <div className='Content'>
                        <div className='ContentLeft'>
                            <NavLink to="/dashboard">Jump to Dashboard</NavLink>
                        </div>
                        <div className='ContentRight'>
                            <div style={{ cursor: 'pointer' }} onClick={handleClick}>Click me to test mock data, F12 then check console.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;