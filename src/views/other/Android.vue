<template>
  <div class="android">
  <v-list :type="`Android`"></v-list>
  </div>
</template>

<script>
import list from '../other/List'
export default {
  name: 'android',
  components: {
    'v-list': list
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.android {
  position: fixed;
  top: 98px;
  left: 0px;
  right: 0px;
  bottom: 0px
}
</style>
