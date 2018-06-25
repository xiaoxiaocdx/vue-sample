<template>
  <div class="header">
    <img src="./../../assets/dialog.png" class="dialogBtn" @click="showDialog()" />
    <div class="header-title">干活集中营</div>
  </div>
</template>

<script>
import * as type from './../../store/type'
export default {
  name: 'Header',
  methods: {
    showDialog () {
      this.$store.dispatch(type.CHANGE_DIALOG)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header {
    width: 100%;
    height: 48px;
    background: #b71c1c;
    color: #fff;
    display: flex;
    img {
      height: 48px;
      width: 48px;
      float: left;
    }
    .header-title {
      width: 90%;
      height: 48px;
      line-height: 48px;
      text-align: center;
    }
  }
</style>
