<template>
  <div class="all">
    <div class="box">
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <h1>龙腾电商供应商端</h1>
      <div class="inputbox">
        <el-input
          class="username"
          v-model="formData.identity"
          autocomplete="off"
          placeholder="请输入用户名"
        >
          <template #suffix>
            <div class="suffix">
              <img src="../assets/username.png" />
            </div>
          </template>
        </el-input>
        <div style="height: 20px"></div>
        <el-input
          class="password"
          v-model="formData.identityKey"
          autocomplete="off"
          placeholder="请输入密码"
        >
          <template #suffix>
            <div class="suffix">
              <img src="../assets/password.png" />
            </div>
          </template>
        </el-input>
      </div>
      <div class="btn">
        <el-button color="#626aef" @click="login">
          <div class="denglu">登录</div>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          loginType: 'namePasswd',
          identity: '',
          identityKey: '',
        },
      };
    },
    created() {
      this.login();
    },
    methods: {
      login() {
        this.axios.post('/api/seller/login', this.formData).then(res => {
          // this.$message.success(res.data);
          var token = res.data.data.tokenData.token;
          // console.log(token, 'token');
          if (token) {
            localStorage.setItem('tokenkey', token);
            this.$router.push('/homepage');
          }
        });
      },
    },
  };
</script>

<style lang="less" scoped>
  .all {
    width: 100%;
    height: 100vh;
    min-width: 1000px;
    // background-color: rgba(24, 145, 255, 1);
    background-image: url(../assets/left_bg.svg);
    z-index: -10;
    zoom: 1;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center center;

    .box {
      width: 480px;
      height: 600px;
      background-color: rgba(255, 255, 255, 0.2);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border-radius: 8px;
    }

    .logo {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translate(-50%, -50%);

      img {
        width: 100px;
        height: 100px;
      }
    }

    h1 {
      color: #fff;
      font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .inputbox {
      position: absolute;
      top: 42%;
      left: 10%;
      right: 10%;

      .username {
        .suffix {
          float: left;
          position: absolute;
          left: 5px;
          top: 10px;

          img {
            width: 18px;
            height: 18px;
          }
        }
      }

      .password {
        .suffix {
          float: left;
          position: absolute;
          left: 5px;
          top: 13px;

          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }

    .btn {
      position: absolute;
      top: 75%;
      left: 10%;
      right: 10%;

      .el-button {
        width: 385px;
        height: 50px;
        line-height: 50px;

        .denglu {
          width: 100%;
          height: 100%;
          font-size: 20px;
          font-weight: 700;
        }
      }
    }
  }

  :deep(.el-input__wrapper) {
    .el-input__inner {
      padding-left: 28px !important;
      height: 45px;
    }
  }
</style>
