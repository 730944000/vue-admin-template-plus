<template>
  <div>
    <el-header>
      <logo :collapse="isCollapse" class="logo-box" />
      <div class="nav-box">
        <div
          v-for="(item, index) in navList"
          :key="item.path"
          :class="['nav-box-item', { active: idx == item.index }]"
          @click="changeIdx(index)"
        >
          {{ item.value }}
        </div>
      </div>
      <div class="right-menu">
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar">
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item @click.native="toHome"> Home </el-dropdown-item>
            </router-link>
            <a target="_blank" href="https://github.com/730944000/vue-admin-template-plus">
              <el-dropdown-item>Github</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click.native="logout">
              <span style="display: block">Log Out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

    </el-header>
  </div>
</template>

<script>
import Logo from './Logo'
import { mapGetters } from 'vuex'
import { resetRouter } from '@/router'
export default {
  name: 'Header',
  components: { Logo },
  props: {},
  data() {
    return {
      idx: 0,
      navList: [
        { index: 0, path: '/home', value: '首页' },
        { index: 1, path: '/fileread', value: '模块1' },
        { index: 2, path: '/routerexp', value: '模块2' }
      ],
      routes: [] // 侧边栏路由
    }
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar']),
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  watch: {},
  async created() {
    // 页面刷新后重定向到当前路由
    const currentRouteNode = this.$route.matched[0]
    console.log(currentRouteNode.meta.module)
    if (currentRouteNode) {
      this.idx = currentRouteNode.meta.module
      this.resetSiderRoutes()
    }
  },
  mounted() {
  },
  methods: {
    toHome() {
      this.idx = 0
      this.$store.dispatch('app/changeNavIdx', 0)
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      await this.$store.dispatch('app/changeNavIdx', 0)
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    changeIdx(index) {
      this.idx = index
      this.resetSiderRoutes()
      if (this.idx === 0) {
        this.$router.push('/home')
      }
      this.routes.forEach((e) => {
        if (e?.redirect && e.meta?.isFirst) {
          this.$router.push(e.path)
        }
      })
    },
    // 更新侧边栏路由
    async resetSiderRoutes() {
      this.routes = this.$router.options.routes.filter((e) => {
        return e.meta.module === this.idx || e.meta.module === 0
      })
      // 通知布局改变，为0时无侧边栏
      await this.$store.dispatch('app/changeNavIdx', this.idx)
      // 改变子模块的路由
      await this.$store.dispatch('app/changeNavList', this.routes)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.right-menu {
  margin-left: auto;
  margin-right: 20px;
  height: 60px;
  display: flex;
  align-items: center;

  &:focus {
    outline: none;
  }

  .right-menu-item {
    display: inline-block;
    padding: 0 8px;
    height: 100%;
    font-size: 18px;
    color: #5a5e66;
    vertical-align: text-bottom;

    &.hover-effect {
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }
  }

  .avatar-container {
    margin-right: 30px;

    .avatar-wrapper {
      margin-top: 5px;
      position: relative;

      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }

      .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
.el-header {
  padding: 0;
  display: flex;
  align-items: center;
  height: 60px !important;
  width: 100%;
  background: $menuHover;
  z-index: 999;
  .logo-box {
    width: 210px;
    height: 100%;
  }
  .nav-box {
    width: 1200px;
    overflow: hidden;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    .nav-box-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 100%;
    }
  }
}
.active {
  width: 150px;
  height: 100%;
  color: $menuActiveText;
  background: $menuBg;
}
</style>
