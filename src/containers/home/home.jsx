import React from 'react'
import { NavLink } from 'react-router-dom';
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
import './home.less';

const Home = () => {
    return (
        <>
            <div className='HomePage'>
                {/* Top Nav */}
                <div className='TopNav'>
                    <div className='NavLeft'>
                        <SlackOutlined style={{ fontSize: '32px', color: '#FFF' }} /> LOGO
                    </div>
                    <div className='NavRight'>
                        <NavLink style={{ marginRight: '5px', cursor: 'pointer', textDecoration: 'none', color: '#fff' }} to="/detail">Documentation: jump to other routes</NavLink>
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
                {/* contents */}
                <div className='IntroPart'>
                    <div className='IntroLeft'>
                        <div className='TopText'>IPOR: The heartbeat of DeFi</div>
                        <div className='MiddleText'>Fix your interest rate or hedge your exposure by leveraging non-custodial on-chain IPOR derivative instruments</div>
                        <div className='JumpButton'>
                            <div className='ButtonLogo'><HomeOutlined /></div>
                            <div className='ButtonText'>Open app</div>
                        </div>
                    </div>
                    <div className='IntroRight'>
                        <img src="https://www.ipor.io/assets/hero@2x.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;