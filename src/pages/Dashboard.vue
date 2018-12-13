<template>
  <div class="container">
    <menu-nav></menu-nav>
    <h1 class="is-size-1">Dashboard</h1>
    <div class="columns">
      <div class="column is-two-fifths">
        <chart01 />
      </div>
      <div class="column">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis inventore optio maxime quod voluptatem magni! Facere obcaecati nam rerum totam assumenda maxime, vero voluptatem fugiat velit odit eveniet. Sunt, eaque!</p>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ab accusamus ut totam perspiciatis? Veritatis ratione accusantium commodi ea optio porro eligendi reiciendis debitis illum nostrum natus repellat, rerum vero?</p>
      </div>
      <div class="column is-two-fifths">
        <chart02 />
      </div>
    </div>
  </div>
</template>

<script>
import menuNav from '../components/menuBar'
import chart01 from '../components/Chart01'
import chart02 from '../components/Chart02'
export default {
  components: {
    'menu-nav': menuNav,
    'chart01': chart01,
    'chart02': chart02
  },
  name: 'dashboard',
  props: {
    msg: String,
    albumId: String
  },
  data: function() {
    return {
      info: {},

    }
  },
  created: function() {
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
