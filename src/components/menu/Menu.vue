<template>
  <div class="menu">
    <div class="menu-item" :class="{'selected': common.menu.selected==='welfare'}" @click="handelMenu('welfare')">福利</div>
    <div class="menu-item" :class="{'selected': common.menu.selected==='android'}" @click="handelMenu('android')">android</div>
    <div class="menu-item" :class="{'selected': common.menu.selected==='ios'}" @click="handelMenu('ios')">ios</div>
  </div>
</template>

<script>
import * as type from './../../store/type'
import {mapState} from 'vuex'
export default {
  name: 'Menu',
  computed: {
    ...mapState([
      'common'
    ])
  },
  methods: {
    handelMenu (val) {
      this.$store.dispatch(type.HANDEL_CHANGE, {
        selected: val
      })
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .menu {
    height: 50px;
    width: 100%;
    background: #b71c1c;
    margin: 0 auto;
    color: #fff;
    display: flex;
  }
  .menu-item {
    flex: 1;
    line-height: 50px;
    text-align: center;
  }
  .selected {
    background rgba(0,0,0,0.2);
  }
</style>
