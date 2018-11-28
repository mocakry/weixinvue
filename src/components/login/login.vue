<template>
    <div>
      <div class="title_back">
        <img class="back_icon" src="@/assets/img/back_icon.png"/>
      </div>

      <div class="some_introduce">
        <p class="introduce_first">用户登录</p>
        <p class="introduce_second">欢迎来到&nbsp;&nbsp;凯京物流云</p>
      </div>

      <div class="login_area">

        <div class="common_input">
          <input placeholder="手机号"/>
        </div>

        <div class="common_input">
          <input type="password" placeholder="密码"/>
          <span class="common_gray">忘记密码?</span>
        </div>

        <div class="toRegister">没有账号？去&nbsp;<span class="click_color">注册</span></div>

        <div class="loginBtnContainer"><span class="loginBtn">登录</span></div>

      </div>
    </div>
</template>

<script>
  export default {
    name: 'login'
  }
</script>

<style scoped lang="scss">

</style>
