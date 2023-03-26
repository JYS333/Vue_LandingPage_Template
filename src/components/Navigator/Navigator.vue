<template>
    <div :class="{isWhite:isWhite}" class="nav-container">
        <div class="nav-left">
            <div class="nav-logo">
                NuminaS
            </div>
            <div class="nav-menu">
                <div class="menu-item">
                    Home
                </div>
                <!-- <div class="menu-item">
                    Contact
                </div> -->
                <div class="menu-item">
                    Service
                </div>
                <div class="menu-item">
                    <router-link to="/detail">CountDown</router-link>
                </div>
            </div>
        </div>
        <div class="nav-right">
            <div class="nav-doc">
                Document
            </div>
            <div class="nav-media">
                <img src="../../assets/github.png" alt="">
            </div>
            <div class="nav-button">
                <i style="font-weight: 700;margin-right: 5px;" class="el-icon-plus"></i>Contact
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navigator',
    data() {
        return {
            isWhite: false, // nav background
        }
    },
    methods: {
        scrolling() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 80) {
                this.isWhite = true;
            } else {
                this.isWhite = false;
            }
        }
    },
    mounted() {
        window.addEventListener("scroll", this.scrolling, true);
    },
    destroyed(){
        window.removeEventListener("scroll", this.scrolling, true);
    }
}
</script>

<style lang="less" scoped>
.isWhite{
    background: #FCFCFF;
    box-shadow: 0 15px 30px 0 rgba(60, 72, 88, 0.05);
}
.nav-container{
    position: fixed;
    transition: all .3s ease 0s;
    padding: 22px 0;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    // background: transparent;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-sizing: border-box;
    .nav-left{
        display: flex;
        align-items: center;
        .nav-logo{
            font-size: 28px;
            color: #28D0A8;
            margin-right: 10px;
        }
        .nav-menu{
            display: flex;
            flex-direction: row;
            align-items: center;
            .menu-item{
                cursor: pointer;
                font-size: 16px;
                padding: 0 10px;
                color: #2f3b5e;
            }
        }
    }
    .nav-right{
        display: flex;
        align-items: center;
        .nav-doc{
            cursor: pointer;
            font-size: 16px;
            padding: 0 20px;
            color: #2f3b5e;
        }
        .nav-media{
            cursor: pointer;
            margin-right: 20px;
            display: flex;
            align-items: center;
            img{
                width: 20px;
            }
        }
        .nav-button{
            cursor: pointer;
            width: 100px;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
            background: linear-gradient(120deg, #1CF196 0%, #36A6BF 100%);
            box-sizing: border-box;
            color: #fff;
            font-size: 14px;
        }
    }
}
</style>