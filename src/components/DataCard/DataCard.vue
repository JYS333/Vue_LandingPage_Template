<template>
  <div class="datacard-container">
    <el-row :gutter="10">
        <el-col style="display: flex; justify-content: center;" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
            <div class="datacard-panel">
                <el-image class="image" :src="require('@/assets/logo.png')" fit="cover"></el-image>
                <div class="desc">Total Number</div>
                <div class="number">55,368</div>
            </div>
        </el-col>
        <el-col style="display: flex; justify-content: center;" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
            <div class="datacard-panel">
                <el-image class="image" :src="require('@/assets/logo.png')" fit="cover"></el-image>
                <div class="desc">Total Members</div>
                <div class="number">4,903</div>
            </div>
        </el-col>
        <el-col style="display: flex; justify-content: center;" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
            <div class="datacard-panel">
                <el-image class="image" :src="require('@/assets/logo.png')" fit="cover"></el-image>
                <div class="desc">Earned</div>
                <div class="number">$1,323,457</div>
            </div>
        </el-col>
        <el-col style="display: flex; justify-content: center;" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
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
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
.datacard-container{
    padding: 0 200px;
    margin: 90px 0;
    .datacard-panel{
        cursor: pointer;
        min-width: 250px;
        height: 300px;
        background: #FCFCFF;
        border-radius: 15px;
        box-shadow: 0px 20px 30px 0 rgba(226, 226, 226, 0.2);

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