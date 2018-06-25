<template>
  <div class="list">
    <div class="list-item" v-for="data in datas" :key="data.id">
      <a :href="data.url " target="view_window">{{ data.desc }}</a>
      <div class="author">{{ data.who }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    type: {
      type: String
    }
  },
  data () {
    return {
      datas: [],
      page: 1
    }
  },
  created () {
    this.getDate()
  },
  methods: {
    getDate () {
      this.$http.get(`http://gank.io/api/data/${this.type}/10/${this.page}`).then((response) => {
        this.datas = this.datas.concat(response.body.results)
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.list {
  position: fixed;
  height: auto;
  top: 98px;
  left: 0px;
  right: 0px;
  bottom: 0px
}
.list-item {
  height:80px;
  border-bottom: 1px solid;
  text-align: left;
  padding-top: 8px;
  padding-left: 5px;
  a {
    color: red;
    text-decoration: none;
    text-align: left;
    margin-top:10px;
  }
  .author {
    float: right;
    margin-top: 20px;
  }
}
</style>
