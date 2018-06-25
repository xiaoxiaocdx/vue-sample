<template>
<div class="dialog">
  <div class="dialog-text">我是弹窗
    <div class="dialog-btn">
      <button type="reset">取消</button>
      <button type="submit" @click="sure">确定</button>
    </div>
  </div>
</div>
</template>

<script>
import * as type from '../../store/type'
export default {
  name: 'Dialog',
  methods: {
    sure () {
      this.$store.dispatch(type.CHANGE_DIALOG)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.dialog {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
}
.dialog-text {
  width: 80%;
  height: 40%;
  position: relative;
  top: 30%;
  left: 10%;
  background: #fff;
}
</style>
