<template>
  <div style="height:100vh;width:100%">
    <div id="container" />
    <div id="result">根据起点和终点经纬度驾车导航路线</div>
  </div>
</template>

<script>
import BMapGL from 'BMapGL'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      BMapGL: BMapGL
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      var map = new this.BMapGL.Map('container')
      map.centerAndZoom(new this.BMapGL.Point(116.404, 39.915), 11)
      var p1 = new this.BMapGL.Point(116.301934, 39.977552)
      var p2 = new this.BMapGL.Point(116.508328, 39.919141)
      var driving = new this.BMapGL.DrivingRoute(map, { renderOptions: { map: map, autoViewport: true }})
      driving.search(p1, p2)
    })
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
body, html {
			width: 100%;
			height: 100%;
			margin:0;
			font-family:"微软雅黑";
		}
		#container{
			width:100%;
			height:100%;
        }
        #result{
          margin-left: 10px;
            // position: fixed;
            // top: 10px;
            // left: 20px;
            width: 300px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background: #fff;
            box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);
            border-radius: 7px;
            z-index: 99;
        }
</style>
