<template>
    <div class="wrap-container">
        <!-- 导航条 -->
        <Navigator />
        <!-- 轮播图 -->
        <Carousel />
        <!-- 主内容区 -->
        <div class="content">
            <Panel1 />
            <DataCard />
            <!-- <el-divider></el-divider> -->
            <Panel2 />
            <!-- <el-divider></el-divider> -->
            <Panel3 />
            <!-- <el-divider></el-divider> -->
            <div class="panel4">
                <el-row :gutter="10">
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"><AreaChart /></el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"><PieChart /></el-col>
                </el-row>
            </div>
            <InfoCardVue />
            <QuestionListVue />
        </div>
        <!-- 底部 -->
        <Footer></Footer>
        <!-- 返回顶部 -->
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
import Panel1 from '@/components/Panel/Panel1.vue';
import Panel2 from '@/components/Panel/Panel2.vue';
import Panel3 from '@/components/Panel/Panel3.vue';
import DataCard from '@/components/DataCard/DataCard.vue';
import InfoCardVue from '@/components/InfoCard/InfoCard.vue';
import PieChart from '@/components/PieChart/PieChart.vue';
import AreaChart from '@/components/AreaChart/AreaChart.vue';
import QuestionListVue from '@/components/QuestionList/QuestionList.vue';

    export default{
        components:{
            Carousel,
            Panel1,
            Panel2,
            Panel3,
            DataCard,
            InfoCardVue,
            PieChart,
            AreaChart,
            QuestionListVue,
        },
        data() {
            return {

            }
        },
    }
</script>

<style lang="less" scoped>
.wrap-container{
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
        .panel4{
            padding: 0 200px;
            margin-bottom: 120px;
        }
    }
}
</style>