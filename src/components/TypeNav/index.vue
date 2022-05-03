<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="isShow">
            <div class="all-sort" @click="goSearch">
              <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId">
                <h3 @mouseenter="changeIndex(index)" :class="{cur:currentIndex==index}">
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                  >{{c1.categoryName}}</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                        >{{c2.categoryName}}</a>
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                          >{{c3.categoryName}}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="#">服装城</a>
        <a href="#">美妆馆</a>
        <a href="#">尚品汇超市</a>
        <a href="#">全球购</a>
        <a href="#">闪购</a>
        <a href="#">有趣</a>
        <a href="#">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
// import {debounce} from '@/components/common/utils'
import throttle from "lodash/throttle";
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      isShow: true
    };
  },
  methods: {
    changeIndex: throttle(function(index) {
      this.currentIndex = index;
    }, 50),
    // changeIndex(index){
    //   this.currentIndex = index
    // },
    leaveIndex() {
      this.currentIndex = -1;
      //search组件
      if (this.$route.path != "/home") {
        this.isShow = false;
      }
    },
    //search组件鼠标移入显示
    enterShow() {
      if (this.$route.path != "/home") {
        this.isShow = true;
      }
    },
    goSearch(event) {
      //时间委派+编程式导航
      //把子节点添加自定义属性data-categoryName，其余的子节点没有
      let Element = event.target;
      //节点有一个属性dataset属性，可以获取节点的自定义属性和属性值
      // console.log(Element.dataset)
      let {
        categoryname,
        category1id,
        category2id,
        category3id
      } = Element.dataset;
      //如果有categoryname属性就是a标签
      if (categoryname) {
        //整理路由跳转参数
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        location.params = this.$route.params
        //整理完参数
        location.query = query;
        //路由跳转
        this.$router.push(location);
      }
    }
  },
  mounted() {
    
    //search组件默认不显示
    if (this.$route.path != "/home") {
      this.isShow = false;
    }
  },
  computed: {
    ...mapState({
      //右侧需要是一个函数，当使用这个计算属性时，右侧函数就会执行一次
      //注入一个参数state，其即为大仓库的数据
      categoryList: state => state.home.categoryList
    })
  }
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      color: #fff;
      font-size: 14px;
      line-height: 45px;
      text-align: center;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
        margin: 0 22px;
      }
    }
    .sort {
      position: absolute;
      top: 45px;
      left: 0;
      width: 210px;
      height: 461px;
      background-color: #fafafa;
      position: absolute;
      z-index: 999;

      .all-sort {
        .item {
          .cur {
            background-color: skyblue;
          }
          // &:hover{
          //   background-color: red;
          // }
          h3 {
            line-height: 30px;
            padding: 0 20px;
            font-size: 14px;
            font-weight: 400;
            margin: 0;
            overflow: hidden;
            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            // _height: 200px;
            left: 210px;
            background-color: #f7f7f7;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;
                + dl {
                  border-top: 1px solid #eee;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }
                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;
                  line-height: 22px;
                  em {
                    float: left;
                    //height: 14px;
                    // line-height: 14px;
                    padding: 0 8px;
                    border-left: 1px solid #ccc;
                    // margin-top: 5px;
                  }
                }
              }
            }
          }
          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
    //动画样式
    .sort-enter {
      height: 0;
      // transform: rotate(0deg);
    }
    .sort-enter-to {
      height: 461px;
      // transform: rotate(30deg);
    }
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>