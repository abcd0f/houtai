<!-- eslint-disable vue/multi-word-component-names -->
<template>

    <el-container>
        <el-aside>
            <leftNav></leftNav>
        </el-aside>
        <el-container>
            <el-header>
                <breadcrunb></breadcrunb>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>

</template>

<script>
import breadcrunb from '../components/breadcrumb.vue'
import leftNav from './component/leftNav.vue'
export default {
    components: {
        leftNav,
        breadcrunb
    }

}
</script>

<style>
.el-container {
    height: 100vh;
}

.el-header {
    height: 50px;
    -ms-overflow-x: hidden;
    overflow-x: hidden;
    -ms-overflow-y: hidden;
    overflow-y: hidden;
    background-color: rgba(255, 255, 255, 1);
    background-image: none;
    border: none;
    border-radius: 0px;
    -moz-box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.0470588235294118);
    -webkit-box-shadow: 0px 3px 5px rgb(0 0 0 / 5%);
    box-shadow: 0px 3px 5px rgb(0 0 0 / 5%);
    z-index: 2;
}

.el-aside {
    width: 220px;
    text-align: center;
    box-shadow: 5px 0px 5px rgb(0 0 0 / 10%);
    z-index: 3;
}

.el-main {
    background-color: rgba(240, 242, 245, 1);
}
</style>