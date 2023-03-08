import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: { module: 0 },
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/layout/components/Home')
    }]

  },
  // {
  //   path: '/home',
  //   hidden: true,
  //   meta: { title: 'home', module: 0 },
  //   component: () => import('@/layout/components/Home')
  // },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
    meta: { title: 'login', module: 0 }
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
    meta: { title: '404', module: 0 }
  },

  /* 模块1路由 */
  {
    path: '/fileread',
    name: 'Module1',
    redirect: '/fileread/filereadexp',
    component: Layout,
    meta: { module: 1, isFirst: true },
    children: [{
      name: '/Filereadexp',
      path: 'filereadexp',
      component: () => import('@/views/filereadexp/index'),
      meta: { title: '文件读取示例', icon: 'dashboard' }
    }]
  },

  {
    path: '/3D',
    component: Layout,
    meta: { title: '3D与可视化', icon: 'el-icon-s-help', module: 1 },
    children: [
      {
        path: 'three',
        name: 'Three',
        component: () => import('@/views/three/index'),
        meta: { title: 'Three.js案例', icon: 'table' }
      },
      {
        path: 'map',
        name: 'Map',
        component: () => import('@/views/map/index'),
        meta: { title: '百度地图案例', icon: 'tree' }
      }
    ]
  },

  /* 模块2路由 */

  {
    path: '/routerexp',
    component: Layout,
    name: 'ROUTEREXP',
    redirect: '/routerexp/menu1/menu1-1',
    meta: {
      title: '路由嵌套案例',
      icon: 'nested',
      module: 2,
      isFirst: true
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: '菜单1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: '菜单1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: '菜单1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: '菜单1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: '菜单1-2-2' }
              }
            ]
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '菜单2' }
      }
    ]
  },

  {
    path: '/video',
    name: 'VEDIOEXP',
    component: Layout,
    meta: { module: 2 },
    children: [
      {
        path: 'index',
        name: 'Video',
        component: () => import('@/views/video/index'),
        meta: { title: '视频案例', icon: 'el-icon-video-camera-solid' }
      }
    ]
  }

  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true, meta: { module: 0 }}
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
  mode: 'history'
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
