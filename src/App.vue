<template>
  <div class="menu">
    <a v-for="(a,i) in 메뉴들" :key="i">{{a}}</a>
  </div>
  <div v-for="(a,i) in products" :key="i">
    <img src="./assets/room0.jpg" class="room-img">
    <h4>{{a}}</h4>
    <p>{{prices[i]}}</p>
    <button @click="신고수[i]++">허위매물신고</button> <span>신고수: {{신고수[i]}}</span>
  </div>
  <!-- <div>
    <h4>{{products[0]}}</h4>
    <p>50만원</p>
  </div>
  <div>
    <h4>{{products[1]}}</h4>
    <p>60만원</p>
  </div>
  <div>
    <h4>{{products[2]}}</h4>
    <p>70만원</p>
  </div> -->


</template>

<script>

var 어레이 = [10, 20, 30]
어레이[1]

export default {
  name: 'App',
  data(){
    return {
      신고수 : [0,0,0],
      메뉴들 : ['Home', 'Shop', 'About'],
      스타일 : 'color : blue',
      products : ['역삼동원룸', '천호동원룸','마포구원룸'],
      prices : ['50만원', '60만원', '70만원'],
    }
  },
  methods: {
    increase(){
      this.신고수+=1
    }
  },
  components: {

  }
}
</script>

<style>
.room-img {
  width:100%;
  margin-top:40px; 
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a{
  color: white;
  padding: 10px;
}
</style>
