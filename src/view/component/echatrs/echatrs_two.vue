<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div style="width: 100%;height: 100%;">
        <div class="echart" id="two" style="height: 100%;"></div>
    </div>
</template>

<script>
import * as echarts from "echarts";
export default {
    data() {
        return {
        };
    },
    mounted() {
        this.initEcharts();
        // 监听屏幕大小变化
        window.addEventListener("resize", () => {
            this.initEcharts();
        })
    },
    methods: {
        initEcharts() {
            function fontSize(res) {
                let clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                if (!clientWidth) return;
                let fontSize = 100 * (clientWidth / 1920);
                return res * fontSize;
            }
            // 当我们浏览器缩放的时候，图表也等比例缩放
            window.addEventListener("resize", function () {
                // 让我们的图表调用 resize这个方法
                myChart.resize();
            });

            const myChart = echarts.init(document.getElementById("two"));
            myChart.showLoading({
                text: '正在加载',
                color: '#c23531',
                textColor: '#000',
                fontSize: fontSize(0.16),
                maskColor: 'rgba(255, 255, 255, 0.1)',
                zlevel: 0,
            });
            setTimeout(() => {
                myChart.hideLoading();
                myChart.setOption(option);
            }, 1000);

            window.onresize = function () {
                myChart.resize();
            };

            const option = {
                title: {
                    text: '日交易额',
                    textStyle: {
                        color: '#999',
                        fontSize: '13'
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    top: '15%',
                    right: '3%',
                    left: '8%',
                    bottom: '9%'
                },
                xAxis: {
                    type: 'category',
                    data: ['00:00', '4:00', '8:00', '12:00', '16:00', '20:00', '24:00']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [150, 230, 224, 218, 135, 147, 260],
                        type: 'line',
                        color: "rgba(81, 211, 81, 1)",
                    }
                ]
            };
        },
        beforeDestoryed() {
            // 组件销毁前移除监听,防止内存泄露
            window.removeEventListener('resize')
        }
    }
}
</script>

<style scoped>

</style>