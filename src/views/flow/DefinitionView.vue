<template>
  <div>
    <el-upload
      class="upload-demo"
      ref="upload"
      action=""
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-change="handleChange"
      :file-list="fileList"
      :auto-upload="false"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button
        style="margin-left: 10px"
        size="small"
        type="success"
        @click="submitUpload"
        >上传</el-button
      >
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
  </div>
</template>

<script>
import { BpmnInfoApi } from "@/request/api";
export default {
  data() {
    return {
      // 这个list要手动添加
      fileList: [],
    };
  },
  methods: {
    handleChange(file, fileList) {
      // 添加文件触发执行这里的代码
      this.fileList = fileList;
    },
    //上传文件
    async submitUpload() {
      console.log("点击上传按钮的时候执行这个函数");
      console.log(this.fileList);
      const file = this.fileList[0];

      const res = await BpmnInfoApi(
        {
          file: file.raw,
          bpmnLabel: file.name + new Date().getTime(),
          bpmnType: "casual-leave",
          info: "试一下上传文件的接口",
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (!res) return;
      this.$message.success(res.msg);
    },
    handleRemove(file, fileList) {
      // 点击删除按钮执行
      console.log("handleRemove", file, fileList);
    },
    handlePreview(file) {
      // 点击文件的时候执行
      console.log(file);
    },
  },
};
</script>

<style lang="less" scoped></style>
