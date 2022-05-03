<template>
  <div class="header">
    <div class="top">
      <div class="container">
        <div class="left">
          <p>尚品汇欢迎您！</p>
          <p v-if="!isShow">
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
          <p>
            <a>{{isShow}}</a>
            <a @click="logout">退出登录</a>
          </p>
        </div>
        <div class="right">
          <a href="#">我的订单</a>
          <a href="#">我的购物车</a>
          <a href="#">我的尚品汇</a>
          <a href="#">尚品汇会员</a>
          <a href="#">企业采购</a>
          <a href="#">关注尚品汇</a>
          <a href="#">合作招商</a>
          <a href="#">商家后台</a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="lodoArea">
        <a href="#" title="尚品汇" target="_blank">
          <img src="./images/logo.png" alt />
        </a>
      </div>
      <div class="searchArea">
        <form class="searchForm">
          <input type="text" v-model="keyword" />
          <button @click="goSearch">搜索</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderName",
  data() {
    return {
      keyword: ""
    };
  },
  computed:{
    isShow(){
      return this.$store.state.user.userInfo.name
    }
  },
  methods: {
    goSearch() {
      let location = {
        name: "search",
        params: { keyword: this.keyword || undefined },
      };
      location.query = this.$route.query;
      this.$router.push(location);
    },
    logout(){
      this.$store.dispatch('userLogout')
    }
  },
  mounted(){
    this.$bus.$on("clear",()=>{
      this.keyword = "";
    })
  }
}
</script>

<style lang="less" scoped>
.header {
  .top {
    height: 30px;
    background-color: #eaeaea;
    line-height: 30px;

    .container {
      width: 1220px;
      margin: 0 auto;
      overflow: hidden;

      .left {
        float: left;

        p {
          float: left;
          margin-right: 10px;
          span {
            margin-right: 5px;
          }
          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }
      .right {
        float: right;

        a {
          padding: 0 10px;
          // 第一个a没左边框
          + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }
  .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .lodoArea {
      float: left;

      img {
        width: 175px;
        margin: 25px 45px;
      }
    }
    .searchArea {
      overflow: hidden;
      float: right;
      margin-top: 35px;
      .searchForm input {
        width: 490px;
        height: 32px;
        border: 2px solid #ea4a36;
        box-sizing: border-box;
        padding: 0 4px;
        float: left;
      }
      .searchForm input:focus {
        outline: none;
      }
      .searchForm button {
        width: 68px;
        height: 32px;
        border: none;
        background-color: #ea4a36;
        color: #fff;
        cursor: pointer;
        float: left;
      }
    }
  }
}
</style>