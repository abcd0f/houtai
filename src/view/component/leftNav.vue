<template>
    <div class="wrapper_content">
        <div class="tab_title">
            <div class="logo">
                <img src="../../assets/logo.png" />
            </div>
            <div class="list">
                <div class="tab_img" @click="tab = 0" :class="{ tab_active: tab == 0 }">
                    <el-icon>
                        <DataLine />
                    </el-icon>
                </div>
                <div class="tab_img" @click="tab = 1" :class="{ tab_active: tab == 1 }">
                    <el-icon>
                        <Box />
                    </el-icon>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="tab_content" v-if="tab == 0">
                <sellshow></sellshow>
            </div>
            <div class="tab_content" v-else-if="tab == 1">
                <commodity></commodity>
            </div>
        </div>
    </div>
</template>

<script>
import sellshow from './subnav/sellshow.vue';
import commodity from './subnav/commodity.vue';
export default {
    components: {
        sellshow,
        commodity,
    },
    data() {
        return {
            tab: 0, //默认选中第一个tab
        };
    },
};
</script>

<style scoped>
.wrapper_content {
    height: 100%;
    display: flex;
}

.tab_title {
    z-index: 3;
    width: 80px;
    position: relative;
    background-color: rgba(24, 145, 255, 1);
    overflow-x: hidden;
    -ms-overflow-y: hidden;
    overflow-y: hidden;
    background-color: rgba(24, 145, 255, 1);
    background-image: url(../../assets/left_bg.svg);
    background-position: center top;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    background-origin: border-box;
    border: none;
    border-radius: 0px;
    -moz-box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.0980392156862745);
    -webkit-box-shadow: 5px 0px 5px rgb(0 0 0 / 10%);
    box-shadow: 5px 0px 5px rgb(0 0 0 / 10%);
}

.tab_active {
    background: url(../../assets/triangle.svg) no-repeat center right,
        url(../../assets/title_bg.svg);
}

.tab_title .logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 70px;
}

.tab_title .logo img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
}

.tab_title .list {
    width: 80px;
    height: 100px;
    margin-top: 70px;
}

.tab_title .list .tab_img {
    height: 50px;
    line-height: 50px;
}

.content {
    width: 140px;
    height: 100%;
    /* background-color: aqua; */
    box-shadow: 5px 0px 5px rgb(0 0 0 / 10%);
}
</style>
