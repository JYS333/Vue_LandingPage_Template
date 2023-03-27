<template>
    <div class="panel3">
        <el-row class="panel3-content" :gutter="30">
            <el-col class="colLeft" :sm="24" :md="24" :lg="12" :xl="12">
                <div class="panel3-left">
                    <div class="title">— WHAT WE DO?</div>
                    <div class="desc">About Details</div>
                    <div class="text">Asdac asd publishiadng pdadackages and web page ediasdtors nodasdw use Lorasdem Ipsum asc cacac default model text, and a search for 'adcsa ipsum' will uncover many web sites still in their asdsa.</div>
                    <div class="button">Find Out More</div>
                </div>
            </el-col>
            <el-col class="colRight" :sm="24" :md="24" :lg="12" :xl="12">
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
  </template>
  
  <script>
  export default {
    name:'Panel1',
  }
  </script>
  
  <style lang="less" scoped>
  .colLeft{
      animation: slip_in_left 1s;
  }
  @keyframes slip_in_left
  {
      from {transform:translateX(-100%); opacity: 0;}
      to {transform:translateX(0); opacity: 1;}
  }
  .colRight{
      animation: slip_in_right 1s;
  }
  @keyframes slip_in_right
  {
      from {transform:translateX(100%); opacity: 0;}
      to {transform:translateX(0); opacity: 1;}
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
                    box-shadow: 0px 7px 20px 0 rgba(49, 49, 49, 0.2);
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
  </style>