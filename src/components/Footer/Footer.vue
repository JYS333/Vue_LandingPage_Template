<template>
  <div class="footer-container">
    <div class="footer-logo">
        <div class="img-wrap">
            <div class="logo-text">LOGO</div>
        </div>
    </div>
    <div class="footer-copyrights">Copyright © 2023 Company. All Rights Reserved.</div>
    <div class="footer-media">
        <div class="logo-wrap">
            <img src="../../assets/github.png" alt="">
        </div>
        <div class="logo-wrap">
            <img src="../../assets/twitter.png" alt="">
        </div>
        <div class="logo-wrap">
            <img src="../../assets/youtube.png" alt="">
        </div>
        <div class="logo-wrap">
            <img src="../../assets/reddit.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return{

        }
    }
}
</script>

<style lang="less" scoped>
    .footer-container{
        padding: 0 180px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background: #FCFCFF;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        .footer-logo{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .img-wrap{
                img{
                    width: 300px;
                }
                .logo-text{
                    display: flex;
                    justify-content: center;
                    color: #28D0A8;
                    font-weight: 500;
                    font-size: 30px;
                    margin: 10px 0;
                }
            }
            .logo-down{
                display: flex;
                flex-direction: row;
                .down-wrap{
                    display: flex;
                    flex-direction: column;
                    width: 20%;
                    // margin: 0 20px;
                    .down-title{
                        font-size: 16px;
                        font-weight: 600;
                    }
                    .down-text{
                        font-size: 14px;
                        font-weight: 400;
                        margin-bottom: 5px;
                    }
                }
            }
        }
        .footer-copyrights{
            color: #2f3b5e;
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 1;
        }
        .footer-media{
            display: flex;
            justify-content: space-evenly;
            width: 250px;
            // margin-bottom: 15px;
            .logo-wrap{
                cursor: pointer;
                display: flex;
                align-items: center;
                img{
                    width: 20px;
                }
            }
        }
    }
</style>