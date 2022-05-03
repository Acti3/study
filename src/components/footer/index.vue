<template>
    <div class="footer">
        <div class="footer-container">
            <div class="foot-list">
                <div class="foot-item">
                    <h4>购物指南</h4>
                    <ul>
                        <li>购物流程</li>
                        <li>会员介绍</li>
                        <li>生活旅游/团购</li>
                        <li>常见问题</li>
                        <li>购物指南</li>
                    </ul>
                </div>
                <div class="foot-item">
                    <h4>配送方式</h4>
                    <ul>
                        <li>上门自提</li>
                        <li>211限时送达</li>
                        <li>配送服务查询</li>
                        <li>配送费收费标准</li>
                        <li>海外配送</li>
                    </ul>
                </div>
                <div class="foot-item">
                    <h4>支付方式</h4>
                    <ul>
                        <li>货到付款</li>
                        <li>在线支付</li>
                        <li>分期付款</li>
                        <li>邮局汇款</li>
                        <li>公司转账</li>
                    </ul>
                </div>
                <div class="foot-item">
                    <h4>售后服务</h4>
                    <ul>
                        <li>售后保障</li>
                        <li>价格保护</li>
                        <li>退款说明</li>
                        <li>返修/退换货</li>
                        <li>取消订单</li>
                    </ul>
                </div>
                <div class="foot-item">
                    <h4>特色服务</h4>
                    <ul>
                        <li>夺宝岛</li>
                        <li>延保服务</li>
                        <li>生活旅游</li>
                        <li>尚品汇E卡</li>
                        <li>尚品汇通信</li>
                    </ul>
                </div>
                <div class="foot-item">
                    <h4>帮助服务</h4>
                    <img src="./images/foot.png" alt="">
                </div>
            </div>
            <div class="copyright">
            <ul>
                <li>关于我们</li>
                <li>联系我们</li>
                <li>关于我们</li>
                <li>商家入驻</li>
                <li>营销中心</li>
                <li>友情链接</li>
                <li>关于我们</li>
                <li>营销中心</li>
                <li>友情链接</li>
                <li>关于我们</li>
            </ul>
            <p>地址:  湖北省武汉市武昌首页学院西六四二四</p>
            <p>鄂API备1243948402号</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'FooterName'
}
</script>

<style lang="less" scoped>
    .footer{
        background-color:#eaeaea;

        .footer-container{
            width: 1200px;
            margin: 0 auto;
            padding: 0 15px;

            .foot-list{
                overflow: hidden;
                padding: 20px;
                border-top: 1px solid #e4e1e1;
                border-bottom: 1px solid #e4e1e1;
                padding-left: 40px;
                .foot-item{
                    float: left;
                    width: 16.6666667%;

                    h4{
                        font-size: 14px;
                    }
                    li{
                        line-height: 18px;
                    }
                    img{
                        width: 121px;
                    }
                }
            }
            .copyright{
                padding: 20px;  
                text-align: center;
                li{
                    display: inline;
                    padding: 0 15px;
                    +li{
                        border-left: 1px solid #666;
                    }
                }
                p{
                    margin-top: 10px;
                }
            }
        }
    }
</style>