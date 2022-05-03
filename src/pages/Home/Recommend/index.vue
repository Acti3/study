<template>
    <div class="today-recommend">
            <ul class="recommend">
                <li class="clock">
                    <div class="time">
                        <img src="./images/clock.png" alt="">
                         <h3>今日推荐</h3>
                    </div>
                </li>
                <li class="banner">
                    <img src="./images/today01.png" alt="">
                </li>
                <li class="banner">
                    <img src="./images/today02.png" alt="">
                </li>
                <li class="banner">
                    <img src="./images/today03.png" alt="">
                </li>
                <li class="banner">
                    <img src="./images/today04.png" alt="">
                </li>
            </ul>
    </div>
</template>

<script>
export default {
    name:'TodayRecommend'
}
</script>

<style lang="less" scoped>
    .today-recommend{
        width: 1200px;
        margin: 0 auto;

        .recommend{
            height: 165px;
            display: flex;
            background-color: #eaeaea;
            margin: 10px 0;

            .clock{
                width: 16.67%;
                background-color: #5c5251;
                text-align: center;
                color: #fff;
                .time{
                    padding: 30px 0;

                    h3{
                        margin: 9px 0 ;
                        font-weight: 700;
                        font-size: 18px;
                        line-height: 30px;
                    }
                }
            }
            .banner{
                width: 20.83%;
                img{
                    width: 100%;
                    transition: all 400ms;

                    &:hover{
                        opacity: 0.8;
                    }
                }
            }
        }
    }
</style>