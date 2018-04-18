<template>
  <header class="zvale-header-box" :style="headerStyle">
    <div class="zvale-header">
      <div class="zvale-logo" @click="goPage('/index')">
        <img class="zvale-logo-image" v-if="headerInfo.logo.type==='image'" :src="headerInfo.logo.content">
        <div v-else class="zvale-logo-text">{{headerInfo.logo.content}}</div>
      </div>
      <ul class="zvale-nav">
        <li v-for="(nav, index) in headerInfo.nav" :style="navStyle(nav.path)" :key="index" @click="goPage(nav.path)">{{nav.name}}</li>
      </ul>
    </div>
  </header>
</template>
<script>
import './header.css'
export default {
  data() {
    return {
      activeIndex: '',
      headerInfo: {
        background: '',
        logo: {
          type: 'image',
          content: '../../../static/images/logo-min.png'
        },
        nav: [],
        color: '',
        hoverColor: '',
        activeNav: {
          type: 'text', // border \ text \ background
          color: 'red',
          otherColor: '#dac'
        }
      }
    }
  },
  computed: {
    headerStyle() {
      return {
        background: this.headerInfo.background
      }
    }
  },
  created() {
    this.getHeaderInfo()
    this.activeIndex = this.$router.history.current.path
    console.log(this.$router)
  },
  methods: {
    getHeaderInfo() {
      this.headerInfo.color = '#fff'
      this.headerInfo.background = '#8BC34A'
      this.headerInfo.hoverColor = ''
      this.headerInfo.activeNav = {
        type: 'border',
        color: 'red',
        otherColor: '#dac'
      }
      this.headerInfo.nav = [
        { path: '/index', name: '菜单1' },
        { path: '/list', name: '菜单2' },
        { path: '/detail', name: '菜单3' }
      ]
    },
    goPage(path) {
      this.$router.push({ path: path })
      this.activeIndex = path
    },
    mousemoveColor() {},
    navStyle(index) {
      const actnav = { color: this.headerInfo.color }
      if (this.activeIndex === index) {
        actnav.color = `${this.headerInfo.activeNav.color}`
        if (this.headerInfo.activeNav.type === 'border') {
          actnav.borderBottom = `3px solid ${
            this.headerInfo.activeNav.otherColor
          }`
        }
        if (this.headerInfo.activeNav.type === 'background') {
          actnav.background = `${this.headerInfo.activeNav.otherColor}`
        }
      }
      return actnav
    }
  },
  watch: {
    $route(to, from) {
      this.activeIndex = `/${to.params.id}`
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
