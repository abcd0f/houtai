<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="all">
        <div class="text_box_all">
            <div class="text_box">
                <p>商户总数</p>
                <span>
                    1200
                    <span style="color: #999; font-size: 14px">家</span>
                </span>
            </div>
            <div class="text_box">
                <p>商户总数</p>
                <span>1200</span>
                家
            </div>
            <div class="text_box">
                <p>商户总数</p>
                <span>1200</span>
            </div>
            <div class="text_box">
                <p>商户总数</p>
                <span>1200</span>
            </div>
            <div class="text_box">
                <p>商户总数</p>
                <span>1200</span>
            </div>
        </div>
        <div class="chart">
            <div class="chart_box">
                <echatrs_one></echatrs_one>
            </div>
            <div class="chart_box">
                <echatrs_two></echatrs_two>
            </div>
            <div class="chart_box">
                <echatrs_three></echatrs_three>
            </div>
        </div>
        <div class="price">
            <echatrs_price></echatrs_price>
        </div>
    </div>
</template>

<script>
import echatrs_one from '../echatrs/echatrs_one.vue';
import echatrs_two from '../echatrs/echatrs_two.vue';
import echatrs_three from '../echatrs/echatrs_three.vue';
import echatrs_price from '../echatrs/echatrs_price.vue';
export default {
    components: {
        echatrs_one,
        echatrs_two,
        echatrs_three,
        echatrs_price,
    },
};
</script>

<style lang="less" scoped>
.all {
    font-family: '微软雅黑', sans-serif;
    font-weight: 400;
    /* padding: 10px 50px; */
}

.text_box_all {
    display: flex;
    justify-content: space-between;

    
    .text_box {
        width: 236px;
        height: 120px;
        background-color: #fff;
        -moz-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.0470588235294118);
        -webkit-box-shadow: 0px 0px 5px rgb(0 0 0 / 5%);
        box-shadow: 0px 0px 5px rgb(0 0 0 / 5%);
    }

    .text_box:nth-child(1) {
        border-width: 5px;
        border-style: solid;
        border-color: rgba(251, 98, 96, 1);
        border-top: 0px;
        border-right: 0px;
        border-bottom: 0px;
    }

    .text_box:nth-child(2) {
        border-width: 5px;
        border-style: solid;
        border-color: rgba(0, 153, 255, 1);
        border-top: 0px;
        border-right: 0px;
        border-bottom: 0px;
    }

    .text_box:nth-child(3) {
        border-width: 5px;
        border-style: solid;
        border-color: rgba(129, 103, 245, 1);
        border-top: 0px;
        border-right: 0px;
        border-bottom: 0px;
    }

    .text_box:nth-child(4) {
        border-width: 5px;
        border-style: solid;
        border-color: rgba(81, 211, 81, 1);
        border-top: 0px;
        border-right: 0px;
        border-bottom: 0px;
    }

    .text_box:nth-child(5) {
        border-width: 5px;
        border-style: solid;
        border-color: rgba(255, 169, 76, 1);
        border-top: 0px;
        border-right: 0px;
        border-bottom: 0px;
    }

    .text_box p {
        font-size: 14px;
        line-height: 42px;
        color: #999;
        margin-left: 20px;
    }

    .text_box span {
        line-height: 52px;
        font-size: 24px;
        font-weight: 700;
        margin-left: 20px;
    }
}

.chart {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .chart_box {
        width: 32%;
        height: 35vh;
        background-color: #fff;
        -moz-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.0470588235294118);
        -webkit-box-shadow: 0px 0px 5px rgb(0 0 0 / 5%);
        box-shadow: 0px 0px 5px rgb(0 0 0 / 5%);
    }
}

.price {
    width: 100%;
    height: 50vh;
    margin-top: 20px;
    background-color: #fff;
}
</style>
