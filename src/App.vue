<template>
  <div id="app">
    <div id="menu">
      <div class="col">
        <span class="score">Score: {{score}}</span>
      </div>
      <div class="col"></div>
      <div class="col game-title text-upper">Pokemon Memory Game</div>
      <div class="col"></div>
      <div class="col">
        <span class="score">Time: {{gameTime|gameTimeDisplay(3)}}</span>
      </div>
    </div>
    <div id="board">
      <card v-for="(carta, index) in cards" 
        :card="carta"
        v-on:flip-card="flipCard"
        v-bind:key="index" />
    </div>
  </div>
</template>

<script>

import Card from "../src/components/Card.vue"
import GameStateEnum from "../src/enums/modules/GameStateEnum"
export default {
  name: 'App',

  components:{
    Card
  },

  data(){
    return  {
      cards: [],
      rounds: [],
      flipCardSnd: null,
      gameSnd: null,
      score: 0,
      gameTime: 0,
      gameState: 1,
      round: 
      {
        firstFlipedCard: null,
        secondFlipedCard: null,
        match: false,
        time: 0
      }
    }
  },

  methods: {

    async shuffle(array) {
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
    },

    flipCard(card){
      if(card.value === 0 )
        return
      this.flipCardSnd.currentTime = 0
      this.flipCardSnd.play()

      if (this.gameSnd.currentTime == 0) {
        this.gameSnd.play()
      } 
    },

    configureSound(){
      this.flipCardSnd = new Audio(require("../src/assets/sounds/card-flip.mp3"))
      this.gameSnd = new Audio(require("../src/assets/sounds/game-music.mp3"))
      
      this.gameSnd.onended = ( () => {
        setTimeout( () => {
          this.gameSnd.currentTime = 0
          this.gameSnd.play()
        }, "2000")
      });
    },

    async startGame(){
      let number
      let carta = null
      let image

      this.gameState = GameStateEnum.WAIT_FLIP_FIRST_CARD;

      console.log(this.gameState)

      var start = Date.now();
      setInterval( () => {
          var delta = Date.now() - start
          this.gameTime = Math.floor(delta / 1000)
      }, 1000); // update about every second

      for(let cardIndex = 0; cardIndex < 16; cardIndex++){
        number = Math.floor(Math.random() * 898) + 1
        image = new Image();
        image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
        
        carta = {
          id: number,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`,
          fliped: false
        }
        
        this.cards.push(carta)
        this.cards.push({ ...carta })
      }

      await this.shuffle( this.cards )
    }
  },

  mounted(){
    this.configureSound()
    this.startGame()
  },

  filters: {
    gameTimeDisplay: (value, tamanho) => {
      if (!value) 
        return '000'
      
      var s = value+"";
      while (s.length < tamanho) s = "0" + s;
      return s;
    }
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
  max-height: 100%;
  background-image: linear-gradient( to right bottom, #13547a 50%, #80d0c7);
  margin: 0px;
}

#menu{
  height: 50px;
  width: 100%;
  margin: 0px;
  padding: 0px;
  opacity: 0.7;
  position: absolute;
  z-index: 10;
  background-color: #222;
  border-bottom-left-radius: 20px ;
  border-bottom-right-radius: 20px ;
}

#board{
  margin-top: 35px;
  position: absolute;
  padding-left: 25px;
}

.col{
  width: 20%;
  margin: 0px;
  padding: 12px;
  box-sizing: border-box;
  float: left;
}

.text-center{
  text-align: right;
}

.game-title{
  color: #FDCB09;
  font-weight: bold;
  text-transform: full-width;
}

.text-upper{
  text-transform: uppercase;
}

.score{
  color: #FDCB09;
  font-weight: bold;
  font-size: 1em;
}
</style>
