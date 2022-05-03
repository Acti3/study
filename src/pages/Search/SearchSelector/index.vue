<template>
  <div class="clearfix selector">
    <div class="type-wrap logo">
      <div class="fl key brand">品牌</div>
      <div class="value logos">
        <ul class="logo-list">
          <li v-for="item in trademarkList" :key="item.tmId" @click="trademarkHandler(item)">{{item.tmName}}</li>
        </ul>
      </div>
      <div class="ext">
        <a href="javascript:void(0);" class="sui-btn">多选</a>
        <a href="javascript:void(0);">更多</a>
      </div>
    </div>
    <div class="type-wrap" v-for="item in attrsList" :key="item.attrId">
      <div class="fl key">{{item.attrName}}</div>
      <div class="fl value">
        <ul class="type-list">
          <li v-for="(a, index) in item.attrValueList" :key="index" @click="attrClick(item,a)"><a>{{a}}</a> </li>
        </ul>
      </div>
      <div class="fl ext"></div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "SearchSelector",
  computed:{
    ...mapGetters(['trademarkList','attrsList'])
  },
  methods: {
    trademarkHandler(item){
    this.$emit('trademarkInfo',item)
  },
  attrClick(item,a){
    this.$emit('attrInfo',item,a)
  }
  },
};
</script>

<style lang="less" scoped>
    .selector{
        border: 1px solid #ddd;
        margin-bottom: 5px ;
        overflow: hidden;

        .logo{
            border-top: 0;
            margin: 0;
            position: relative;
            overflow: hidden;
            .key{
                padding-bottom: 87px !important;
            }
        }
        .type-wrap{
            border-top: 1px solid #ddd;
            overflow: hidden;
            margin: 0;
            position: relative;
            .key{
                width: 100px;
                background-color: #f1f1f1;
                float: left;
                text-align: right;
                padding: 10px 10px 0 15px ;
                line-height: 26px;
            }
            .value{
                overflow: hidden;
                padding: 10px 0 0 15px;
                color: #333;
                margin-left:120px;
                padding-right: 90px;

                .logo-list{
                    li{
                        float: left;
                        width: 105px;
                        height: 52px;
                        line-height: 52px;
                        text-align: center;
                        overflow: hidden;
                        font-weight: 700;
                        color: #e1251b;
                        font-style: italic;
                        font-size: 14px;
                        border: 1px solid #e4e4e4;
                        margin: -1px -1px 0 0;
                        white-space: nowrap;
                        text-overflow: ellipsis;

                        img{
                            min-width: 100%;
                            vertical-align: middle;
                        }
                    }
                }
                .type-list{
                    li{
                        float: left;
                        display: block;
                        margin-right: 30px;
                        line-height: 26px;

                        a{
                            text-decoration: none;
                            color: #666;
                        }
                    }
                }
            }
            .ext{
                position: absolute;
                top: 10px;
                right: 10px;

                .sui-btn{
                    display: inline-block;
                    box-sizing: border-box;
                    margin-bottom: 0;
                    font-style: 12px;
                    line-height: 18px;
                    text-align: center;
                    vertical-align: middle;
                    cursor: pointer;
                    padding: 0 10px;
                    background-color: #fff;
                    border: 1px solid #d5d5d5;
                }
                a{
                    color: #666;
                }
            }
        }
    }
</style>