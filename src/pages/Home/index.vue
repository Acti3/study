<template>
    <div>
        <!-- 分类列表 -->
        <TypeNav/>
        <!--  -->
        <ListContainer/>
        <!--  -->
        <TodayRecommend/>
        <!--  -->
        <Rank/>
        <!--  -->
        <Like/>
        <!--  -->
        <Floor v-for="item in Floor" :key="item.id" :list="item"/>
        <Brand/>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import ListContainer from '@/pages/Home/ListContainer/ListContainer'
import TodayRecommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor/Floor'
import Brand from '@/pages/Home/Brand'
export default {
    name:'HomeName',
    components:{
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
        Brand
    },
    computed:{
        ...mapState({
            Floor:state=>state.home.floor
        })
    },
    mounted(){
        this.$store.dispatch("floorList")

        //获取用户信息
        this.$store.dispatch('userInfo')
    }
}
</script>

<style>

</style>