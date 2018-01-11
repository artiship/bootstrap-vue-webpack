<template>
  <div id="app">
    <app-header></app-header>
    <div class="wrapper">
      <div class="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, expedita!
      </div>
      <div class="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, porro.
      </div>
      <div class="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, alias.
      </div>
    </div>
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
