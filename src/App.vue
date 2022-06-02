<template>
  <div id="app">
    <GameController />
  </div>
</template>

<script>

import GameController from "../src/components/GameController.vue"
export default {
  name: 'App',

  components:{
    GameController
  },

  data(){
    return  {
    }
  },
  

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html{
  height: 100%;
}

body{
  max-height: 100%;
  background-image: linear-gradient( to right bottom, #13547a 50%, #80d0c7);
  margin: 0px;
}
</style>
