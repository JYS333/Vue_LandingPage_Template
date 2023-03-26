<template>
  <div>
    <div ref="myChart" style="width:100%;height:520px" id="myChart"></div>
  </div>
</template>

<script>
export default {
    name: 'PieChart',
    data(){
        return{

        }
    },
    methods:{
        setMyEchart() {
            const myChart = this.$refs.myChart;
            if (myChart) {
                const thisChart = this.$echarts.init(myChart);
                const option = {
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        top: '5%',
                        left: 'center'
                    },
                    series: [
                        {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                            show: true,
                            fontSize: 40,
                            fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ]
                        }
                    ]
                };
                thisChart.setOption(option);
                // window.addEventListener("resize", function() {
                //     thisChart.resize();  //页面大小变化后Echarts也更改大小
                // });
            }
        }
    },
    mounted(){
        this.setMyEchart();
    },
}
</script>
<style lang="less" scoped>

</style>