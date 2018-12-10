<template>
  <div class="container">
    <menu-nav></menu-nav>
    <h1>Dashboard</h1>
    <p> Dashboard</p>
  </div>
</template>

<script>
import menuNav from '../components/menuBar'

export default {
  components: {
    'menu-nav': menuNav
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
