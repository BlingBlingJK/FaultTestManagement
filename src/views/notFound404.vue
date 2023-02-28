<template>
  <p>找不到页面！正在为您跳转到首页{{ pnts }}</p>
</template>

<script>
export default {
  data() {
    return {
      pnts: "",
    };
  },
  created() {
    let p = setInterval(() => {
      this.pnts += "..";
      if (this.pnts === "..........") {
        clearInterval(p);
      }
    }, 300);
    setTimeout(() => {
      this.$router.push("/");
    }, 2000);
  },
};
</script>

<style></style>
