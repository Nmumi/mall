<template>
    <div id="tabbar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
      
    };
  },
  components: {},
  //mounted () {},
  methods: {}
}
</script>

<style>
#tabbar{
  display: flex;
  position: fixed;
  background-color: #f4f4f4;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -3px 10px 0px rgba(0, 0, 0, .2);
}
</style>