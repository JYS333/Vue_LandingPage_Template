<template>
    <div class="numina-container">
        <Navigator />
        <Carousel />
        <div class="content">
            <div class="panel1">
                <el-row class="panel1-content" :gutter="50">
                    <el-col :sm="24" :md="24" :lg="12" :xl="12">
                        <div class="panel1-title">—  WHO WE ARE?</div>
                        <div class="panel1-text">
                            CryptoManufaktur provides technological consulting in the field of cryptocurrency, including authentication of cryptocurrency data using blockchain technology.
                            <br>
                            <br>
                            We run Chainlink nodes, which collect price feed data from multiple off-chain data sources, come to a median consensus with other node operators, and then place the resulting data on-chain. We’d be happy to work with you if you have a need to make off-chain data available on-chain.
                            <br>
                            <br>
                            The firm is founded on three core competencies which the team leverages across every facet of their work.
                            <br>
                            <br>
                        </div>
                    </el-col>
                    <el-col style="display: flex;justify-content: center;" :sm="24" :md="24" :lg="12" :xl="12">
                        <!-- <img src="../../assets/1.jpg" alt=""> -->
                        <div class="img-wrap">
                            <el-image class="image" style="width: 200px; height: 200px" :src="require('../../assets/1.jpg')" fit="cover"></el-image>
                            <el-image class="image" style="width: 200px; height: 200px" :src="require('../../assets/4.jpg')" fit="cover"></el-image>
                            <el-image class="image" style="width: 200px; height: 200px" :src="require('../../assets/2.jpg')" fit="cover"></el-image>
                            <el-image class="image" style="width: 200px; height: 200px" :src="require('../../assets/3.jpg')" fit="cover"></el-image>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <DataCard />
            <!-- <el-divider></el-divider> -->
            <div class="panel2">
                <div class="panel2-title">- Product Summary / Call to Action -</div>
                <div class="panel2-content">
                    <el-row :gutter="50">
                        <el-col :sm="24" :md="24" :lg="12" :xl="12">
                            <el-image class="image" :src="require('../../assets/5.jpg')" fit="cover"></el-image>
                        </el-col>
                        <el-col :sm="24" :md="24" :lg="12" :xl="12">
                            <div class="panel2-text">
                                CryptoManufaktur provides technological consulting in the field of cryptocurrency, including authentication of cryptocurrency data using blockchain technology.
                                <br>
                                <br>
                                We run Chainlink nodes, which collect price feed data from multiple off-chain data sources, come to a median consensus with other node operators, and then place the resulting data on-chain. We’d be happy to work with you if you have a need to make off-chain data available on-chain.
                                <!-- <br> -->
                                <!-- <br> -->
                                <!-- The firm is founded on three core competencies which the team leverages across every facet of their work: -->
                                <br>
                                <br>
                                <CoolButton>Contact</CoolButton>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <el-divider></el-divider>
            <div class="panel3">
                <el-row class="panel3-content" :gutter="30">
                    <el-col :sm="24" :md="24" :lg="12" :xl="12">
                        <div class="panel3-left">
                            <div class="title">— WHAT WE DO?</div>
                            <div class="desc">About Details</div>
                            <div class="text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</div>
                            <div class="button">Find Out More</div>
                        </div>
                    </el-col>
                    <el-col :sm="24" :md="24" :lg="12" :xl="12">
                        <div class="panel3-right">
                            <div class="color-card color1">
                                <div class="logo">
                                    <el-image :src="require('@/assets/logo.png')"></el-image>
                                </div>
                                <div class="title">Licensed & Certified</div>
                                <div class="text">We are ipsum dolor sit amet, ctetursadipiscing elit dunt ut labore et doloremagna</div>
                                <div class="button">+</div>
                            </div>
                            <div class="color-card color2">
                                <div class="logo">
                                    <el-image :src="require('@/assets/logo.png')"></el-image>
                                </div>
                                <div class="title">Saving & Investments</div>
                                <div class="text">We are ipsum dolor sit amet, ctetursadipiscing elit dunt ut labore et doloremagna</div>
                                <div class="button">+</div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <!-- <el-divider></el-divider> -->
            <InfoCardVue />
            <div class="panel4">
                <el-row :gutter="10">
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"><PieChart /></el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"><AreaChart /></el-col>
                </el-row>
            </div>
        </div>
        <Footer></Footer>
        <el-backtop>
            <div
            style="{ height: 100%;width: 100%;border-radius: 20%;background-color: #fff;box-shadow: 1px 3px 6px 0 rgba(6, 6, 6, 0.2);
                text-align: center;
                line-height: 40px;
                color: #28D0A8;}">
                UP
            </div>
        </el-backtop>
    </div>
</template>

<script>
import Carousel from '@/components/Carousel/Carousel.vue';
import CoolButton from '@/components/CoolButton/CoolButton.vue';
import DataCard from '@/components/DataCard/DataCard.vue';
import InfoCardVue from '@/components/InfoCard/InfoCard.vue';
import PieChart from '@/components/PieChart/PieChart.vue';
import AreaChart from '@/components/AreaChart/AreaChart.vue';

    export default{
        components:{
            Carousel,
            CoolButton,
            DataCard,
            InfoCardVue,
            PieChart,
            AreaChart
        },
        data() {
            return {

            }
        },
    }
</script>

<style lang="less" scoped>
.numina-container{
    padding-top: 80px;
    width: 100%;
    // height:100%;
	overflow: scroll;
    position: relative;
    box-sizing: border-box;
    background: #f5f5fb;
    .content{
        padding: 50px 0 200px;
        overflow: scroll;
        // margin-bottom: 100px;
        
        .panel1{
            display: flex;
            justify-content: center;
            margin-bottom: 50px;
            padding: 0 180px;
            .panel1-content{
                padding: 0 80px;
                .img-wrap{
                    display: grid;
                    grid-template-columns: 210px 210px;
                    grid-template-rows: 210px 210px;
                    .image{
                        height: auto;
                        width: 100%;
                        border-radius: 15px;
                        box-shadow: 1px 3px 7px 0 rgba(6, 6, 6, 0.4);
                    }
                }
                .panel1-title{
                    color: #28D0A8;
                    font-weight: 400;
                    font-size: 60px;
                    margin-bottom: 40px;
                }
                .panel1-text{
                    font-weight: 400;
                    font-size: 17px;
                    line-height: 1.6;
                    color: #2f3b5e;
                }
            }

        }
        .panel2{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 50px 0 100px;
            padding: 0 180px;
            .panel2-title{
                color: #28D0A8;
                font-weight: 500;
                font-size: 30px;
                margin-bottom: 40px;
            }
            .panel2-content{
                display: flex;
                justify-content: center;
                padding: 0 80px;
                .image{
                    height: auto;
                    width: 100%;
                    border-radius: 15px;
                    box-shadow: 1px 3px 7px 0 rgba(6, 6, 6, 0.4);
                }
                .panel2-text{
                    font-weight: 400;
                    font-size: 17px;
                    line-height: 1.6;
                    color: #2f3b5e;
                }
            }
        }
        .panel3{
            position: relative;
            margin: 100px 0 50px;
            padding: 0 200px;
            .panel3-content{
                height: 600px;
                .panel3-left{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    height: 100%;
                    .title{
                        font-size: 60px;
                        color: #28D0A8;
                        font-weight: 400;
                        margin: 90px 0 10px;
                    }
                    .desc{
                        font-size: 72px;
                        font-weight: 800;
                        color: #2f3b5e;
                        margin-bottom: 10px;
                    }
                    .text{
                        line-height: 1.8;
                        font-size: 16px;
                        margin-top: 14px;
                        margin-bottom: 10px;
                        color: #2f3b5e;
                        font-weight: 300;
                    }
                    .button{
                        margin-top: 40px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: #28D0A8;
                        color: #f5f5fb;
                        width: 150px;
                        height: 40px;
                        border-radius: 20px 0 20px 20px;
                    }
                }
                .panel3-right{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    .color1{
                        background: linear-gradient(0deg, #00fe59 0%, #2d7bc4 100%);
                    }
                    .color2{
                        background: #2dc4bd;
                    }
                    .color-card{
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 40px 40px 20px;
                        min-width: 285px;
                        height: 500px;
                        margin: 0 30px;
                        border-radius: 40px;
                        .logo{
                            width: 150px;
                            height: 150px;
                            padding: 30px;
                            box-sizing: border-box;
                            background: #f5f5fb;
                            border-radius: 50%;
                            margin-bottom: 40px;
                        }
                        .title{
                            text-align: center;
                            font-size: 24px;
                            line-height: 1.238;
                            color: #f5f5fb;
                            margin-bottom: 40px;
                        }
                        .text{
                            text-align: center;
                            line-height: 1.8;
                            color: #f5f5fb;
                            font-weight: 300;
                        }
                        .button{
                            color: #f5f5fb;
                            font-weight: 800;
                            font-size: 30px;
                            position: absolute;
                            bottom: -30px;
                            width: 60px;
                            height: 60px;
                            border-radius: 50%;
                            display: flex;
                            justify-content: center;
                            /* align-items: center; */
                            padding-top: 9px;
                            background: linear-gradient(120deg, #00fe59 0%, #2d7bc4 100%);
                        }
                    }
                }
            }
        }
        .panel4{
            padding: 0 200px;
        }
    }
}
</style>