<template>
    <div class="carousel">
        <el-carousel trigger="click" height="500px">
            <el-carousel-item class="cal-panel" :key="11">
                <div class="inner-panel">
                    <div class="top">We have 24/7 supported team</div>
                    <div class="bottom">Best Invest Company Scince 2020</div>
                    <div class="more">Learn More</div>
                </div>
                <el-image class="image" :src="require(`@/assets/11.jpg`)" fit="fill"></el-image>
            </el-carousel-item>
            <el-carousel-item class="cal-panel" :key="22">
                <div></div>
                <el-image class="image" :src="require(`@/assets/22.jpg`)" fit="fill"></el-image>
            </el-carousel-item>
            <el-carousel-item class="cal-panel" :key="33">
                <div></div>
                <el-image class="image" :src="require(`@/assets/33.jpg`)" fit="fill"></el-image>
            </el-carousel-item>
            <el-carousel-item class="cal-panel" :key="44">
                <div></div>
                <el-image class="image" :src="require(`@/assets/44.jpg`)" fit="fill"></el-image>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    data(){
        return{

        }
    },
    methods:{}
}
</script>

<style lang="less" scoped>
    .carousel{
        width: 100%;
        margin:  0 0 80px;
        .cal-panel{
            position: absolute;
            .inner-panel{
                position: absolute;
                z-index: 1030;
                width: 800px;
                height: 320px;
                border-radius: 15px;
                background: rgba(255, 255, 255, 0.5);
                top: 100px;
                left: 100px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                box-sizing: border-box;
                padding: 10px 20px 10px;
                .top{
                    font-size: 20px;
                    color: #2f3b5e;
                    font-weight: 700;
                    margin: 0 0 21px;
                }
                .bottom{
                    font-size: 70px;
                    font-weight: 800;
                    color: #2f3b5e;
                    margin-bottom: 21px;
                }
                .more{
                    cursor: pointer;
                    width: 150px;
                    text-align: center;
                    border-radius: 2px;
                    font-size: 14px;
                    padding: 10px 24px;
                    color: #2f3b5e;
                    border: 1px solid #2f3b5e;
                }
            }
            .image{
                width: 100%;
            }
        }
        
    }
</style>