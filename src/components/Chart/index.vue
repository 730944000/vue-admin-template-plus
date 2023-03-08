<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: 'chart',
      require: true
    },
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '95%'
    },
    height: {
      type: String,
      default: '100%'
    },
    // 父组件传递过来的图表数据
    options: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      // Echarts实例
      chart: null,
      theme: null
    }
  },
  watch: {
    /* 如果图表数据是后台获取的，监听父组件中的数据变化，重新触发Echarts */
    options: {
      deep: true,
      handler() {
        this.initChart()
      }
    }
  },
  mounted() {
    /* 图表初始化 */
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    /* 释放图表实例 */
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(document.getElementById(this.id), 'theme')
      console.log(this.chart)
      this.chart.setOption(this.options)
      window.addEventListener('resize', () => {
        this.chart.resize()
      })
    }
  }
}
</script>

<style scoped lang='scss'>

</style>
