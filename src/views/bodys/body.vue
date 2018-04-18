<template>
  <div :is="component">
    123132
  </div>
</template>
<script>
export default {
  data() {
    return {
      component: 'z-singer'
    }
  },
  created() {
    this.getPageInfo(this.$route.params.id)
  },
  methods: {
    getPageInfo(url) {
      this.component = url === 'index' ? 'z-singer' : `z-${url}`
    }
  },
  watch: {
    $route(to, from) {
      this.getPageInfo(to.params.id)
    }
  },
  components: {
    'z-singer': resolve => {
      require(['@/views/singers/normal'], resolve)
    },
    'z-detail': resolve => {
      require(['@/views/details/normal'], resolve)
    },
    'z-list': resolve => {
      require(['@/views/lists/normal'], resolve)
    }
  }
}
</script>
