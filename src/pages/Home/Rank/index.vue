<template>
    <div class="rank">
        <div class="tab">
            <div class="tab-tit clearfix">
                <a href="#" class="on">
                        <i></i>
                    <p class="text">热卖排行</p>
                </a>
                <a href="#">
                        <i></i>
                    <p class="text">特价排行</p>
                </a>
                <a href="#">
                        <i></i>
                    <p class="text">新品排行</p>
                </a>
            </div>
        </div>
        <div class="content">
            <div class="img-item">
                <p class="tab-pic">
                    <a href="#">
                        <img src="./images/1.jpg" alt="">
                    </a>
                </p>
                <div class="tab-info">
                    <div class="title">
                        <a href="#">斯达康斯达康上的讲话flak的收费的数据库和的空间发哈空手道解放和当时看了今安徽</a>
                    </div>
                    <p class="price">定金：￥100.00</p>
                </div>
            </div>
            <div class="img-item">
                <p class="tab-pic">
                    <a href="#">
                        <img src="./images/1.jpg" alt="">
                    </a>
                </p>
                <div class="tab-info">
                    <div class="title">
                        <a href="#">斯达康斯达康上的讲话flak的收费的数据库和的空间发哈空手道解放和当时看了今安徽</a>
                    </div>
                    <p class="price">定金：￥100.00</p>
                </div>
            </div>
            <div class="img-item">
                <p class="tab-pic">
                    <a href="#">
                        <img src="./images/1.jpg" alt="">
                    </a>
                </p>
                <div class="tab-info">
                    <div class="title">
                        <a href="#">斯达康斯达康上的讲话flak的收费的数据库和的空间发哈空手道解放和当时看了今安徽</a>
                    </div>
                    <p class="price">定金：￥100.00</p>
                </div>
            </div>
            <div class="img-item">
                <p class="tab-pic">
                    <a href="#">
                        <img src="./images/1.jpg" alt="">
                    </a>
                </p>
                <div class="tab-info">
                    <div class="title">
                        <a href="#">斯达康斯达康上的讲话flak的收费的数据库和的空间发哈空手道解放和当时看了今安徽</a>
                    </div>
                    <p class="price">定金：￥100.00</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'RankName'
}
</script>

<style lang="less" scoped>
    .rank{
        width: 1200px;
        margin: 0 auto;

        .tab{
            margin: 0 auto;
            overflow: hidden;
            width: 312px;

            .tab-tit{
                text-align: center;

                a{
                    display: block;
                    font-size: 16px;
                    color: #999;
                    float: left;
                    padding: 0 18px;
                    margin: 5px 0 0 0;
                    text-decoration: none;
                    i{
                        width: 35px;
                        height: 35px;
                        display: block;
                        background-image: url(./images/bg0.png);
                        margin-left: 10px;
                    }
                    .text{
                        line-height: 28px;
                    }
                }
                .on{
                    color: #e60012;

                    i{
                        background-position: -35px 0;
                    }
                }
            }
        }
        .content{
            overflow: hidden;
            padding: 10px;

            .img-item{
                border: 1px solid #e1251b;
                width: 269px;
                float: left;
                margin: 0 12px 10px;
                overflow: hidden;

                .tab-pic{
                    width: 230px;
                    height: 210px;
                    overflow: hidden;
                    text-align: center;
                    margin: 5px auto 18px;

                    img{
                        width: 200px;
                        height: 200px;
                    }
                }
                .tab-info{
                    background-color: #fafafa;
                    .title{
                        height: 50px;
                        line-height: 28px;
                        overflow: hidden;
                        margin: 0 auto;
                        padding-left: 10px;

                        a{
                            text-decoration: none;
                            color:#333;
                        }
                    }
                    .price{
                        font-size: 20px;
                        color: #e1251b;
                        height: 35px;
                        padding-left: 10px;
                        display: block;
                        line-height: 24px;
                        margin: 10px auto 0;
                    }
                }
            }
        }
    }
</style>