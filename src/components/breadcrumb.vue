<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div></div>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">系统首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: breadList[1].path }" v-if="breadList.length == 2">
            {{ breadList[1].name }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    data() {
        return {
            breadList: [],
        };
    },
    created() {
        this.getBreadcrumb();
    },
    watch: {
        //路由改变的时候监听
        $route() {
            this.getBreadcrumb();
        },
    },
    methods: {
        getBreadcrumb() {
            let matched = this.$route.matched; //拿到显示的路由路径
            // console.log('matched', matched);
            this.breadList = matched;
        },
    },
};
</script>

<style>
.el-breadcrumb {
    line-height: 50px;
}

.el-breadcrumb__inner.is-link {
    color: #999;
    font-weight: 500;
}

.el-breadcrumb__item {
    color: #666666;
}
</style>
