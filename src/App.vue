<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
