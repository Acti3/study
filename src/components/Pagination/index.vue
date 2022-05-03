<template>
  <div class="page">
    <ul>
      <li :class="{disabled:pageNo == 1}" @click="$emit('getPageNo',pageNo-1)">
        <a>«上一页</a>
      </li>
      <li
        :class="{active:pageNo==1}"
        v-if="startNumAndEndNum.start > 1"
        @click="$emit('getPageNo',1)"
      >
        <a>1</a>
      </li>
      <li class="dotted" v-if="startNumAndEndNum.start >2">
        <span>...</span>
      </li>

      <li
        :class="{active:pageNo==item}"
        v-for="(item, index) in startNumAndEndNum.end"
        :key="index"
        v-show="item >=startNumAndEndNum.start "
        @click="$emit('getPageNo',item)"
      >
        <a>{{item}}</a>
      </li>

      <li class="dotted" v-if="startNumAndEndNum.end < totalPage-1">
        <span>...</span>
      </li>
      <li
        :class="{active:pageNo==totalPage}"
        v-if="startNumAndEndNum.end < totalPage"
        @click="$emit('getPageNo',totalPage)"
      >
        <a>{{totalPage}}</a>
      </li>
      <li class="next" @click="$emit('getPageNo',pageNo+1)">
        <a>下一页»</a>
      </li>
      <li>
        <a>共{{total}}条</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PaginationName",
  //pageNo:当前页码
  //pageSize：每页展示几条
  //total：总共多少条
  //continues：分页连续页码个数
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    //计算连续页码起始页码和结束页码
    startNumAndEndNum() {
      const { continues, totalPage, pageNo } = this;
      let start = 0,
        end = 0;
      //不正常现象 连续页码数大于总页数
      if (continues > totalPage) {
        start = 1;
        end = this.totalPage;
      } else {
        //正常现象，
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        if (start < 1) {
          start = 1;
          end = continues;
        }
        if (end > totalPage) {
          end = totalPage;
          start = totalPage - continues + 1;
        }
      }
      return { start, end };
    }
  }
};
</script>

<style lang="less" scoped>
.page {
  text-align: center;
  li {
    display: inline-block;
    margin:  5px;
    a {
      float: left;
      text-decoration: none;
      background-color: #f4f4f5;
      border: 1px solid #e0e9ee;
      font-size: 14px;
      padding: 9px 18px;
      color: #333;
      cursor: pointer;
      border-radius: 5px;
    }
    &.active {
      a {
        background-color: skyblue;
        color: #fff;
        cursor: default;
      }
    }
    &.disabled {
      a {
        color: #999;
        cursor: default;
      }
    }
    &.dotted {
      span {
        margin-left: -1px;
        position: relative;
        float: left;
        line-height: 18px;
        text-decoration: none;
        background-color: #fff;
        font-size: 14px;
        border: 0;
        padding: 9px 18px;
        color: #333;
      }
    }
  }
}
</style>