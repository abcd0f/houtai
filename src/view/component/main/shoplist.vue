<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div id="titleBox">商品列表</div>
    <div class="toolBox">
      <div class="search">
        <el-input
          v-model="inputscread"
          placeholder="请输入商品标题 / 商品id"
          style="width: 200px; margin-right: 20px"
        />
        <el-button type="primary" style="padding: 8px 10px">
          <el-icon class="el-icon--left">
            <Search />
          </el-icon>
          <span>搜索</span>
        </el-button>
        <el-button style="padding: 8px 10px">
          <el-icon class="el-icon--left">
            <Refresh />
          </el-icon>
          <span>重置</span>
        </el-button>
      </div>
      <div style="padding-left: 20px">
        <addshopdialog></addshopdialog>
        <el-button style="padding: 8px 10px">
          <el-icon class="el-icon--left">
            <Delete />
          </el-icon>
          <span>批量删除</span>
        </el-button>
        <div
          style="
            display: inline-block;
            float: right;
            margin-right: 30px;
            font-size: 20px;
          "
        >
          <el-icon>
            <Setting style="cursor: pointer" @click="showRow = true" />
          </el-icon>
        </div>
      </div>
    </div>
    <el-dialog title="自定义显示列项" v-model="showRow" width="600px">
      <transition name="fade">
        <div>
          <ul class="show_ul">
            <li class="show_li">
              <el-checkbox v-model="showColumn.id">ID</el-checkbox>
            </li>
            <li class="show_li">
              <el-checkbox v-model="showColumn.commodity_title"
                >商品标题</el-checkbox
              >
            </li>
            <li class="show_li">
              <el-checkbox v-model="showColumn.class_id">商品分类</el-checkbox>
            </li>
            <li class="show_li">
              <el-checkbox v-model="showColumn.thumbnail">商品图片</el-checkbox>
            </li>
            <li class="show_li">
              <el-checkbox v-model="showColumn.shop_name">商品名称</el-checkbox>
            </li>
            <li class="show_li">
              <el-checkbox v-model="showColumn.shop_score"
                >店铺评分</el-checkbox
              >
            </li>
            <li class="show_li">
              <el-checkbox v-model="showColumn.price">商品单价</el-checkbox>
            </li>
            <li class="show_li">
              <el-checkbox v-model="showColumn.stock">库存</el-checkbox>
            </li>
            <li class="show_li">
              <el-checkbox v-model="showColumn.send_threshold"
                >寄样门槛</el-checkbox
              >
            </li>
            <li class="show_li">
              <el-checkbox v-model="showColumn.status">是否上架</el-checkbox>
            </li>
            <li class="show_li">
              <el-checkbox v-model="showColumn.accumulate_num"
                >虚拟销量</el-checkbox
              >
            </li>
          </ul>
        </div>
      </transition>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="saveColumn">确 定</el-button>
        </span>
      </template>
    </el-dialog>
    <el-table :data="GoodList" stripe style="width: 100%">
      <el-table-column
        fixed
        prop="id"
        label="ID"
        width="200"
        align="center"
        v-if="showColumn.id"
      />
      <el-table-column
        fixed
        prop="commodity_title"
        label="商品标题"
        width="200"
        align="center"
        v-if="showColumn.commodity_title"
      />
      <el-table-column
        prop="class_id"
        label="商品分类"
        width="200"
        align="center"
        v-if="showColumn.class_id"
      />
      <el-table-column
        prop="thumbnail"
        label="商品图片"
        width="180"
        align="center"
        v-if="showColumn.thumbnail"
      >
        <template #default="scope">
          <el-image
            style="width: 80px; height: 80px"
            :src="scope.row.thumbnail"
            :preview-src-list="[scope.row.thumbnail]"
            :initial-index="4"
            fit="cover"
            :preview-teleported="true"
            :hide-on-click-modal="true"
          />
        </template>
      </el-table-column>
      <el-table-column
        prop="shop_name"
        label="店铺名称"
        width="200"
        align="center"
        v-if="showColumn.shop_name"
      />
      <el-table-column
        prop="shop_score"
        label="店铺评分"
        width="300"
        align="center"
        sortable
        v-if="showColumn.shop_score"
      />
      <el-table-column
        prop="price"
        label="商品单价"
        width="200"
        sortable
        align="center"
        v-if="showColumn.price"
      />
      <el-table-column
        prop="stock"
        label="库存"
        width="200"
        sortable
        align="center"
        v-if="showColumn.stock"
      />
      <el-table-column
        prop="send_threshold"
        label="寄样门槛"
        width="200"
        sortable
        align="center"
        v-if="showColumn.send_threshold"
      />
      <el-table-column
        prop="status"
        label="是否上架"
        width="200"
        align="center"
        v-if="showColumn.status"
      />
      <el-table-column
        prop="accumulate_num"
        label="销量"
        width="200"
        align="center"
        v-if="showColumn.accumulate_num"
      />
      <el-table-column fixed="right" label="操作" width="200" align="center">
        <template #default>
          <el-button link type="primary">
            <el-icon class="el-icon--left">
              <View />
            </el-icon>
            详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import addshopdialog from '../../../components/Dialog/addshopdialog';
  export default {
    components: {
      addshopdialog,
    },
    data() {
      return {
        GoodList: [], // 商品列表数组
        // imglist: [], // 商品图片数组  暂不确定怎样展示

        inputscread: '', // 搜索框绑定值
        showRow: false, // 列弹窗
        // 列的配置化对象，存储配置信息
        showColumn: {
          id: true,
          commodity_title: true,
          class_id: true,
          thumbnail: true,
          shop_name: true,
          shop_score: true,
          price: true,
          stock: true,
          send_threshold: true,
          status: true,
          accumulate_num: true,
        },
      };
    },
    created() {
      this.getGoodList();
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
      getGoodList() {
        this.axios.get('/api/goods/sellersGoodsList').then(res => {
          this.GoodList = res.data.data.result;
          // console.log(this.GoodList, '商品列表');
          // this.imglist = this.GoodList?.map(function (item) {
          //     return { name: item.thumbnail };
          // });
        });
      },

      handleClick(row) {
        console.log(row);
      },
      saveColumn() {
        localStorage.setItem('columnSet', JSON.stringify(this.showColumn));
        this.showRow = false;
      },
    },
  };
</script>

<style lang="less" scoped>
  :deep(.el-button [class*='el-icon'] + span) {
    margin-left: 0px;
    line-height: 32px;
    font-size: 13px;
  }

  #titleBox {
    height: 60px;
    background: #f9f9f9;
    font-size: 16px;
    line-height: 60px;
    padding: 0 15px;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid #e9e9e9;
    font-weight: 700;
    color: #666;
  }

  .toolBox {
    height: 125px;
    background-color: #fff;
    border-bottom: 1px solid #e9e9e9;
  }

  .search {
    padding: 20px;
  }

  .show_ul {
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
  }
  .show_li {
    list-style: none;
    display: block;
    width: 112px;
  }
</style>
