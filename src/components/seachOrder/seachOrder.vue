<template>
  <div>
    <searchTitle></searchTitle>
    <div>
      <div class="choose_type">
        <div class="choose">
          <span>单号查询</span>
          <span class="active_line"></span>
        </div>
        <div class="choose">
          <span>手机号查询</span>
          <span class="active_line"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import searchTitle from './seachCommon/searchTitle';
  export default {
    name: 'seachOrder',
    components:{
      searchTitle
    },
    mounted(){

    }
  }
</script>

<style scoped lang="scss">
  .active_line{
    display: block;
    width:60px;
    height:6px;
    background:linear-gradient(90deg,rgba(59,147,255,1) 0%,rgba(49,128,234,1) 100%);
    box-shadow:0 4px 4px 0 rgba(56,141,249,0.52);
    border-radius:2px;
  }
  .choose_type{
    overflow: hidden;
    .choose{
      float:left;
      text-align: center;
      width:100px;
    }
  }
</style>
