<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="app">
        <el-table :data="tableData" border style="width: 100%" ref="table">
            <el-table-column fixed type="index" align="center" :index="1">
                <template #header>
                    <!-- <i class="el-icon-setting"></i> -->
                    <el-icon>
                        <Setting style="font-size: 22px; cursor: pointer" @click="visible = true" />
                    </el-icon>
                </template>
            </el-table-column>
            <el-table-column
                prop="date"
                label="日期"
                width="150"
                v-if="showColumn.date"
            ></el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="120"
                v-if="showColumn.name"
            ></el-table-column>
            <el-table-column
                prop="province"
                label="省份"
                width="120"
                v-if="showColumn.provinces"
            ></el-table-column>
            <el-table-column
                prop="city"
                label="市区"
                width="120"
                v-if="showColumn.city"
            ></el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                minWidth="300"
                v-if="showColumn.adreess"
            ></el-table-column>
            <el-table-column
                prop="zip"
                label="邮编"
                width="120"
                v-if="showColumn.zipCode"
            ></el-table-column>
            <el-table-column label="操作" fixed="right" width="100" align="center">
                <template #default="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">
                        查看
                    </el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="自定义显示列项" v-model="visible" width="600px">
            <el-table :data="Data" border :header-row-style="{ height: '50px' }">
                <el-table-column width="55" label="选择" align="center">
                    <template #default="scope">
                        <el-checkbox v-model="scope.row.data"></el-checkbox>
                    </template>

                    <!-- <el-checkbox></el-checkbox> -->
                </el-table-column>

                <el-table-column prop="name" label="名称" align="center" />
            </el-table>

            <transition name="fade">
                <div>
                    <el-checkbox v-model="showColumn.date">日期</el-checkbox>
                    <el-checkbox v-model="showColumn.name">姓名</el-checkbox>
                    <el-checkbox v-model="showColumn.provinces">省份</el-checkbox>
                    <el-checkbox v-model="showColumn.city">市区</el-checkbox>
                    <el-checkbox v-model="showColumn.adreess">地址</el-checkbox>
                    <el-checkbox v-model="showColumn.zipCode">邮编</el-checkbox>
                </div>
            </transition>
            <template #footer>
                <span class="dialog-footer">
                    <!-- <el-button @click="visible = false">取 消</el-button> -->
                    <el-button type="primary" @click="saveColumn">确 定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            Data: [
                { data: '1111', name: '日期' },
                { data: '2016-05-04', name: '姓名' },
                { data: 'name: true', name: '省份' },
                { data: '2016-05-04', name: '市区' },
                { data: 'name: true', name: '地址' },
                { data: '2016-05-04', name: '邮编' },
            ],
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333,
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333,
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333,
                },
            ],
            // 列的配置化对象，存储配置信息
            showColumn: {
                date: true,
                name: true,
                provinces: true,
                city: true,
                adreess: true,
                zipCode: true,
            },
        };
    },
    mounted() {
        // 发请求得到showColumnInitData的列的名字
        if (localStorage.getItem('columnSet')) {
            this.showColumn = JSON.parse(localStorage.getItem('columnSet'));
        } else {
            this.showColumn = {
                date: true,
                name: true,
                provinces: true,
                city: true,
                adreess: true,
                zipCode: true,
            };
        }
    },
    methods: {
        handleClick(row) {
            console.log(row);
        },
        saveColumn() {
            localStorage.setItem('columnSet', JSON.stringify(this.showColumn));
            this.visible = false;
        },
    },
};
</script>

<style lang="less" scoped></style>
