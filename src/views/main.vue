<template>
  <div>
    <z-header></z-header>
    <main>
      <router-view />
    </main>
    <z-footer></z-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      header: '',
      footer: ''
    }
  },
  created() {},
  methods: {
    getNetInfo() {}
  },
  components: {
    'z-header': resolve => {
      require(['@/views/headers/normal'], resolve)
    },
    'z-footer': resolve => {
      require(['@/views/footers/normal'], resolve)
    }
  }
}
</script>
