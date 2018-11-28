<template>
    <div class="title">
      <img class="scan_icon" src="../../../assets/img/scan.png"/>
    </div>
</template>

<script>
  export default {
    name: 'searchTitle'
  }
</script>

<style scoped lang="scss">
  .title{
    width:100%;
    height:139px;
    background:linear-gradient(146deg,rgba(47,137,250,1) 0%,rgba(0,83,249,1) 100%);
    text-align: right;
  }
  .scan_icon{
    width:76px;
    height:30px;
    margin-top:18px;
    margin-right:18px;
  }
</style>
