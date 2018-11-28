<template>
  <div style="height:100%;">
    <div class="title_back">
      <img class="back_icon" src="../../assets/img/back_icon.png"/>
    </div>

    <div class="some_introduce">
      <p class="introduce_first">忘记密码</p>
    </div>

    <div class="login_area">

      <div class="common_input">
        <input placeholder="手机号" />
      </div>

      <div class="common_input">
        <input placeholder="短信验证码"/>
        <span :class="verificationClass" style="margin-top:3px;" @click="getVerification()" v-text="validText"></span>
      </div>

      <div class="common_input">
        <input type="password" placeholder="密码"/>
      </div>

      <div class="common_input">
        <input type="password" placeholder="确认密码"/>
      </div>

      <div class="loginBtnContainer"><span class="loginBtn btnActive">确定</span></div>

    </div>
    <div class="mask" v-if="false">
      <div class="psdChangeMask">
        <div class="close">
          <img class="close_icon" src="../../assets/img/combined_shape.png"/>
        </div>

        <div style="text-align: center;">
          <img src="../../assets/img/success.png" style="width:86px;height:86px;" />
          <p class="mask_tips">密码修改成功</p>
          <p class="goLogin">立即登录</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'forgetPassword',
    data(){
      return {
        validText:'获取验证码',
        verificationClass:'click_color'
      }
    },
    methods:{
      getVerification(){
        if(this.validText == '获取验证码'){
          let count = 60;
          this.verificationClass = 'common_gray';
          this.validText = '60s';
          let timer = setInterval(() => {
            count--;
            this.validText = count+'s';
            if(count == 0){
              this.verificationClass = 'click_color';
              this.validText = '获取验证码';
              clearInterval(timer);
            }
          },1000);
        }
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
