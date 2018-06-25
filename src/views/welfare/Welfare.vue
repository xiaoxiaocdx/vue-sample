<template>
  <div class="welfare">
    <div class="welfare-center">
      <div class="imgbox" v-show="leftData.length > 0" v-for="item in leftData" :key="item.id">
        <img :src="item.url" />
      </div>
    </div>
    <div class="welfare-center">
      <div class="imgbox" v-show="rightData.length > 0" v-for="item in rightData" :key="item.id">
        <img :src="item.url" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welfare',
  data () {
    return {
      page: 1,
      leftData: [],
      rightData: []
    }
  },
  created () {
    this.loadTop()
  },
  methods: {
    loadTop () {
      this.page = 4
      this.$http.get(`https://gank.io/api/data/福利/10/${this.page}`).then((response) => {
        let left = response.body.results.filter((data, i) => {
          return (i + 1) % 2 === 1
        })
        let right = response.body.results.filter((data, i) => {
          return (i + 1) % 2 !== 1
        })
        this.leftData = this.leftData.concat(left)
        this.rightData = this.rightData.concat(right)
        // $nextTick() 在dom 重新渲染完后执行
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.welfare {
  position: fixed;
  top: 98px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  overflow-y: auto;
  // text-align: center;
}
  .welfare-center {
    width: 50%;
    float: left;
    .imgbox {
      width: 98%;
      padding: 1%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
</style>
