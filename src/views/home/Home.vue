<template>
  <div class="home">
    <welfare v-if="common.menu.selected === 'welfare'"></welfare>
    <ios v-if="common.menu.selected === 'ios'"></ios>
    <android v-if="common.menu.selected === 'android'"></android>
  </div>
</template>

<script>
import welfare from './../welfare/Welfare'
import ios from './../other/Ios'
import android from './../other/Android'
import {mapState} from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapState([
      'common'
    ])
  },
  components: {
    'welfare': welfare,
    'ios': ios,
    'android': android
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.home {
  position: fixed;
  top: 100px;
  left: 0;
}
</style>
