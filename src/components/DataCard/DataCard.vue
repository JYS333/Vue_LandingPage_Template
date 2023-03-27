<template>
  <div class="datacard-container">
    <el-row id="datacard" :gutter="10">
        <el-col :class="{toUp1:isReached}" style="display: flex; justify-content: center;" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
            <div class="datacard-panel">
                <el-image class="image" :src="require('@/assets/logo.png')" fit="cover"></el-image>
                <div class="desc">Total Number</div>
                <div class="number">55,368</div>
            </div>
        </el-col>
        <el-col :class="{toUp2:isReached}" style="display: flex; justify-content: center;" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
            <div class="datacard-panel">
                <el-image class="image" :src="require('@/assets/logo.png')" fit="cover"></el-image>
                <div class="desc">Total Members</div>
                <div class="number">4,903</div>
            </div>
        </el-col>
        <el-col :class="{toUp3:isReached}" style="display: flex; justify-content: center;" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
            <div class="datacard-panel">
                <el-image class="image" :src="require('@/assets/logo.png')" fit="cover"></el-image>
                <div class="desc">Earned</div>
                <div class="number">$1,323,457</div>
            </div>
        </el-col>
        <el-col :class="{toUp4:isReached}" style="display: flex; justify-content: center;" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
            <div class="datacard-panel">
                <el-image class="image" :src="require('@/assets/logo.png')" fit="cover"></el-image>
                <div class="desc">Donated</div>
                <div class="number">$345,231</div>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name:'DataCard',
    data() {
        return {
            isReached: false, // 是否达到当前卡片的位置
        }
    },
    methods: {
        scrolling() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop >= 200) { // 需要根据位置选择性修改
                this.isReached = true;
            } else {
                this.isReached = false;
            }
            // if (scrollTop >= 200) { // 是否让动画一次性
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
.toUp1{
    animation: up1 0.8s ease-in-out;
    animation-delay: 0;
    animation-fill-mode: backwards;
}
@keyframes up1
{
    from {transform:translateY(50%); opacity: 0;}
    to {transform:translateX(0); opacity: 1;}
}
.toUp2{
    animation: up2 0.8s ease-in-out;
    animation-delay: 0.1s;
    animation-fill-mode: backwards;
}
@keyframes up2
{
    from {transform:translateY(50%); opacity: 0;}
    to {transform:translateX(0); opacity: 1;}
}
.toUp3{
    animation: up3 0.8s ease-in-out;
    animation-delay: 0.2s;
    animation-fill-mode: backwards;
}
@keyframes up3
{
    from {transform:translateY(50%); opacity: 0;}
    to {transform:translateX(0); opacity: 1;}
}
.toUp4{
    animation: up4 0.8s ease-in-out;
    animation-delay: 0.3s;
    animation-fill-mode: backwards;
}
@keyframes up4
{
    from {transform:translateY(50%); opacity: 0;}
    to {transform:translateX(0); opacity: 1;}
}
.datacard-container{
    padding: 0 200px;
    margin: 120px 0;
    .datacard-panel{
        cursor: pointer;
        min-width: 250px;
        height: 300px;
        background: #FCFCFF;
        border-radius: 15px;
        box-shadow: 0px 10px 20px 0 rgba(107, 107, 107, 0.2);

        display: flex;
        flex-direction: column;
        padding: 15px 15px 25px;
        align-items: center;
        margin: 0 0 10px;
        .image{
            margin-bottom: 30px;
        }
        .desc{
            font-size: 28px;
            color: #2f3b5e;
            margin-bottom: 20px;
        }
        .number{
            font-size: 40px;
            color:#28D0A8;
            transition: all 0.3s ease-in;
            font-family: 'Raleway', sans-serif;;
        }
        .number:hover{
            color: #2887d0;
        }
    }

}
</style>