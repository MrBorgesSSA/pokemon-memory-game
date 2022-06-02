<template>
  <div class="flip-card" :class="{hover:card.fliped}"  @click="flipCard()">
    <div class="flip-card-inner">
      <div class="card flip-card-front">
        <img src="@/assets/images/pokemon-logo.png" />
      </div>
      <div class="card flip-card-back">
        <img :src="card.sprite" />
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      card: {
        type: Object
      },
    },

    methods:{
      flipCard(){
        this.$emit('flip-card', this.card)
      }
    }
  }
</script>
<style>

.flip-card {
  background-color: transparent;
  width: 8.2vw;
  height: 100px;
  margin: 33px 0 0 45px;
  display: block;
  float: left;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border: 8px solid #FDCB09;
}

.flip-card.hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-image: url('~@/assets/images/card-background.jpg');
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-image: linear-gradient(to bottom right, #667eea, #764ba2);
  color: white;
  transform: rotateY(180deg);
}

.card{
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; 
  cursor: pointer;
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