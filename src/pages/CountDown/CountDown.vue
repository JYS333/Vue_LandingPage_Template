<template>
    <div class="coming-container">
        <div style="position: absolute; left: 50px; top: 50px;">
            <router-link style="color: #e1e1e1;" to="/home">Back Home</router-link>
        </div>
        <div class="logo">
            <!-- <el-image  style="width: 300px; height: auto;" :src="require(`@/assets/v_logo.png`)"></el-image> -->
            LOGO
        </div>
        <div class="title">
            COMING SOON!
        </div>
        <div class="text">
            We're coming to adasd asdad, asdda, and asdda adasda infrastructure solutions while prioritizing security, cost-efficiency, and scalability.
        </div>
        <div class="contdown-container">
            <h2>XXXX is Arriving</h2>
            <div class="countdown">
                <div id="year">{{yearNum}}</div>
                <div id="month">{{monsNum}}</div>
                <div id="day">{{dayNum}}</div>
                <div id="hour">{{hourNum}}</div>
                <div id="minute">{{minuteNum}}</div>
                <div id="second">{{secondNum}}</div>
            </div>
        </div>
        <div class="text2">
            Subscribe to our mailing list or follow us on social media to stay up to date
        </div>
        <div class="input-box">
            <input class="input-content" placeholder="Your Email" type="text">
            <div class="button">Contact</div>
        </div>
        <div class="media">
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
        <div class="copyrights">
            Copyright © 2023 numinas.
        </div>
    </div>
</template>

<script>
import moment from 'moment'; // 使用moment库
export default {
    data () {
      return {
        finalTime: '2024-01-01', // yyyy-mm-dd
        years: 0,
        mons: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        timeSetInterval: null,
        showTimeDown: false,
      };
    },
    created () {
        if (moment(new Date()).isBefore(this.finalTime)) {
                this.timeDown();
                this.showTimeDown = true;
        }
    },
    methods: {
        timeDown () {
            this.timeSetInterval = setInterval(() => {
            if (moment(this.finalTime).isBefore(moment())) {
                    this.showTimeDown = false;
                    this.years = 0;
                    this.mons = 0;
                    this.days = 0;
                    this.hours = 0;
                    this.minutes = 0;
                    this.seconds = 0;
                    clearInterval(this.timeSetInterval);
                    location.reload();
            }
            let dur = moment.duration(moment(this.finalTime) - moment(), 'ms');
            this.years = dur.get('years');
            this.mons = dur.get('months');
            this.days = dur.get('days');
            this.hours = dur.get('hours');
            this.minutes = dur.get('minutes');
            this.seconds = dur.get('seconds');
            }, 1000);
        }
    },
    computed: {
        yearNum () {
            if (this.years < 10) return '0' + this.years;
            return this.years;
        },
        monsNum () {
            if (this.mons < 10) return '0' + this.mons;
            return this.mons;
        },
        dayNum () {
            if (this.days < 10) return '0' + this.days;
            return this.days;
        },
        hourNum () {
            if (this.hours < 10) return '0' + this.hours;
            return this.hours;
        },
        minuteNum () {
            if (this.minutes < 10) return '0' + this.minutes;
            return this.minutes;
        },
        secondNum () {
            if (this.seconds < 10) return '0' + this.seconds;
            return this.seconds;
        }
    }
  };
</script>

<style lang="scss" scoped>
.coming-container{
    position: relative;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    // height: 1000px;
    background: #1a2131; // 换上你喜欢的背景或者图片
    .logo{
        font-size: 100px;
        color: #28D0A8;
        margin: 10px 0 50px;
    }
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
        height: 250px;
        display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
        margin-bottom: 30px;
        h2 {
            text-align: center;
            font-size: 30px;
            color: #ffffff;
        }
        .countdown {
            display: flex;
            margin-top: 50px;
        }
        .countdown div {
            position: relative;
            width: 100px;
            height: 100px;
            line-height: 100px;
            text-align: center;
            background: #333;
            color: #fff;
            margin: 0 15px;
            font-size: 3em;
            font-weight: 500;
            border-radius: 10px 10px 0 0;
        }
        .countdown div:before {
            content: '';
            position: absolute;
            bottom: -30px;
            left: 0;
            width: 100%;
            height: 35px;
            background: #00b0b0;
            color: #ffffff;
            font-size: 0.35em;
            line-height: 35px;
            font-weight: 300;
            border-radius: 0 0 10px 10px;
        }
        .countdown #year:before {
            content: 'Year';
        }
        .countdown #month:before {
            content: 'Month';
        }
        .countdown #day:before {
            content: 'Day';
        }
        .countdown #hour:before {
            content: 'Hour';
        }
        .countdown #minute:before {
            content: 'Min';
        }
        .countdown #second:before {
            content: 'Sec';
        }
    }
    .media{
        display: flex;
        justify-content: space-evenly;
        width: 250px;
        height: 60px;
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
    .text2{
        font-size: 15px;
        color: #e1e1e1;
        width: 47%;
        text-align: center;
        margin-bottom: 50px;
    }
    .input-box{
        margin-bottom: 50px;
        position: relative;
        .input-content{
            padding: 0 10px;
            border-radius: 10px;
            height: 50px;
            width: 700px;
            font-size: 17px;
        }
        .button{
            position: absolute;
            top: 5px;
            right: 5px;
            height: 40px;
            width: 150px;
            border-radius: 10px;
            text-align: center;
            color: #e1e1e1;
            font-size: 17px;
            line-height: 40px;
            background: linear-gradient(120deg, #1CF196 0%, #36A6BF 100%);
            cursor: pointer;
        }
    }
    .copyrights{
        color: #e1e1e1;
    }
}
</style>