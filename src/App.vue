<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',

  // created: function async () {
  //   const token = localStorage.getItem('@varalclub:auth-token')
  //   console.log(token)
  //   if (!token) {
  //     console.log('aqui..')
  //     this.$router.push('/login')
  //     return
  //   }
  //   this.$router.push('/')
  // }
}


</script>

<style>

</style>
