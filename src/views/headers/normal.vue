<template>
  <div>
    <div v-for="item in nav" :key="item.index" @click="goPage(item.path)">111</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nav: [],
      logo: {
        type: 'image',
        text: '123'
      }
    }
  },
  created() {
    this.getHeaderInfo()
  },
  methods: {
    getHeaderInfo() {
      this.nav = [{ path: '/singer' }, { path: '/list' }, { path: '/detail' }]
    },
    goPage(path) {
      this.$router.push({ path: path })
    }
  }
}
</script>
