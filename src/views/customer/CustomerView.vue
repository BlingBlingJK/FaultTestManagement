<template>
  <div>
    <el-button @click="exportExl"
      ><svg-icon icon-file-name="star" style="margin-right: 5px"></svg-icon
      >导出</el-button
    >
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="客户姓名" align="center">
        <template slot-scope="{ row }">{{ row.name }}</template>
      </el-table-column>
      <el-table-column label="电话" align="center">
        <template slot-scope="{ row }">{{ row.phone }}</template>
      </el-table-column>
      <el-table-column label="性别" align="center">
        <template slot-scope="{ row }">{{
          row.sex == "0" ? "男" : row.sex == "1" ? "女" : ""
        }}</template>
      </el-table-column>
      <el-table-column label="录入人" prop="inputUserName" align="center">
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

    <div style="display: flex; justify-content: center">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { GetCustomListApi } from "@/request/api";
import { CustomExportApi } from "@/request/api";
import { saveAs } from "file-saver";
export default {
  data() {
    return {
      tableData: [],
      // tableData: new Array(86).fill({
      //   phone: "1335679763",
      //   sex: "0",
      //   name: "王小虎",
      //   address: "上海市普陀区金沙江路 1518 弄",
      //   inputUserName: "超级管理员",
      //   entryTime: "2022-09-13T17:13:33.000+08:00",
      // }),
      multipleSelection: [],
      pageNum: 1,
      pageSize: 10,
      total: 8,
    };
  },
  // computed: {
  //   total() {
  //     return this.tableData.length;
  //   },
  // },
  methods: {
    async exportExl() {
      const CustomExportRes = await CustomExportApi(
        {
          pageNum: 1,
          pageSize: 10,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          responseType: "blob",
        }
      );
      if (!CustomExportRes) return;
      console.log("CustomExportRes", CustomExportRes);
      saveAs(
        //Blob 对象表示一个不可变、原始数据的类文件对象。
        //Blob 表示的不一定是JavaScript原生格式的数据。
        //File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
        //返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。
        new Blob([CustomExportRes]),
        //设置导出文件名称
        `客户档案_${new Date().getTime()}.xlsx`
      );
      //把文件转成表格
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getTableData();
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.getTableData();
    },
    async getTableData() {
      console.log("请求已发送");
      const GetCustomListApiRes = await GetCustomListApi({
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      });
      if (!GetCustomListApiRes) return;
      console.log("GetCustomListApi", GetCustomListApiRes);
      this.tableData = GetCustomListApiRes.rows;
      this.total = GetCustomListApiRes.total;
    },
  },
  mounted() {
    this.getTableData();
  },
};
</script>

<style lang="less" scoped></style>
