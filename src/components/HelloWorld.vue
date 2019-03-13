<template>
  <div class="hello">
    <h1>{{ now }}</h1>
    <ul>
      <li v-for="(item, index) in setmsg" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type : Array,
      default: ''
    }
  },
  data(){
    return {
      getmsg:''
    }
  },
  computed:{
    setmsg: function() {
        return this.msg
    },
    now: function () {
      return Date.now()
    }
  },
  mounted(){
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
