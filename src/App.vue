<template>
  <div id="app">
    <tab-bar-main></tab-bar-main>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import TabBarMain from './components/content/tabbarmain/TabBarMain'
  export default {
    name: 'App',
    components:{
      TabBarMain
    }
  }
</script>

<style>
  @import 'assets/css/base.css';
</style>
