<template>
  <div id="app">
    <app-header></app-header>
    <app-menu></app-menu>
    <app-dialog v-show="common.dialog.show"></app-dialog>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header/Header'
import menu from './components/menu/Menu'
import Dialog from './components/dialog/Dialog'
import {mapState} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState([
      'common'
    ])
  },
  components: {
    'app-header': header,
    'app-menu': menu,
    'app-dialog': Dialog
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
  margin-top: 0px;
}
</style>
