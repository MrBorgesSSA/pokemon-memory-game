<template>
  <div id="app">
    <div class="card" @click="card.fliped = !card.fliped" :class="{'fliped' : card.fliped}" v-for="(card, index) in cards" v-bind:key="index">
      <img v-if="card.fliped" :src="card.sprite" />
      <img v-else src="./assets/images/pokemon-logo.png" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',

  data(){
    return  {
      cards: []
    }
  },

  methods: {

    shuffle(array) {
      let currentIndex = array.length,  randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    }
  },

  mounted(){
    let number
    let card = null
    let image
    for(let cardIndex = 0; cardIndex < 16; cardIndex++){
      number = Math.floor(Math.random() * 898) + 1
      image = new Image();
      image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
      card = {
        id: number,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`,
        fliped: false
      }
      this.cards.push(card)
      this.cards.push({ ...card })
    }
    this.shuffle( this.cards )
  }
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
  background-image: linear-gradient( to right bottom, #13547a 50%, #80d0c7);
}

.card{
  width: 110px;
  height: 110px;
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
