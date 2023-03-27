<template>
  <div class="panel1">
    <el-row class="panel1-content" :gutter="50">
        <el-col class="colLeft" :sm="24" :md="24" :lg="12" :xl="12">
            <div class="panel1-title">—  WHO WE ARE?</div>
            <div class="panel1-text">
                CryptoManufaktur absasd technological sadfdsd in the field of sdfsdsfssf, including authentication of sdfsfsd data using sdfsffvd bdbfbf.
                <br>
                <br>
                We run cbvcbbc nodes, which cvbcvbcbv price feed data from fgdbgfgb dfbdfbd data sources, come to a median fdsfefs with other node sdfgdb, and then place the resulting data sdfsdf-chain. We’d be happy to work with you if you have a need to make osdfvsdn data available osdvsfv.
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
                <el-image class="image showup" style="width: 200px; height: 200px" :src="require('../../assets/1.jpg')" fit="cover"></el-image>
                <el-image class="image showup" style="width: 200px; height: 200px" :src="require('../../assets/4.jpg')" fit="cover"></el-image>
                <el-image class="image showup" style="width: 200px; height: 200px" :src="require('../../assets/2.jpg')" fit="cover"></el-image>
                <el-image class="image showup" style="width: 200px; height: 200px" :src="require('../../assets/3.jpg')" fit="cover"></el-image>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
    name:'Panel1',
    data() {
        return {
            isReached: false, // 是否达到当前卡片的位置
        }
    },
    methods: {
        scrolling() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop >= 10) {
                this.isReached = true;
            } else {
                this.isReached = false;
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
.colLeft{
    animation: slip_in_left 1s;
    animation-fill-mode:forwards;
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
.panel1{
    display: flex;
    justify-content: center;
    margin-bottom: 120px;
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
</style>