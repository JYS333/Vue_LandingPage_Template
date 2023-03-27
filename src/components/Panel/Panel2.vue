<template>
    <div class="panel2">
        <div class="panel2-title" :class="{showup:isReached}">- Product Summary / Call to Action -</div>
        <div class="panel2-content">
            <el-row :gutter="50">
                <el-col :class="{colLeft:isReached}" :sm="24" :md="24" :lg="12" :xl="12">
                    <el-image class="image" :src="require('../../assets/5.jpg')" fit="cover"></el-image>
                </el-col>
                <el-col :class="{colRight:isReached}" :sm="24" :md="24" :lg="12" :xl="12">
                    <div class="panel2-text">
                        CryptoManufaktur provides technological consulting in the field of cryptocurrency, including authentication of cryptocurrency data using blockchain technology.
                        <br>
                        <br>
                        We run cbvcbbc nodes, which cvbcvbcbv price feed data from fgdbgfgb dfbdfbd data sources, come to a median fdsfefs with other node sdfgdb, and then place the resulting data sdfsdf-chain. We’d be happy to work with you if you have a need to make osdfvsdn data available osdvsfv.
                        <br>
                        <br>
                        <CoolButton>Contact</CoolButton>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
  </template>
  
  <script>
  import CoolButton from '@/components/CoolButton/CoolButton.vue';
  export default {
    name:'Panel2',
    components:{
            CoolButton,
        },
    data() {
        return {
            isReached: false, // 是否达到当前卡片的位置
        }
    },
    methods: {
        scrolling() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            // getBoundingClientRect()
            if (scrollTop >= 630) { // 需要根据位置实时修改
                this.isReached = true;
            } else {
                this.isReached = false;
            }
            // if (scrollTop >= 800) { // 是否让动画一次性
            //     window.removeEventListener("scroll", this.scrolling, true);
            // }
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
  .showup{
    animation: showup 1s 1 ease-in-out;
    }
    @keyframes showup{
    0%{
        opacity: 0;;
    }
    100%{
        opacity: 1;
    }
    }
  .panel2{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px 0 120px;
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
  </style>