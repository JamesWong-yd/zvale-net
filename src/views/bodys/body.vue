<template>
  <div :is="component"></div>
</template>
<script>
export default {
  data() {
    return {
      component: 'Zsinger'
    }
  },
  created() {
    this.component = `Z${this.$route.params.id}`
  },
  watch: {
    $route(to, from) {
      this.component = `Z${to.params.id}`
    }
  },
  components: {
    Zsinger: resolve => {
      require(['@/views/singers/normal'], resolve)
    },
    Zdetail: resolve => {
      require(['@/views/details/normal'], resolve)
    },
    Zlist: resolve => {
      require(['@/views/lists/normal'], resolve)
    }
  }
}
</script>
