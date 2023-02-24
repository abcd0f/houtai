<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div style="width: 100%;height: 100%;">
        <div class="echarts" id="price" style="height: 100%;"></div>
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

            const myChart = echarts.init(document.getElementById("price"));
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
                    text: '成交金额趋势',
                    textStyle: {
                        color: '#999',
                        fontSize: '16'
                    },
                    top: '5',
                    left: '10'
                },
                grid: {
                    top: '15%',
                    right: '2%',
                    left: '5%',
                    bottom: '9%'
                },
                toolbox: {
                    feature: {
                        magicType: { show: true, type: ['line', 'bar'] },
                        saveAsImage: { show: true }
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: '#ddd',
                        }
                    },
                    backgroundColor: 'rgba(255,255,255,1)',
                    padding: [5, 10],
                    textStyle: {
                        color: '#7588E4',
                    },
                    extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
                },
                legend: {
                    data: ['抖音', '快手'],
                    top: '7',
                    right: '90'
                },
                xAxis: {
                    type: 'category',
                    data: ['00:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', "22:00"],
                    boundaryGap: false,
                    axisLine: {
                        lineStyle: {
                            color: '#609ee9'
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            fontSize: 14
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#609ee9'
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            fontSize: 14
                        }
                    }
                },
                series: [{
                    name: '抖音',
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    symbol: 'circle',
                    symbolSize: 6,
                    data: ['1200', '1400', '1008', '1411', '1026', '1288', '1300', '800', '1100', '1000', '1118', '1322'],
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(199, 237, 250,0.5)'
                            }, {
                                offset: 1,
                                color: 'rgba(199, 237, 250,0.2)'
                            }], false)
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#f7b851'
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 3
                        }
                    }
                }, {
                    name: '快手',
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    symbol: 'circle',
                    symbolSize: 6,
                    data: ['1200', '1400', '808', '811', '626', '488', '1600', '1100', '500', '300', '1998', '822'],
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(216, 244, 247,1)'
                            }, {
                                offset: 1,
                                color: 'rgba(216, 244, 247,1)'
                            }], false)
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#58c8da'
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 3
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