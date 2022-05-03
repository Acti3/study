<template>
   <div class="brand">
      <ul class="brand-list">
        <li class="brand-item">
          <img src="./images/brand_21.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_03.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_05.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_07.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_09.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_11.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_13.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_15.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_17.png" />
        </li>
        <li class="brand-item">
          <img src="./images/brand_19.png" />
        </li>
      </ul>
    </div>
</template>

<script>
export default {
    name:'BrandName'
}
</script>

<style lang="less" scoped>
  .brand{
    width: 1200px;
    margin: 10px auto;

    .brand-list{
      overflow: hidden;
      padding: 15px 0;
      background-color: #f7f7f7;
      line-height: 18px;
      .brand-item{
        float: left;
        width: 120px;
        height: 37px;

        img{
          border-left: 1px dotted  #ccc;
        }
        &:first-child{
          img{
            border-left: 0;
          }
        }
      }
    }
  }
</style>