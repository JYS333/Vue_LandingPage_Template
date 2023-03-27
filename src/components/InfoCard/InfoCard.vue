<template>
  <div class="infocard-container">
    <div :class="{showup:isReached}" class="title">Transaction Process</div>
    <div :class="{showup:isReached}" class="desc">Latest Transaction</div>
    <el-row :gutter="50">
        <el-col :class="{flip:isReached}" :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
            <div class="infocard-panel">
                <el-image class="image" :src="require('@/assets/flower1.jpg')" fit="cover"></el-image>
                <div class="tag">PREMIUM</div>
                <div class="desc">Vue Material Kit PRO</div>
                <div class="text">Vue Material Kit Pro is a beautiful resource built over Vue Material and Vuejs. It will help you get started developing UI Kits in no time. Vue Material Kit Pro is the official Vuejs version of the Original Material Kit Pro.</div>
                <div class="button">
                    SEE DETAILS
                </div>
            </div>
        </el-col>
        <el-col :class="{flip:isReached}" :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
            <div class="infocard-panel">
                <el-image class="image" :src="require('@/assets/flower2.jpg')" fit="cover"></el-image>
                <div class="tag">NORMAL</div>
                <div class="desc">Vue Material Kit PRO</div>
                <div class="text">Vue Material Kit Pro is a beautiful resource built over Vue Material and Vuejs. It will help you get started developing UI Kits in no time. Vue Material Kit Pro is the official Vuejs version of the Original Material Kit Pro.</div>
                <div class="button">
                    SEE DETAILS
                </div>
            </div>
        </el-col>
        <el-col :class="{flip:isReached}" :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
            <div class="infocard-panel">
                <el-image class="image" :src="require('@/assets/flower3.jpg')" fit="cover"></el-image>
                <div class="tag">PREMIUM</div>
                <div class="desc">React Material</div>
                <div class="text">Assd asd dssm askjda, asdaa, ada adakd dajom sdad asd, djada, asdasd. Sdad, qwqasd asdjjpicmna, ad djpiomsad amsd kla sdm.</div>
                <div class="button">
                    SEE DETAILS
                </div>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name:'InfoCard',
    data() {
        return {
            isReached: false, // 是否达到当前卡片的位置
        }
    },
    methods: {
        scrolling() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop >= 2490) { // 需要根据位置选择性修改
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
.showup{
        animation: showup 1.5s ease-in-out;
    }
    @keyframes showup{
        0%{
            opacity: 0;;
        }
        100%{
            opacity: 1;
        }
    }
.flip{
    animation: flip 1.5s 1;
}
@keyframes flip{
  0%{
   transform: rotateY(270deg);
   opacity: 0;
  }
  100%{
   transform: rotateY(360deg);
   opacity: 1;
  }
}
.infocard-container{
    padding: 0 300px;
    margin: 60px 0 90px;
    .title{
        text-align: center;
        font-size: 60px;
        color: #28D0A8;
        margin-bottom: 10px;
        font-weight: 400;
    }
    .desc{
        text-align: center;
        font-size: 72px;
        font-weight: 800;
        color: #2f3b5e;
        margin-bottom: 40px;
    }
    .infocard-panel{
        min-width: 300px;
        // height: 300px;
        background: #FCFCFF;
        border-radius: 15px;
        box-shadow: 0px 10px 20px 0 rgba(151, 149, 149, 0.2);

        display: flex;
        flex-direction: column;
        padding: 15px 15px 25px;
        align-items: flex-start;
        margin: 0 0 10px;
        .image{
            border-radius: 15px;
            margin-bottom: 20px;
        }
        .tag{
            font-size: 14px;
            color: #28D0A8;
            font-weight: 400;
            margin-bottom: 10px;
        }
        .desc{
            font-size: 21px;
            color: #2f3b5e;
            font-weight: 400;
            margin-bottom: 10px;
        }
        .text{
            font-size: 14px;
            color: #2f3b5e;
            margin-bottom: 20px;
            min-height: 85px;
            overflow: scroll;
        }
        .button{
            cursor: pointer;
            border-radius: 30px;
            font-size: 14px;
            // border-color: #28D0A8;
            padding: 10px 24px;
            color: #28D0A8;
            border: 1px solid #28D0A8;
        }
        .button:hover{
            background-image: linear-gradient(120deg, #1CF196 0%, #36A6BF 100%);
            color: #FFFFFF;
            border: none;
            margin: 1px;
        }

    }
}
</style>