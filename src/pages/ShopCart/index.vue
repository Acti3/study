<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th1">全部</div>
      <div class="cart-th2">商品</div>
      <div class="cart-th3">单价（元）</div>
      <div class="cart-th4">数量</div>
      <div class="cart-th5">小计（元）</div>
      <div class="cart-th6">操作</div>
    </div>
    <div class="cart-body">
      <ul class="cart-list">
        <li class="list-con1">
          <input type="checkbox" :checked="info.isSale==1" />
        </li>
        <li class="list-con2">
          <img :src="info.skuDefaultImg" alt />
          <div class="item-msg">{{info.skuName}}</div>
        </li>
        <li class="list-con3">
          <span>{{info.price}}.00</span>
        </li>
        <li class="list-con4">
          <a href="javascript:void(0)" class="mins">-</a>
          <input autocomplete="off" type="text" :value="skuNum" minnum="1" class="itxt" />
          <a href="javascript:void(0)" class="plus">+</a>
        </li>
        <li class="list-con5">
          <span>{{skuNum * info.price}}</span>
        </li>
        <li class="list-con6">
          <a href="#none" class="sindelet">删除</a>
          <br />
          <a href="#none">移到收藏</a>
        </li>
      </ul>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input type="checkbox" class="chooseAll" :checked="isCheckAll" />
        <span>全选</span>
      </div>
      <div class="option">
        <a href="#none">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择
          <span>0</span>件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{totalPrice}}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" href="###" target="_blank">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCart",
  data() {
    return {
      info: {},
      skuNum: 2,
    };
  },
  computed: {
    //计算总价
    totalPrice() {
      let sum = 0;
      sum = this.info.price * this.skuNum;
      return sum;
    },
    isCheckAll() {
      let isAll = true;
      if (this.info.isSale == 1) {
        isAll = true;
      } else {
        isAll = false;
      }
      return isAll;
    }
  },
  mounted() {
    // this.getData(),
    this.info = JSON.parse(sessionStorage.getItem("SKUINFO"));
    console.log(this.info);
  }
  // methods: {
  //   getData(){
  //     this.$store.dispatch('getCartList')
  //   }
  // },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }
  .cart-main {
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    padding: 10px;
    overflow: hidden;

    & > div {
      float: left;
    }
    .cart-th1 {
      width: 25%;
    }
    .cart-th2 {
      width: 25%;
    }
    .cart-th3,
    .cart-th4,
    .cart-th5,
    .cart-th6 {
      width: 12.5%;
    }
  }
  .cart-body {
    margin: 15px 0;
    border: 1px solid #ddd;

    .cart-list {
      padding: 10px;
      border-bottom: 1px solid #ddd;
      overflow: hidden;

      & > li {
        float: left;
      }
      .list-con1 {
        width: 15%;
      }
      .list-con2 {
        width: 35%;
        img {
          width: 82px;
          height: 82px;
          float: left;
        }
        .item-msg {
          float: left;
          width: 150px;
          margin: 0 10px;
        }
      }
      .list-con3 {
        width: 10%;
      }
      .list-con4 {
        width: 17%;
        .mins {
          border: 1px solid #ddd;
          border-left: 0;
          padding: 8px;
          width: 6px;
          color: #666;
          float: left;
          text-align: center;
        }
        input {
          border: 1px solid #ddd;
          width: 40px;
          height: 33px;
          float: left;
          text-align: center;
          font-size: 14px;
        }
        .plus {
          border: 1px solid #ddd;
          border-left: 0;
          float: left;
          color: #666;
          width: 6px;
          text-align: center;
          padding: 8px;
        }
      }
      .list-con5 {
        width: 10%;
      }
      .list-con6 {
        width: 13%;
        a {
          color: #666;
        }
      }
    }
  }
  .cart-tool {
    border: 1px solid #ddd;
    overflow: hidden;
    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }
      input {
        vertical-align: middle;
      }
    }
    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }
    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>