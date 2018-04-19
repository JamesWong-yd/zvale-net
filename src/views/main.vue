<template>
  <div>
    <header :is="headerComponent" :headerInfo="header.headerInfo"></header>
    <main>
      <router-view />
    </main>
    <footer :is="footerComponent" :footerInfo="footer.footerInfo"></footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      header: {
        headerInfo: {
          background: '#ccc',
          logo: {
            type: 'image',
            content: '../../../static/images/logo-min.png'
          },
          nav: [
            { path: '/index', name: '菜单1' },
            { path: '/list', name: '菜单2' },
            { path: '/detail', name: '菜单3' }
          ],
          color: '#fff',
          activeNav: {
            type: 'background', // border \ text \ background
            color: 'red',
            otherColor: '#dac'
          }
        },
        type: 'normal'
      },
      footer: {
        footerInfo: '',
        type: 'normal'
      }
    }
  },
  computed: {
    headerComponent() {
      return `header-${this.header.type}`
    },
    footerComponent() {
      return `footer-${this.header.type}`
    }
  },
  created() {},
  methods: {
    getNetInfo() {}
  },
  components: {
    'header-normal': resolve => {
      require(['@/views/headers/normal'], resolve)
    },
    'footer-normal': resolve => {
      require(['@/views/footers/normal'], resolve)
    }
  }
}
</script>
