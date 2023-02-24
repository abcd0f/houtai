<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div style="width: 100%;height: 100%;">
        <div class="echart" id="three" style="height: 100%;"></div>
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

            const myChart = echarts.init(document.getElementById("three"));
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
                    text: '平台销量',
                    textStyle: {
                        color: '#999',
                        fontSize: '13'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                grid: {
                    top: '15%',
                    right: '3%',
                    left: '8%',
                    bottom: '9%'
                },
                toolbox: {
                    feature: {
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ['line', 'bar'] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                legend: {
                    data: ['抖音', '快手'],
                    icon: "circle",
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周天'],
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '抖音',
                        type: 'bar',
                        tooltip: {
                            valueFormatter: function (value) {
                                return value + ' 件';
                            }
                        },
                        barWidth: '12',
                        data: [
                            97, 88, 23, 46, 15, 67, 99
                        ],
                        itemStyle: {
                            normal: {
                                color: 'rgba(115, 160, 250, 1)',
                                barBorderRadius: [30, 30, 0, 0]
                            }
                        }
                    },
                    {
                        name: '快手',
                        type: 'bar',
                        tooltip: {
                            valueFormatter: function (value) {
                                return value + ' 件';
                            }
                        },
                        barWidth: '12',
                        data: [
                            159, 55, 12, 64, 84, 59, 88
                        ],
                        itemStyle: {
                            normal: {
                                color: 'rgba(255, 169, 76, 1)',
                                barBorderRadius: [30, 30, 0, 0]
                            }
                        }
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