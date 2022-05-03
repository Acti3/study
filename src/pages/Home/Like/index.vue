<template>
    <div class="like-container">
        <div class="title">
            <h3>猜你喜欢</h3>
            <a href="#" class="change">换一换</a>
        </div>
        <div class="bd">
            <ul class="favourate">
                <li>
                    <img src="./images/like_01.png" alt="">
                    <div class="text">
                        <p>但是犯得上犯得上发射点反对</p>
                        <h3>￥222</h3>
                    </div>
                </li>
                <li>
                    <img src="./images/like_02.png" alt="">
                    <div class="text">
                        <p>但是犯得上犯得上发射点反对</p>
                        <h3>￥222</h3>
                    </div>
                </li>
                <li>
                    <img src="./images/like_03.png" alt="">
                    <div class="text">
                        <p>但是犯得上犯得上发射点反对</p>
                        <h3>￥222</h3>
                    </div>
                </li>
                <li>
                    <img src="./images/like_02.png" alt="">
                    <div class="text">
                        <p>但是犯得上犯得上发射点反对</p>
                        <h3>￥222</h3>
                    </div>
                </li>
                <li>
                    <img src="./images/like_01.png" alt="">
                    <div class="text">
                        <p>但是犯得上犯得上发射点反对</p>
                        <h3>￥222</h3>
                    </div>
                </li>
                <li>
                    <img src="./images/like_01.png" alt="">
                    <div class="text">
                        <p>但是犯得上犯得上发射点反对</p>
                        <h3>￥222</h3>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'LikeName'
}
</script>

<style lang="less" scoped>
    .like-container{
        width: 1200px;
        margin: 0 auto;
        margin-top: 15px;

        .title{
            overflow: hidden;
            h3{
                float: left;
                font-size: 20px;
                line-height: 30px;
            }
            .change{
                float: right;
                background-image: url(./images/icons.png);
                width: 66px;
                height: 25px;
                background-position: 182px -104px;
                line-height: 30px;
                font-size: 12px;
                font-weight: 400;
                color: #666;
                text-decoration: none;
           }
        }
        .bd{
            .favourate{
                border: 1px solid #e4e4e4;
                overflow: hidden;
                padding:0 10px;
                box-sizing: border-box;
                display: flex;

                li{
                    width: 16.667%;
                    height: 250px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    // position: relative;
                    cursor: pointer;
                    background-color: #fff;
                    margin: 0 -1px;
                    align-items: center;
                    img{
                        width: 142px;
                        height: 142px;
                        transition: all 400ms;

                        &:hover{
                            opacity: 0.8;
                            transform: scale(1.1);
                        }
                    }
                    .text{
                        padding: 0;
                        width: 142px;
                        border-right: 1px solid #e4e4e4;
                        p{
                            margin: 5px 0;
                        }
                        h3{
                            color:#df3033;
                            font-size: 20px;
                            line-height: 30px;
                            margin: 9px 0;
                            font-weight: 700;
                        }
                   }
                }
            }
        }
    }
</style>