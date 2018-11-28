<template>
    <div>
      <div class="title_back">
        <img class="back_icon" src="@/assets/img/back_icon.png"/>
      </div>

      <div class="some_introduce">
        <p class="introduce_first">注册账号</p>
      </div>

      <div class="login_area">

        <div class="common_input" :class="inputLineColor[0]">
          <input placeholder="手机号" v-model="phoneNumber" />
        </div>

        <div class="common_input" :class="inputLineColor[1]">
          <input placeholder="短信验证码" v-model="validation"/>
          <span :class="verificationClass" style="margin-top:3px;" @click="getVerification()" v-text="validText"></span>
        </div>

        <div class="common_input" :class="inputLineColor[2]">
          <input type="password" placeholder="密码" v-model="passwordData"/>
        </div>

        <div class="common_input" :class="inputLineColor[3]">
          <input type="password" placeholder="确认密码" v-model="passwordAgain"/>
        </div>

        <div class="toRegister">已有账号?&nbsp;<span class="click_color">登录</span></div>

        <div class="loginBtnContainer"><span class="loginBtn btnActive">注册</span></div>

        <div class="mask" v-if="false">
          <div class="phoneNumberExistMask">
            <div class="close">
              <img class="close_icon" src="../../assets/img/combined_shape.png"/>
            </div>

            <div style="text-align: center;">
              <img src="../../assets/img/success.png" style="width:86px;height:86px;" />
              <p class="mask_tips">该手机号已注册</p>
              <p class="goLogin">立即登录</p>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
  export default {
    name: 'register',
    data(){
      return {
        validText:'获取验证码',
        verificationClass:'click_color',
        inputLineColor:['line_color_gray','line_color_gray','line_color_gray','line_color_gray'],
        phoneNumber:'',
        validation:'',
        passwordData:'',
        passwordAgain:''
      }
    },
    /*watch:{
      phoneNumber(newValue,oldValue){
        this.changeLineColor(newValue,oldValue,0,false);
      },
      validation(newValue,oldValue){
        this.changeLineColor(newValue,oldValue,1,false);
      },
      passwordData(newValue,oldValue){
        this.changeLineColor(newValue,oldValue,2,false);
      },
      passwordAgain(newValue,oldValue){
        this.changeLineColor(newValue,oldValue,3,false);
      }
    },*/
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
      }/*,
      changeLineColor(newValue,oldValue,index,isBlur){
        //五个参数分别代表  输入框现在的值 输入框原先的值 触发事件的input框的序号  是否是失去焦点事件 是否是得到焦点事件
        if(newValue != ''){
          this.inputLineColor[index]='line_color_blue';
        }else{
          this.inputLineColor[index]='line_color_gray';
        }
      }*/
    }
  }
</script>

<style scoped>

</style>
