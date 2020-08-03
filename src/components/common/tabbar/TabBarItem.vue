<template>
    <div class="tabbar-item" @click='routelink'>
      <div v-if="!active">
        <slot name='icon'></slot>
      </div>
      <div v-else>
        <slot name='icon-active'></slot>
      </div>
      <div :style="activeStyle">
        <slot name='text'></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    };
  },
  props:{
    path:'',
    fontColor:{
      type:String,
      default:'red'
    }
  },
  components: {},
  computed: {
    active(){
      // console.log(this.$route.path.indexOf(this.path))
      return this.$route.path.indexOf(this.path)!== -1;
    },
    activeStyle(){
      return this.active?{color:this.fontColor}:''
    }
  },
  //mounted () {},
  methods: {
    routelink(){
      this.path?this.$router.push(this.path).catch(err=>err):'';
    }
  }
}
</script>

<style>
.tabbar-item{
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tabbar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>