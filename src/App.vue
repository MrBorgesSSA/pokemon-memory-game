<template>
  <div id="app">
    <div class="card">
      <img src="./assets/images/pokemon-logo.png">
    </div>
    <div class="card">
      <img src="./assets/images/pokemon-logo.png">
    </div>
    <div class="card">
      <img src="./assets/images/pokemon-logo.png">
    </div>
    <div class="card fliped">
      <img src="./assets/images/pokemon/7.png">
    </div>
    <div class="card">
      <img src="./assets/images/pokemon-logo.png">
    </div>
    <div class="card">
      <img src="./assets/images/pokemon-logo.png">
    </div>
    <div class="card fliped">
      <img src="./assets/images/pokemon/4.png">
    </div>
    <div class="card">
      <img src="./assets/images/pokemon-logo.png">
    </div>
    <div class="card">
      <img src="./assets/images/pokemon-logo.png">
    </div>
    <div class="card">
      <img src="./assets/images/pokemon-logo.png">
    </div>
    <div class="card">
      <img src="./assets/images/pokemon-logo.png">
    </div>
    <div class="card">
      <img src="./assets/images/pokemon-logo.png">
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
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
  height: 100%;
  background-image: linear-gradient( #13547a 50%, #80d0c7);
}

.card{
  width: 120px;
  height: 120px;
  border: 8px solid #FDCB09;
  background-image: url('~@/assets/images/card-background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; 
  margin: 15px 0 0 15px;
  float: left;
}

.card img{
  width: 100px;
  height: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.fliped {
  background-image: linear-gradient(to bottom right, #667eea, #764ba2);
}
</style>
