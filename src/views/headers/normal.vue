<template>
  <header class="zvale-header-box" :style="headerStyle">
    <div class="zvale-header">
      <div class="zvale-logo">
        <img class="zvale-logo-image" v-if="headerInfo.logo.type==='image'" :src="headerInfo.logo.text" alt="">
        <div v-else class="zvale-logo-text"></div>
      </div>
      <ul class="zvale-nav">
        <li v-for="item in headerInfo.nav" :style="navStyle" :key="item.index" @click="goPage(item.path)">{{item.name}}</li>
      </ul>
    </div>
  </header>
</template>
<script>
import './header.css'
export default {
  data() {
    return {
      headerInfo: {
        background: '',
        logo: {
          type: 'image',
          text: '../../../static/images/logo-min.png'
        },
        nav: [],
        color: '',
        hoverColor: ''
      }
    }
  },
  computed: {
    headerStyle() {
      return {
        background: this.headerInfo.background
      }
    },
    navStyle() {
      return {
        color: this.headerInfo.color
      }
    }
  },
  created() {
    this.getHeaderInfo()
  },
  methods: {
    getHeaderInfo() {
      this.headerInfo.color = '#fff'
      this.headerInfo.background = '#8BC34A'
      this.headerInfo.hoverColor = ''
      this.headerInfo.nav = [
        { path: '/singer', name: '菜单1' },
        { path: '/list', name: '菜单2' },
        { path: '/detail', name: '菜单3' }
      ]
    },
    goPage(path) {
      this.$router.push({ path: path })
    },
    mousemoveColor() {}
  }
}
</script>

<style lang="stylus" scoped>
</style>
