<template>
  <div class="ios">
    <v-list :type="`iOS`"></v-list>
  </div>
</template>

<script>
import list from '../other/List'
export default {
  name: 'ios',
  components: {
    'v-list': list
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.ios {
  position: fixed;
  top: 98px;
  left: 0px;
  right: 0px;
  bottom: 0px
}
</style>
