<template>
    <div class="coming-container">
        <router-link to="/home">jump to home</router-link>
        <div class="logo">
            <el-image  style="width: 300px; height: auto;" :src="require(`@/assets/v_logo.png`)"></el-image>
        </div>
        <div class="title">
            COMING SOON!
        </div>
        <div class="text">
            We're coming to provide leading, innovative, and tailored blockchain infrastructure solutions while prioritizing security, cost-efficiency, and scalability.
        </div>
        <div class="contdown-container">
            Count down
        </div>
        <div class="text2">
            Subscribe to our mailing list or follow us on social media to stay up to date
        </div>
        <div class="input-box">
            <input type="text">
            <div class="button"></div>
        </div>
        <div class="media">

        </div>
        <div class="copyrights">
            Copyright © 2023 numinas.
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.coming-container{
    position: relative;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    // height: 1000px;
    background: #1a2131;
    .title{
        font-size: 95px;
        background: linear-gradient(90deg, #00fea1 0%, #3ebdd9 100%);
        color: transparent;
        -webkit-background-clip: text;
        margin-bottom: 20px;
    }
    .text{
        font-size: 20px;
        color: #e1e1e1;
        width: 47%;
        text-align: center;
        margin-bottom: 20px;
    }
    .contdown-container{
        height: 200px;
    }
    .text2{
        font-size: 20px;
        color: #e1e1e1;
        width: 47%;
        text-align: center;
        margin-bottom: 20px;
    }
}
</style>