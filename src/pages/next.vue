<template>
<div id="next">
    <p>画面遷移しました</p>
    


</div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
  },

  data () {
      return {
          message : "メッセージ",
          url : "http://www.nogizaka46.com",
          text : "",
          seen : false,
          flg : false,
          todos: [
              { text: 'Learn JavaScript' },
              { text: 'Learn Vue' },
              { text: 'Build something awesome' }
          ]

      }

  },



  methods: {
      click: function () {
          alert("クリックされました！"); // clickメソッド
      },

      clickButton: function () {
          if (this.flg){
              this.seen = false;
              this.flg = false;
          } else {
              this.seen = true;
              this.flg = true;
          }

      },
      modal: function() {

      }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

img:hover {
  opacity: 0.5;
}
</style>

