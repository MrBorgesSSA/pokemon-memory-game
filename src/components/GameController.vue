<template>
  <div>
    <modal class="modal" name="dialog">
      <h1>🎉 Congrats, you catch 'em all! 🥳</h1>
      <img src="@/assets/images/ash.png"/>
      <div class="result">
        <span>Total Time: <strong>{{gameTime|gameTimeDisplay(3)}}</strong></span><br/>
        <span>Rounds Needed: <strong>{{this.rounds.length|gameTimeDisplay(2)}}</strong></span><br/>
        <span>Pokemons Captured: <strong>{{this.score|gameTimeDisplay(2)}}</strong></span>
        <button @click.prevent="closeModal" class="danger">Close</button>
        <button @click.prevent="startGame" class="primary">New Game</button>
      </div>
    </modal>
    <div id="menu">
      <div class="col">
        <span class="score">Score: {{score|gameTimeDisplay(2)}}</span>
      </div>
      <div class="col">
        <span class="score">Round: {{this.rounds.length|gameTimeDisplay(2)}}</span>
      </div>
      <div class="col game-title text-upper">Pokemon Memory Game</div>
      <div class="col">
        <span class="score">Time: {{gameTime|gameTimeDisplay(3)}}</span>
      </div>
      <div class="col">
        <button @click="startGame">
          Start new Game
        </button>
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
  import Card from "../components/Card.vue"
  import GameStateEnum from "../enums/modules/GameStateEnum"

  export default {

    components:{
      Card
    },

    data(){
      return  {
        score: 0,
        gameTime: 0,
        gameState: 1,
        cards: [],
        rounds: [],
        flipCardSnd: null,
        gameSnd: null,
        victorySnd: null,
        timeInterval: null,
        showModal: true,
        modalTitle: "Parabéns, você conseguiu!",
        round: 
        {
          firstFlipedCard: null,
          secondFlipedCard: null,
          match: false,
          time: 0
        }
      }
    },

    mounted(){
      window.addEventListener('beforeunload', this.onBeforeUnload) 
      this.configureSound()
      this.sortCards()
    },

    methods: {
      async closeModal(){
        this.victorySnd.currentTime = 0
        this.victorySnd.pause()
        this.$modal.hide('dialog')
      },

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

      async flipCard(card){
        if(this.timeInterval == null){
          this.startTimer()
        }

        if(card.fliped || ( this.gameState != GameStateEnum.WAIT_FLIP_FIRST_CARD && this.gameState != GameStateEnum.WAIT_FLIP_SECOND_CARD) ){
          return
        }

        if (this.gameSnd.currentTime == 0) {
          this.gameSnd.play()
        } 
        
        this.flipCardSnd.currentTime = 0
        this.flipCardSnd.play()
        card.fliped = !card.fliped

        if(this.gameState == GameStateEnum.WAIT_FLIP_FIRST_CARD){
          this.round = {
            firstFlipedCard: card,
            secondFlipedCard: null,
            match: false,
            time: this.gameTime
          }
          this.rounds.push(this.round)
          this.gameState = GameStateEnum.WAIT_FLIP_SECOND_CARD
        } else if(this.gameState == GameStateEnum.WAIT_FLIP_SECOND_CARD){
          this.round.secondFlipedCard = card
          this.round.match = this.round.secondFlipedCard.id == this.round.firstFlipedCard.id
          
          if(this.round.match){
            this.round.firstFlipedCard.matched = true
            this.round.secondFlipedCard.matched = true
            this.score += 1

            if(! await this.isGameFinished()){
              this.gameState = GameStateEnum.WAIT_FLIP_FIRST_CARD
            } else {
              this.gameState = GameStateEnum.FINISHED
              this.finishGame()
            }
          } else {
            this.round.firstFlipedCard.matched = false
            this.round.secondFlipedCard.matched = false
            this.gameState = GameStateEnum.WAITING
            setTimeout( () => {
              this.round.firstFlipedCard.fliped = false
              this.round.secondFlipedCard.fliped = false
              this.gameState = GameStateEnum.WAIT_FLIP_FIRST_CARD
            }, "1000")
          }
        }
      },

      async finishGame(){
        this.pauseSounds()
        this.victorySnd.play()
        clearInterval(this.timeInterval)
        this.timeInterval = null
        this.$modal.show('dialog')
      },

      async pauseSounds(){
        this.gameSnd.currentTime = 0
        this.gameSnd.pause()

        this.flipCardSnd.currentTime = 0
        this.flipCardSnd.pause()

        this.victorySnd.currentTime = 0
        this.victorySnd.pause()
      },

      async isGameFinished(){
        return this.score == ( this.cards.length / 2 )
      },

      configureSound(){
        this.flipCardSnd = new Audio(require("../../src/assets/sounds/card-flip.mp3"))
        
        this.gameSnd = new Audio(require("../../src/assets/sounds/PokemonThemeMusic.mp3"))
        this.gameSnd.volume = 0.3
        this.gameSnd.loop = true

        this.victorySnd = new Audio(require("../../src/assets/sounds/PokemonVictory.mp3"))
        this.victorySnd.volume = 0.3
      },

      async sortCards(){
        let number
        let carta = null
        let image
        this.cards = []
        this.rounds = []
        this.gameState = GameStateEnum.WAIT_FLIP_FIRST_CARD 

        for(let cardIndex = 0; cardIndex < 16; cardIndex++){
          number = Math.floor(Math.random() * 898) + 1
          image = new Image();
          image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`
          
          carta = {
            id: number,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`,
            fliped: false,
            matched: false
          }
          
          this.cards.push(carta)
          this.cards.push({ ...carta })
        }

        await this.shuffle( this.cards )

      },

      async startTimer(){
        var start = Date.now()

        this.timeInterval = setInterval( () => {
            var delta = Date.now() - start
            this.gameTime = Math.floor(delta / 1000)
        }, 1000); // update about every second
      },

      async startGame(){
        this.score = 0
        clearInterval(this.timeInterval)
        this.timeInterval = null
        this.gameTime = 0

        this.gameSnd.pause()
        this.gameSnd.currentTime = 0

        this.sortCards()
        this.$modal.hide('dialog')
      },

      onBeforeUnload(){
        clearInterval(this.timeInterval)
      },
    },

    filters: {
      gameTimeDisplay: (value, tamanho) => {
        if (!value) 
          value = 0
        
        var s = value+"";
        while (s.length < tamanho) s = "0" + s;
        return s;
      }
    },

  }
</script>
<style>

.game-title{
  color: #FDCB09;
  font-weight: bold;
  text-transform: full-width;
}

.text-upper{
  text-transform: uppercase;
}

.score{
  color: #39DCB2;
  font-weight: bold;
  font-size: 1em;
}

#menu{
  height: 50px;
  width: 100%;
  margin: 0px;
  padding: 0px;
  opacity: 0.8;
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

button{
  background-color: #FDCB09;
  color: #000;
  padding: 5px;
  border: 1px solid #FDCB09;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
}

button:hover{
  opacity: 1 !important;
  background-color: #000;
  color: #FDCB09;
}

.vm--modal{
  background-color: #000 !important;
  color: #39DCB2;
  opacity: 0.9;
  border-radius: 15px !important;
}

.vm--modal img{
  max-width: 50%;
  height: auto;
  float: left;
}

.result{
  font-size: 1.3em;
  font-weight: bold;
  text-align: right;
  padding-right: 20px;
  margin-top: 80px;
  line-height: 1.5em;
}

.result strong{
  color: #FDCB09
}

.danger{
  margin-top: 10px;
  background-color: red;
  color: #fff;
  border: 2px solid red;
  padding: 7px 20px;
}

.danger:hover{
  background-color: #fff;
  color: red;
  border: 2px solid red !important;
}

.primary{
  margin-top: 10px;
  background-color: #39DCB2;
  color: #000;
  border: 2px solid #39DCB2;
  padding: 7px 20px;
  margin-left: 5px;
}

.primary:hover{
  background-color: #000;
  color: #39DCB2;
  border: 2px solid #39DCB2 !important;
}
</style>