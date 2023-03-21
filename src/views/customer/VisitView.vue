<template>
  <div id="app" v-cloak>
    <div class="list-view" ref="scrollBox" @scroll="handleScroll">
      <div
        class="list-view-phantom"
        :style="{
          height: contentHeight,
        }"
      >
        <div ref="content" class="list-view-content">
          <el-table
            :data="visibleData"
            style="width: 100%"
            :row-style="{
              height: itemHeight + 'px',
            }"
          >
            <el-table-column
              prop="name"
              label="姓名"
              width="180"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="phone"
              label="电话"
              width="180"
              align="center"
            >
            </el-table-column>
            <el-table-column label="性别" align="center">
              <template slot-scope="{ row }">{{
                row.sex == "0" ? "男" : row.sex == "1" ? "女" : ""
              }}</template>
            </el-table-column>
            <el-table-column prop="inputUserName" label="录入人" align="center">
            </el-table-column>
            <el-table-column label="录入时间" align="center">
              <template slot-scope="{ row }">{{
                row.entryTime | FormatDate
              }}</template>
            </el-table-column>
            <el-table-column label="操作" align="center">
              <template><i class="el-icon-edit"></i>修改</template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetCustomListApi } from "@/request/api";
export default {
  data() {
    return {
      tableData: [],
      itemHeight: 30,
      visibleData: [],
    };
  },
  computed: {
    contentHeight() {
      // console.log(this.tableData.length * this.itemHeight + "px");
      return this.tableData.length * this.itemHeight + "px";
    },
  },
  methods: {
    async getTableData() {
      console.log("请求已发送");
      const GetCustomListApiRes = await GetCustomListApi({
        pageNum: 1,
        pageSize: 622,
      });
      if (!GetCustomListApiRes) return;
      this.tableData = GetCustomListApiRes.rows;
      this.updateVisibleData();
    },
    //虚拟列表
    updateVisibleData(scrollTop = 0) {
      const visibleCount = Math.ceil(
        this.$refs.scrollBox.clientHeight / this.itemHeight
      );

      const start = Math.floor(scrollTop / this.itemHeight);
      const end = start + visibleCount;
      this.visibleData = this.tableData.slice(start, end);
      console.log(
        "1111",
        this.visibleData,
        start,
        end,
        visibleCount,
        this.$refs.scrollBox.clientHeight / this.itemHeight
      );
      this.$refs.content.style.webkitTransform = `translate3d(0, ${
        start * this.itemHeight
      }px, 0)`;
    },
    handleScroll() {
      const scrollTop = this.$refs.scrollBox.scrollTop;
      console.log(
        " this.$refs.scrollBox.scrollTop",
        this.$refs.scrollBox.scrollTop
      );
      this.updateVisibleData(scrollTop);
    },
  },
  created() {
    this.getTableData();
    console.log("cre", this.tableData);
  },
  mounted() {
    this.getTableData();
  },
};
</script>

<style>
.list-view {
  height: 590px;
  overflow: auto;
  position: relative;
  border: 1px solid #aaa;
}

.list-view-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.list-view-content {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
}

.list-view-item {
  padding: 5px;
  color: #666;
  line-height: 30px;
  box-sizing: border-box;
}

[v-cloak] {
  display: none;
}
</style>
