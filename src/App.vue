<template>
  <div class="outer">
    <Header/>
    <router-view></router-view>
    <Footer v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    this.$store.dispatch("categoryList");
  },
}
</script>

<style>

</style>
