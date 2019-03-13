<template>
  <div class="home">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions} from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'
import { setTimeout } from 'timers';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
        msg:[]
    }
  },
  created(){},
  mounted(){
    this.init()
  },
  methods:{
    ...mapActions('data',[
      'handleHomeInfo'
    ]),
    init(){
      this.handleHomeInfo().then(res=>{
        setTimeout(()=>{
            this.msg = res
        },1000)
      })
    }
  }
}
</script>
