<template>
<div>
    Count is {{add1}}
    asdasd{{add2}}
    <button @click="increment({m:100})">+5</button>
    <button @click="decrement(2)">-3</button>
    <router-link to='/fenceCenter' tag='span' >中心点</router-link>
    
</div>  
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  computed:{
    ...mapGetters({
      add1:'docount',
      add2:'othercount'
    })
    
  },
  watch:{
    add1:function(va,oldval){
      console.log(va,oldval);
    }
  },
  methods:
  {
  ...mapActions([
      'increment',
      'decrement'
    ])
  }
 
   
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
