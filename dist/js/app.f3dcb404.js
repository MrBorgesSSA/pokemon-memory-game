(function(A){function e(e){for(var n,i,o=e[0],s=e[1],c=e[2],u=0,l=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&l.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(A[n]=s[n]);q&&q(e);while(l.length)l.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var A,e=0;e<a.length;e++){for(var t=a[e],n=!0,o=1;o<t.length;o++){var s=t[o];0!==r[s]&&(n=!1)}n&&(a.splice(e--,1),A=i(i.s=t[0]))}return A}var n={},r={app:0},a=[];function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return A[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=A,i.c=n,i.d=function(A,e,t){i.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:t})},i.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},i.t=function(A,e){if(1&e&&(A=i(A)),8&e)return A;if(4&e&&"object"===typeof A&&A&&A.__esModule)return A;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var n in A)i.d(t,n,function(e){return A[e]}.bind(null,n));return t},i.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return i.d(e,"a",e),e},i.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var q=s;a.push([0,"chunk-vendors"]),t()})({0:function(A,e,t){A.exports=t("56d7")},"034f":function(A,e,t){"use strict";t("85ec")},"0ab0":function(A,e,t){"use strict";t("c432")},"10de":function(A,e,t){A.exports=t.p+"img/ash.71d6bfb6.png"},"39ff":function(A,e,t){A.exports=t.p+"media/PokemonVictory.f70d26a4.mp3"},"56d7":function(A,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{attrs:{id:"app"}},[t("GameController")],1)},a=[],i=function(){var A=this,e=A.$createElement,n=A._self._c||e;return n("div",[n("modal",{staticClass:"modal",attrs:{name:"dialog"}},[n("h1",[A._v("🎉 Congrats, you catch 'em all! 🥳")]),n("img",{attrs:{src:t("10de")}}),n("div",{staticClass:"result"},[n("span",[A._v("Total Time: "),n("strong",[A._v(A._s(A._f("gameTimeDisplay")(A.gameTime,3)))])]),n("br"),n("span",[A._v("Rounds Needed: "),n("strong",[A._v(A._s(A._f("gameTimeDisplay")(this.rounds.length,2)))])]),n("br"),n("span",[A._v("Pokemons Captured: "),n("strong",[A._v(A._s(A._f("gameTimeDisplay")(this.score,2)))])]),n("button",{staticClass:"danger",on:{click:function(e){return e.preventDefault(),A.closeModal.apply(null,arguments)}}},[A._v("Close")]),n("button",{staticClass:"primary",on:{click:function(e){return e.preventDefault(),A.startGame.apply(null,arguments)}}},[A._v("New Game")])])]),n("div",{attrs:{id:"menu"}},[n("div",{staticClass:"col"},[n("span",{staticClass:"score"},[A._v("Score: "+A._s(A._f("gameTimeDisplay")(A.score,2)))])]),n("div",{staticClass:"col"},[n("span",{staticClass:"score"},[A._v("Round: "+A._s(A._f("gameTimeDisplay")(this.rounds.length,2)))])]),n("div",{staticClass:"col game-title text-upper"},[A._v("Pokemon Memory Game")]),n("div",{staticClass:"col"},[n("span",{staticClass:"score"},[A._v("Time: "+A._s(A._f("gameTimeDisplay")(A.gameTime,3)))])]),n("div",{staticClass:"col"},[n("button",{on:{click:A.startGame}},[A._v(" Start new Game ")])])]),n("div",{attrs:{id:"board"}},A._l(A.cards,(function(e,t){return n("card",{key:t,attrs:{card:e},on:{"flip-card":A.flipCard}})})),1)],1)},o=[],s=t("5530"),c=t("1da1"),q=(t("ac1f"),t("466d"),t("7db0"),t("d3b7"),t("96cf"),function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"flip-card",class:{hover:A.card.fliped},on:{click:function(e){return A.flipCard()}}},[t("div",{staticClass:"flip-card-inner"},[A._m(0),t("div",{staticClass:"card flip-card-back"},[t("img",{attrs:{src:A.card.sprite}})])])])}),u=[function(){var A=this,e=A.$createElement,n=A._self._c||e;return n("div",{staticClass:"card flip-card-front"},[n("img",{attrs:{src:t("624a")}})])}],l={props:{card:{type:Object}},methods:{flipCard:function(){this.$emit("flip-card",this.card)}}},d=l,p=(t("0ab0"),t("2877")),m=Object(p["a"])(d,q,u,!1,null,null,null),f=m.exports,h=(t("dca8"),Object.freeze({BEFORE_START:1,WAIT_FLIP_FIRST_CARD:2,WAIT_FLIP_SECOND_CARD:3,WAITING:4,FINISHED:5})),g=h,v={components:{Card:f},data:function(){return{score:0,gameTime:0,gameState:1,cards:[],rounds:[],flipCardSnd:null,gameSnd:null,victorySnd:null,cliqueSnd:null,timeInterval:null,showModal:!0,modalTitle:"Parabéns, você conseguiu!",round:{firstFlipedCard:null,secondFlipedCard:null,match:!1,time:0}}},mounted:function(){window.addEventListener("beforeunload",this.onBeforeUnload),this.configureSound(),this.sortCards()},methods:{closeModal:function(){var A=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:A.victorySnd.currentTime=0,A.victorySnd.pause(),A.cliqueButton(),A.$modal.hide("dialog");case 4:case"end":return e.stop()}}),e)})))()},shuffle:function(A){return Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=A.length;while(0!=t)n=Math.floor(Math.random()*t),t--,r=[A[n],A[t]],A[t]=r[0],A[n]=r[1];case 2:case"end":return e.stop()}}),e)})))()},flipCard:function(A){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null==e.timeInterval&&e.startTimer(),!(A.fliped||e.gameState!=g.WAIT_FLIP_FIRST_CARD&&e.gameState!=g.WAIT_FLIP_SECOND_CARD)){t.next=3;break}return t.abrupt("return");case 3:if(0==e.gameSnd.currentTime&&e.gameSnd.play(),e.flipCardSnd.currentTime=0,e.flipCardSnd.play(),A.fliped=!A.fliped,e.gameState!=g.WAIT_FLIP_FIRST_CARD){t.next=13;break}e.round={firstFlipedCard:A,secondFlipedCard:null,match:!1,time:e.gameTime},e.rounds.push(e.round),e.gameState=g.WAIT_FLIP_SECOND_CARD,t.next=34;break;case 13:if(e.gameState!=g.WAIT_FLIP_SECOND_CARD){t.next=34;break}if(e.round.secondFlipedCard=A,e.round.match=e.round.secondFlipedCard.id==e.round.firstFlipedCard.id,!e.round.match){t.next=30;break}return e.round.firstFlipedCard.matched=!0,e.round.secondFlipedCard.matched=!0,e.score+=1,t.next=22,e.isGameFinished();case 22:if(t.sent){t.next=26;break}e.gameState=g.WAIT_FLIP_FIRST_CARD,t.next=28;break;case 26:e.gameState=g.FINISHED,e.finishGame();case 28:t.next=34;break;case 30:e.round.firstFlipedCard.matched=!1,e.round.secondFlipedCard.matched=!1,e.gameState=g.WAITING,setTimeout((function(){e.round.firstFlipedCard.fliped=!1,e.round.secondFlipedCard.fliped=!1,e.gameState=g.WAIT_FLIP_FIRST_CARD}),"1000");case 34:case"end":return t.stop()}}),t)})))()},finishGame:function(){var A=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:A.pauseSounds(),A.victorySnd.play(),clearInterval(A.timeInterval),A.timeInterval=null,A.$modal.show("dialog");case 5:case"end":return e.stop()}}),e)})))()},pauseSounds:function(){var A=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:A.gameSnd.currentTime=0,A.gameSnd.pause(),A.flipCardSnd.currentTime=0,A.flipCardSnd.pause(),A.victorySnd.currentTime=0,A.victorySnd.pause();case 6:case"end":return e.stop()}}),e)})))()},isGameFinished:function(){var A=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",A.score==A.cards.length/2);case 1:case"end":return e.stop()}}),e)})))()},configureSound:function(){this.flipCardSnd=new Audio(t("afae")),this.gameSnd=new Audio(t("d7f1")),this.gameSnd.volume=.3,this.gameSnd.loop=!0,this.victorySnd=new Audio(t("39ff")),this.victorySnd.volume=.3,this.cliqueSnd=new Audio(t("7ba6"))},cliqueButton:function(){var A=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:A.cliqueSnd.currentTime=0,A.cliqueSnd.play();case 2:case"end":return e.stop()}}),e)})))()},sortCards:function(){var A=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=null,A.cards=[],A.rounds=[],A.gameState=g.WAIT_FLIP_FIRST_CARD,a=0;case 5:if(!(a<16)){e.next=19;break}if(t=Math.floor(898*Math.random())+1,r=new Image,r.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png"),n={id:t,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png"),fliped:!1,matched:!1},i=A.cards.find((function(A){return A.id==n.id})),null==i){e.next=14;break}return a--,e.abrupt("continue",16);case 14:A.cards.push(n),A.cards.push(Object(s["a"])({},n));case 16:a++,e.next=5;break;case 19:return e.next=21,A.shuffle(A.cards);case 21:case"end":return e.stop()}}),e)})))()},startTimer:function(){var A=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=Date.now(),A.timeInterval=setInterval((function(){var e=Date.now()-t;A.gameTime=Math.floor(e/1e3)}),1e3);case 2:case"end":return e.stop()}}),e)})))()},startGame:function(){var A=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:A.score=0,clearInterval(A.timeInterval),A.timeInterval=null,A.gameTime=0,A.gameSnd.pause(),A.gameSnd.currentTime=0,A.cliqueButton(),A.sortCards(),A.$modal.hide("dialog");case 9:case"end":return e.stop()}}),e)})))()},onBeforeUnload:function(){clearInterval(this.timeInterval)}},filters:{gameTimeDisplay:function(A,e){A||(A=0);var t=A+"";while(t.length<e)t="0"+t;return t}}},b=v,C=(t("6549"),Object(p["a"])(b,i,o,!1,null,null,null)),w=C.exports,S={name:"App",components:{GameController:w},data:function(){return{}}},_=S,T=(t("034f"),Object(p["a"])(_,r,a,!1,null,null,null)),I=T.exports,y=t("1881"),k=t.n(y);n["a"].config.productionTip=!1,n["a"].use(k.a),new n["a"]({render:function(A){return A(I)}}).$mount("#app")},"624a":function(A,e,t){A.exports=t.p+"img/pokemon-logo.24c0b6c6.png"},6549:function(A,e,t){"use strict";t("c919")},"7ba6":function(A,e){A.exports="data:audio/mpeg;base64,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"},"85ec":function(A,e,t){},afae:function(A,e,t){A.exports=t.p+"media/card-flip.a3bbb58d.mp3"},c432:function(A,e,t){},c919:function(A,e,t){},d7f1:function(A,e,t){A.exports=t.p+"media/PokemonThemeMusic.c79e4e6c.mp3"}});
//# sourceMappingURL=app.f3dcb404.js.map