<template>
<div class="wrap-container">
    <Navigator />
    <div class="summary-container">
        <div class="date-wrap">
            <div class="date">
                {{ currentDate }}
            </div>
        </div>
        <div class="input-area">
            <el-input
                :disabled="isUpdated"
                class="new-input"
                style="width: 60%; margin-right: 20px;"
                :placeholder="Placeholder"
                v-model="total"
                clearable>
            </el-input>
            <el-button type="primary" icon="el-icon-money" :disabled="isUpdated" @click="addChartData">添加资产</el-button>
            <el-button type="danger" icon="el-icon-remove" :disabled="!isUpdated" @click="deleteChartData">撤回</el-button>
        </div>
        <div class="chart-area">
            <div ref="myChart" style="width:100%;height:520px" id="myChart"></div>
        </div>
        <!-- <p>{{ date }}</p> -->
        <!-- <p>{{ money }}</p> -->
        <div style="display: flex;justify-content: center;">
            <el-tooltip placement="top" content="资产记录">
                <div class="recordMoney" v-clipboard:copy="money.toString()" v-clipboard:success="onCopySuccess" v-clipboard:error="onCopyError">
                    <img src="@/assets/coin.png" />
                </div>
            </el-tooltip>
            <el-tooltip placement="top" content="日期记录">
                <div class="recordMoney" v-clipboard:copy="stringDate.toString()" v-clipboard:success="onCopySuccess" v-clipboard:error="onCopyError">
                    <img src="@/assets/date.png" />
                </div>
            </el-tooltip>
            <div class="refresh">
                <img id="refreshIcon" src="@/assets/refresh.png" @click="refreshPage"/>
            </div>
            <!-- <el-button v-clipboard:copy="stringDate.toString()" v-clipboard:success="onCopySuccess" v-clipboard:error="onCopyError">Copy Date</el-button>
            <el-button v-clipboard:copy="'['+money.toString()+']'" v-clipboard:success="onCopySuccess" v-clipboard:error="onCopyError">Copy Money</el-button> -->
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            chart: '', // echarts实例
            currentDate: '', // 今天的日期
            // date:['05/23', '05/25', '05/26', '05/27', '05/28', '05/29'], // 初始化日期数据（x轴）
            // money: [774116, 774232, 774390, 774490, 774690, 774800, 774900], // 初始化资产数据（y轴）
            date:[  // 初始化日期数据（x轴）
            '05/23','05/25'
            ], 
            money: [ // 初始化资产数据（y轴）
            774116,774274
            ], 
            total: '',
            option:{},
        }
    },
    computed:{
        isUpdated(){
            let v1 = this.date[this.date.length-1]; // 当前最新存储资产的时间
            let v2 = this.currentDate.split('-')[1] +'/'+ this.currentDate.split('-')[2];
            // console.log(v1, v2);
            return v1==v2;
        },
        Placeholder(){
            return this.isUpdated ? '今天已经添加过资产了哦~' : '💰今天又涨了多少，快来记录吧！'
        },
        stringDate(){
            return this.date.map(el => {
                return "'"+el+"'"
            })
        }
    },
    watch:{
        
    },
    methods:{
        setMyEchart() {
            const myChart = this.$refs.myChart;
            if (myChart) {

                if(!this.chart){ // 如果已经存在echarts实例，则直接更新，不再init
                    this.chart = this.$echarts.init(myChart);
                }
                
                this.option = {
                    xAxis: {
                        type: 'category',
                        data: this.date // x轴为日期
                    },
                    yAxis: {
                        type: 'value',
                        min: 770000,
                        max: 800000
                    },
                    tooltip: {
                        show: true,
                        // formatter: "{a}<br/>{b}:{c}"
                    },
                    series: [
                        {
                        data: this.money, // 数据为资产
                        type: 'line',
                        // itemStyle : { normal: {label : {show: true}}}
                        }
                    ]
                };
                this.chart.setOption(this.option);
                // window.addEventListener("resize", function() {
                //     thisChart.resize();  //页面大小变化后Echarts也更改大小
                // });
            }
        },
        addChartData(){ // 重绘图表
            let number = this.total; 

            let D = new Date();
            let date = this.formatNumber(D.getMonth() + 1)+'/'+this.formatNumber(D.getDate()); // 获取日期 xx/xx

            if(number){
                if(this.date.length>=30){
                    this.date.shift(); // 删除最旧的值
                }
                if(this.money.length>=30){
                    this.money.shift(); // 删除最旧的值
                }
                this.date.push(date);
                this.money.push(number);

                localStorage.setItem('DATE', JSON.stringify(this.date)); // 用缓存来记录
                localStorage.setItem('MONEY', JSON.stringify(this.money));

                this.total = '';
                this.$message({
                    message: '资产已记录！又是赚钱的一天~',
                    type: 'success',
                    center: true,
                    duration: 2500,
                });
                this.setMyEchart();
            }else{
                this.$message('需要输入今天的总资产数！');
                return;
            }
        },
        deleteChartData(){
            this.date.pop();
            this.money.pop();

            localStorage.setItem('DATE', JSON.stringify(this.date)); // 更新缓存
            localStorage.setItem('MONEY', JSON.stringify(this.money))

            this.setMyEchart();
        },
        formatNumber(number){
            return number < 10 ? '0'+number : number;
        },
        onCopySuccess(e) {
            // copy的内容需要转成String格式，否则会报错
            this.$message({
                message: 'Copied',
                type: 'success',
                center: true,
                duration: 1000,
                customClass: 'copySuccess'
            });
        },
        onCopyError (e) {
            console.log('Failed to copy texts')
        },
        setCurrentDate(){ // 设置当前日期
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');
            this.currentDate = `${year}-${month}-${day}`;
        },
        refreshPage(){ // 手动刷新页面，通过改变某一属性，触发局部重绘
            this.setCurrentDate();
        }
    },
    mounted(){
        let DATE = JSON.parse(localStorage.getItem('DATE'));
        let MONEY = JSON.parse(localStorage.getItem('MONEY'));
        if(DATE && MONEY){
            this.date = DATE;
            this.money = MONEY;
        }

        this.setCurrentDate();
        this.setMyEchart();
    },
}
</script>

<style>
.el-message {
    min-width: 100px !important;
}
.el-message--success {
    background-color: #3ba103 !important;
    border-color: transparent !important;
}
.el-message--success .el-message__content {
    color: #f4f4f4 !important;
}
.el-icon-success:before {
    content: none !important;
}
.el-message__icon {
    margin-right: 0 !important;
}
.new-input .el-input__inner:focus {
    border-color: #fbb111 !important;
}
.el-button--primary, .el-button--primary:focus, .el-button--primary:hover {
    background: #fbb111 !important;
    border-color: #fbb111 !important;
    color: #FFF;
}
.el-button--primary.is-disabled, .el-button--primary.is-disabled:active, .el-button--primary.is-disabled:focus, .el-button--primary.is-disabled:hover {
    color: #FFF;
    background-color: #ffed94 !important;
    border-color: #ffed94 !important;
}
</style>
<style lang="less" scoped>
.wrap-container{
    padding-top: 80px;
    width: 100%;
    // height:100%;
    overflow: scroll;
    position: relative;
    box-sizing: border-box;
    background: #f5f5fb;
    .summary-container{
        padding: 0 200px 100px;
        color: #2f3b5e;
        .date-wrap{
            margin: 20px 0 40px;
            display: flex;
            justify-content: center;
            .date{
                cursor: pointer;
                color: #ffffff;
                font-size: 36px;
                width: 300px;
                height: 70px;
                border-radius: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: linear-gradient(120deg, #f1bc1c 0%, #fb4807 100%);
                box-shadow: 0 0 20px 3px #d3cbcb;
                
            }
        }
        .input-area{
            display: flex;
            align-items: center;
            justify-content: center;
            .input{
                display: inline-block;
            }
        }
        .recordMoney{
            margin: 0 20px;
            width: 50px;
            height: 50px;
            img{
                cursor: pointer;
                width: 100%;
                height: 100%;
            }
        }
        .recordDate{
            margin: 0 20px;
            width: auto;
            height: 50px;
            img{
                cursor: pointer;
                width: 100%;
                height: 100%;
            }
        }
        .refresh{
            margin: 0 20px;
            width: auto;
            height: 50px;
            img{
                cursor: pointer;
                width: 100%;
                height: 100%;
                transition: transform 1s;
                transition: transform 1s ease-in-out;
            }
            img:hover{
                transform: rotate(360deg);
            }
        }
    }
}
</style>