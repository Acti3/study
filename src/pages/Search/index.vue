<template>
  <div>
    <TypeNav />
    <div class="main">
      <!-- 面包屑 -->
      <div class="bread">
        <ul class="fl sui-breadcrumb">
          <li>
            <a href="#">全部结果</a>
          </li>
        </ul>
        <ul class="fl sui-tag">
          <!-- 分类的面包屑 -->
          <li class="with-x" v-if="searchParams.categoryName">
            {{searchParams.categoryName}}
            <i @click="removeCategoryName">×</i>
            <!-- 关键字的面包屑 -->
          </li>
          <li class="with-x" v-if="searchParams.keyword">
            {{searchParams.keyword}}
            <i @click="removekeyword">×</i>
          </li>
          <!--品牌的面包屑 -->
          <li class="with-x" v-if="searchParams.trademark">
            {{searchParams.trademark.split(":")[1]}}
            <i @click="removetrademark">×</i>
          </li>
          <!-- 属性的面包屑 -->
          <li class="with-x" v-for="(item, index) in searchParams.props" :key="index">
            {{item.split(":")[1]}}
            <i @click="removeprops(index)">×</i>
          </li>
        </ul>
      </div>
      <SearchSelector @trademarkInfo="trademarkInfo" @attrInfo="attrInfo" />
      <div class="details clearfix">
        <div class="sui-navbar">
          <div class="navbar-inner filter">
            <ul class="sui-nav">
              <li :class="{active:isOne}" @click="changeOrder(1)">
                <a>
                  综合
                  <span
                    v-show="isOne"
                    class="iconfont"
                    :class="{'icon-down':isDesc,'icon-upload':isAsc}"
                  ></span>
                </a>
              </li>
              <li :class="{active:isTwo}" @click="changeOrder(2)">
                <a>
                  价格
                  <span
                    v-show="isTwo"
                    class="iconfont"
                    :class="{'icon-down':isDesc,'icon-upload':isAsc}"
                  ></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-list">
          <ul class="yui3-g">
            <li class="yui3-u-1-5" v-for="item in goodsList" :key="item.id">
              <div class="list-wrap">
                <div class="p-img">
                  <router-link :to="`/detail/${item.id}`">
                     <img :src="item.defaultImg" alt />
                  </router-link>
                </div>
                <div class="price">
                  <strong>
                    <em>￥</em>
                    <i>{{item.price}}</i>
                  </strong>
                </div>
                <div class="attr">
                  <a
                    target="_blank"
                    href="item.html"
                    title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                  >{{item.title}}</a>
                </div>

                <div class="commit">
                  <i class="command">
                    已有
                    <span>2000</span>人评价
                  </i>
                </div>
                <div class="operate">
                  <a
                    href="success-cart.html"
                    target="_blank"
                    class="sui-btn btn-bordered btn-danger"
                  >加入购物车</a>
                  <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <Pagination
          :pageNo="searchParams.pageNo"
          :pageSize="searchParams.pageSize"
          :total="total"
          :continues="5"
          @getPageNo="getPageNo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import SearchSelector from "./SearchSelector";
import Pagination from "@/components/Pagination";
export default {
  name: "SearchName",
  components: {
    SearchSelector,
    Pagination
  },
  data() {
    return {
      searchParams: {
        //产品相应id
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",
        //关键字
        keyword: "",
        //排序：默认降序
        order: "1:desc",
        //第几页
        pageNo: 1,
        //每一页展示条数
        pageSize: 3,
        //平台属性的操作
        props: [],
        //品牌
        trademark: ""
      }
    };
  },
  beforeMount() {
    //再发请求之钱，把需要的数据进行整理
    Object.assign(this.searchParams, this.$route.query, this.$route.params);
  },
  mounted() {
    this.getData();
  },
  computed: {
    ...mapGetters(["goodsList"]),
    //综合
    isOne() {
      return this.searchParams.order.indexOf("1") != -1;
    },
    //价格
    isTwo() {
      return this.searchParams.order.indexOf("2") != -1;
    },
    //升序
    isAsc() {
      return this.searchParams.order.indexOf("asc") != -1;
    },
    //降序
    isDesc() {
      return this.searchParams.order.indexOf("desc") != -1;
    },
    ...mapState({
      total: state => state.search.searchList.total
    })
  },
  methods: {
    getData() {
      this.$store.dispatch("searchList", this.searchParams);
    },
    //删除分类的名字
    removeCategoryName() {
      this.searchParams.categoryName = undefined;
      this.searchParams.category1Id = undefined;
      this.searchParams.category2Id = undefined;
      this.searchParams.category3Id = undefined;
      this.getData();
      if (this.$route.params) {
        this.$router.push({ name: "search", params: this.$route.params });
      }
    },
    //删除关键字
    removekeyword() {
      //给服务器
      this.searchParams.keyword = undefined;
      //再次请求
      this.getData();
      //通知兄弟组件清空关键字
      this.$bus.$emit("clear");
      //进行路由跳转
      if (this.$route.query) {
        this.$router.push({ name: "search", query: this.$route.query });
      }
    },
    //删除品牌信息
    removetrademark() {
      this.searchParams.trademark = undefined;
      this.getData();
    },
    //自定义事件回调
    trademarkInfo(item) {
      this.searchParams.trademark = `${item.tmId}:${item.tmName}`;
      // console.log(this.searchParams.trademark)
      this.getData();
    },
    //接受属性参数，自定义事件
    attrInfo(item, a) {
      // console.log(item,a)
      //["属性ID：属性值：属性名"]
      //参数整理好
      let props = `${item.attrId}:${a}:${item.attrName}`;
      if (this.searchParams.props.indexOf(props) == -1)
        this.searchParams.props.push(props);
      this.getData();
    },
    //删除属性信息
    removeprops(index) {
      this.searchParams.props.splice(index, 1);
    },
    changeOrder(flag) {
      //flag形参，它是一个标记，代表用户点击的是综合（1），还是价格（2）
      let originOrder = this.searchParams.order;
      //获取开始状态
      let originFlag = originOrder.split(":")[0];
      let originSort = originOrder.split(":")[1];
      //准备新的order
      let newOrder = "";
      if (flag == originFlag) {
        newOrder = `${originFlag}:${originSort == "desc" ? "asc" : "desc"}`;
      } else {
        newOrder = `${flag}:${"desc"}`;
      }
      //将新的order赋值给order
      this.searchParams.order = newOrder;
      //重新发送请求
      this.getData();
    },
    //自定义事件 获取子组件点击的页面
    getPageNo(pageNo){
      // console.log(pageNo)
      this.searchParams.pageNo = pageNo
      this.getData()
    }
  },
  //数据监听
  watch: {
    $route() {
      Object.assign(this.searchParams, this.$route.query, this.$route.params);
      //再次发起请求
      this.getData();
      //每一次请求完毕，应该把相应的1，2，3级分类的id置空，让他接受下一次的1，2.3级分类的id
      (this.searchParams.category1Id = ""),
        (this.searchParams.category2Id = ""),
        (this.searchParams.category3Id = "");
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  width: 1200px;
  margin: 10px auto;

  .bread {
    margin-bottom: 5px;
    overflow: hidden;

    .sui-breadcrumb {
      padding: 3px 15px;
      margin: 0;
      font-weight: 400;
      border-radius: 3px;
      float: left;
      li {
        display: inline-block;
        line-height: 18px;
        a {
          color: #666;
          text-decoration: none;

          &:hover {
            color: #4cb9fc;
          }
        }
      }
    }
    .sui-tag {
      margin-top: -5px;
      float: left;
      font-size: 0;
      line-height: 0;
      padding: 5px 0;
      margin-bottom: 18px;

      .with-x {
        font-size: 12px;
        margin: 0 5px 5px 0;
        display: inline-block;
        overflow: hidden;
        background-color: #f7f7f7;
        color: #000;
        padding: 0 7px;
        height: 20px;
        line-height: 20px;
        border: 1px solid #dedede;
        white-space: nowrap;
        transition: color 400ms;
        cursor: pointer;

        i {
          margin-left: 10px;
          cursor: pointer;
          font: 400 14px tahoma;
          display: inline-block;
          height: 100%;
          vertical-align: middle;
        }
        &:hover {
          color: #28a3ef;
        }
      }
    }
  }
  .details {
    margin-bottom: 5px;
    .sui-navbar {
      overflow: hidden;
      margin-bottom: 0;

      .filter {
        min-height: 40px;
        padding-right: 20px;
        background-color: #fbfbfb;
        border: 1px solid #e2e2e2;
        padding-left: 0;
        border-radius: 0;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

        .sui-nav {
          position: relative;
          left: 0;
          display: block;
          float: left;
          margin: 0 10px 0 0;

          li {
            float: left;
            line-height: 18px;
            a {
              display: block;
              cursor: pointer;
              padding: 11px 15px;
              color: #777;
              text-decoration: none;
            }
            &.active {
              a {
                background-color: #e1251b;
                color: #fff;
              }
            }
          }
        }
      }
    }
    .goods-list {
      margin: 20px 0;
      ul {
        display: flex;
        flex-wrap: wrap;

        li {
          height: 100%;
          width: 20%;
          margin-top: 10px;
          line-height: 28px;

          .list-wrap {
            .p-img {
              padding-left: 15px;
              width: 215px;
              height: 255px;
              a {
                color: #666;
                img {
                  // min-width: 100%;
                  width: 100%;
                  height: 100%;
                  // height: auto;
                  vertical-align: middle;
                }
              }
            }
            .price {
              padding-left: 15px;
              font-style: 18px;
              color: #c81623;

              strong {
                font-weight: 700;
                i {
                  margin-left: -5px;
                }
              }
            }
            .attr {
              padding-left: 15px;
              width: 85%;
              overflow: hidden;
              margin-bottom: 8px;
              cursor: pointer;
              min-height: 38px;
              line-height: 1.8;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              a {
                color: #333;
                text-decoration: none;
              }
            }
            .commit {
              padding-left: 15px;
              height: 22px;
              font-style: 13px;
              color: #a7a7a7;

              span {
                font-weight: 700;
                color: #646fb0;
              }
            }
            .operate {
              padding: 12px 15px;

              .sui-btn {
                display: inline-block;
                padding: 2px 14px;
                box-sizing: border-box;
                margin-bottom: 0;
                font-style: 12px;
                line-height: 18px;
                text-align: center;
                vertical-align: middle;
                cursor: pointer;
                border-radius: 0;
                background-color: transparent;
                margin-right: 15px;
                min-width: 85px;
                background-color: transparent;
                border: 1px solid #8c8c8c;
                color: #8c8c8c;
                &:hover {
                  border: 1px solid #666;
                  color: #fff !important;
                  background-color: #666;
                  text-decoration: none;
                }
              }
              .btn-danger {
                border: 1px solid #e1251b;
                color: #e1251b;

                &:hover {
                  border: 1px solid #e1251b;
                  background-color: #e1251b;
                  color: white !important;
                  text-decoration: none;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>