<template>
  <div>
    <header :is="headerComponent" :headerInfo="header.headerInfo"></header>
    <main class="zvale-main">
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
          background: '#8BC34A',
          logoType: 'image',
          logoContent: '../../../static/images/logo-min.png',
          nav: [
            { path: '/index', name: '菜单1' },
            { path: '/list', name: '菜单2' },
            { path: '/detail', name: '菜单3' }
          ],
          color: '#fff',
          activeNavType: 'background', // border \ text \ background
          activeNavColor: 'red',
          activeNavOtherColor: '#dac',
          type: 'normal'
        }
      },
      footer: {
        footerInfo: {
          background: '#8BC34A',
          company: 'zvale',
          registerNo: '粤12390812903-1',
          navTitleColor: '#DCEDC8',
          navListColor: '#FFFFFF',
          navHoverColor: '',
          flex: false,
          nav: [
            {
              title: '这里是导航1组',
              list: [
                { path: '/index', name: '菜单1' },
                { path: '/list', name: '菜单2' },
                { path: '/detail', name: '菜单3' },
                { path: '/list', name: '菜单4' }
              ]
            },
            {
              title: '这里是导航2组',
              list: [
                { path: '/index', name: '菜单11' },
                { path: '/list', name: '菜单21' },
                { path: '/detail', name: '菜单31' },
                { path: '/list', name: '菜单41' }
              ]
            },
            {
              title: '这里是导航3组',
              list: [
                { path: '/index', name: '菜单12' },
                { path: '/list', name: '菜单22' },
                { path: '/detail', name: '菜单32' },
                { path: '/liaaast', name: '菜单42' }
              ]
            }
          ],
          phone: '12392739879',
          phoneColor: '#fff',
          phoneSize: '30px',
          workday: '晚上八点半到九点钟',
          workdayColor: '#fff',
          workdaySize: '16px',
          other: 'asdsad',
          otherColor: '#fff',
          contactType: 'image',
          image: '../../static/images/logo-min.png',
          type: 'normal'
        }
      }
    }
  },
  computed: {
    headerComponent() {
      return `header-${this.header.headerInfo.type}`
    },
    footerComponent() {
      return `footer-${this.footer.footerInfo.type}`
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

<style scoped>
.zvale-main {
  min-height: 500px;
  text-align: center;
  width: 100%;
}
</style>
