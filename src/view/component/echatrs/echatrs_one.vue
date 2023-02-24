<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div style="width: 100%;height: 100%;">
        <div class="echart" id="echart" style="height: 100%;"></div>
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

            const myChart = echarts.init(document.getElementById("echart"));
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


            // var list = [2222, 5555, 999]

            const option = {
                title: {
                    text: '周订单量',
                    textStyle: {
                        color: '#999',
                        fontSize: '13'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    top: '15%',
                    right: '5%',
                    left: '10%',
                    bottom: '9%'
                },
                xAxis: [{

                }],
                yAxis: [{
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周天'],
                }],
                series: [{
                    type: 'bar',
                    data: [80, 80, 97, 53, 95, 26, 72],
                    barWidth: '13',
                    itemStyle: {
                        normal: {
                            color: '#409EFF',
                            barBorderRadius: [0, 30, 30, 0],
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            lineHeight: 30,
                            formatter: '{c}',
                            position: 'right',
                            textStyle: {
                                color: '#409EFF',
                            }

                        }
                    }
                }]

            };

        },
        beforeDestoryed() {
            // 组件销毁前移除监听,防止内存泄露
            window.removeEventListener('resize')
        }
    }
}
</script>

<style lang="less" scoped>

</style>