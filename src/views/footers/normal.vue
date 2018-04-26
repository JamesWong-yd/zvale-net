<template>
  <div class="zvale-footer" :style="footerStyle">
    <div class="zvale-footer-box">
      <div class="zvale-footer-container">
        <div class="zvale-footer-nav">
          <dl :class="{zvaleflex:footerInfo.flex}" v-for="(nav, index) in footerInfo.nav" :key="index">
            <dt :style="navTitleColor">{{nav.title}}</dt>
            <dd v-for="(navitem, index) in nav.list" :key="index">
              <span :style="navListColor" @click="currentPath(navitem.path)">{{navitem.name}}</span>
            </dd>
          </dl>
        </div>
        <div class="zvale-footer-contact">
          <div v-if="footerInfo.contactType === 'text'">
            <h2 :style="phoneStyle">{{footerInfo.phone}}</h2>
            <p :style="workdayStyle">{{footerInfo.workday}}</p>
            <p :style="otherColor">{{footerInfo.other}}</p>
          </div>
          <div v-else class="zvale-footer-img">
            <img :src="imageUrl" alt="" />
            <p :style="otherColor">{{footerInfo.other}}</p>
          </div>
        </div>
      </div>
      <div class="zvale-footer-copyright">
        <p class="">{{ footerInfo.company }}</p>
        <p>
          <a href="http://www.miitbeian.gov.cn">{{ footerInfo.registerNo }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    footerInfo: {
      background: {
        type: String,
        default: '#ccc'
      },
      navTitleColor: {
        type: String,
        default: '#333'
      },
      navListColor: {
        type: String,
        default: '#222'
      },
      navHoverColor: {
        type: String,
        default: '#f00'
      },
      company: {
        type: String,
        default: '请输入你的公司或版权信息'
      },
      registerNo: {
        type: String,
        default: '请输入你的备案号'
      },
      flex: Boolean,
      nav: Array,
      phone: String,
      phoneColor: String,
      phoneSize: String,
      workday: String,
      workdayColor: String,
      workdaySize: String,
      other: String,
      otherColor: String,
      contactType: String,
      image: String
    }
  },
  computed: {
    footerStyle() {
      return {
        background: this.footerInfo.background
      }
    },
    navTitleColor() {
      return {
        color: this.footerInfo.navTitleColor
      }
    },
    navListColor() {
      return {
        color: this.footerInfo.navListColor
      }
    },
    navHoverColor() {
      return {
        color: this.footerInfo.navHoverColor
      }
    },
    phoneStyle() {
      return {
        color: this.footerInfo.phoneColor,
        fontSize: this.footerInfo.phoneSize
      }
    },
    workdayStyle() {
      return {
        color: this.footerInfo.workdayColor,
        fontSize: this.footerInfo.workdaySize
      }
    },
    otherColor() {
      return {
        color: this.footerInfo.otherColor
      }
    },
    imageUrl() {
      // return url + this.footerInfo.image
      return this.footerInfo.image
    }
  },
  methods: {
    currentPath(path) {
      this.$router.push({ path: path })
    }
  }
}
</script>

<style lang="stylus" scoped>
.zvale-footer {
  width: 100%;
  background: #fff;
}

.zvale-footer-box {
  min-width: 1210px;
  max-width: 1520px;
  margin: 0 auto;
  padding: 30px 0 10px;
}

.zvale-footer-container {
  border-bottom: 1px solid #666;
  display: flex;
}

.zvale-footer-nav {
  flex: 8;
  display: flex;
}

.zvale-footer-nav dl {
  margin: 10px;
  width: 200px;
}
.zvaleflex{
  flex:1
}

.zvale-footer-nav dt {
  line-height: 2.5;
  padding: 5px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
}

.zvale-footer-nav dd {
  line-height: 2;
  margin: 5px 0;
}

.zvale-footer-nav dd span {
  padding: 5px;
}

.zvale-footer-nav dd span:hover {
  cursor: pointer;
}

.zvale-footer-contact {
  flex: 4;
  margin: 10px;
  justify-content: flex-end;
  text-align: right;
  display: flex;
  align-items: center;
}

.zvale-footer-contact h2 {
  font-size: 26px;
  line-height: 1;
  margin: 0;
  padding-top: 25px;
}

.zvale-footer-copyright {
  display: flex;
}

.zvale-footer-copyright p {
  flex: 1;
  margin: 10px 10px 0;
}

.zvale-footer-copyright p:last-child {
  text-align: right;
  color: #333;
}

.zvale-footer-copyright a {
  list-style: none;
  text-decoration: none;
  outline: #333;
  color: #333;
}
</style>
