<template>
  <div class="content-box">
    <img width="100%" height="100%" :src="require('@/assets/img/home.jpg')" mode="scaleToFill">
    <div class="content">
      <div class="left">
        <div class="small-module-content">
          <Chart id="barOption" :options="barOption" />
        </div>
        <div class="small-module-content">
          <Chart id="lineOption" :options="lineOption" />
        </div>
      </div>
      <div class="center">
        <Chart id="mapOption" :options="mapOption" />
      </div>
      <div class="right">
        <div class="small-module-content">
          <Chart id="pieOption" :options="pieOption" />
        </div>
        <div class="small-module-content">
          <Chart id="radarOption" :options="radarOption" />
        </div>
      </div>
    </div>
    <div class="bottom">
      <Chart id="composeOption" :options="composeOption" />
    </div>
  </div>
</template>

<script>
import Chart from '@/components/Chart'
import chinaMap from '@/assets/js/china'
export default {
  name: 'Home',
  components: { Chart },
  props: {},
  data() {
    return {
      barOption: {
        title: {
          text: 'Income',
          textStyle: {
            color: 'white'
          }
        },
        grid: {
          left: '10%',
          right: '10%'
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          data: ['first season', 'second season', 'third season', 'fourth season'],
          axisLabel: {
            color: 'white',
            formatter: (val) => {
              return val.split(' ')[0] + '\n' + val.split(' ')[1]
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: 'white',
            formatter: (val) => {
              return val + '亿'
            }
          }
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      },
      lineOption: {
        title: {
          text: 'Stacked Line',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
          type: 'scroll',
          textStyle: {
            color: '#fff'
          },
          top: 25
        },
        grid: {
          left: '10%',
          right: '10%',
          bottom: '10%'
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel: {
            color: 'white'
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: 'white'
          }
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },
      pieOption: {
        title: {
          text: 'Referer of a Website',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          show: false
        },
        grid: {
          left: 40,
          right: 40
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            label: {
              color: 'white'
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]

          }
        ]
      },
      radarOption: {
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        title: {
          left: 'center',
          text: 'Basic Radar Chart',
          textStyle: {
            color: 'white'
          }
        },
        tooltip: {
          show: true
        },
        legend: {
          data: ['Allocated Budget', 'Actual Spending'],
          formatter: (name) => {
            console.log(name)
            return name.split(' ')[0] + '\n' + name.split(' ')[1]
          },
          orient: 'vertical',
          left: 0,
          icon: 'circle',
          textStyle: {
            color: 'white'
          }
        },
        radar: {
          nameGap: 5,
          // shape: 'circle',
          radius: '60%',
          indicator: [
            { name: 'Sales', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'Technology', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 }
          ],
          itemStyle: {
            color: 'white'
          }
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: 'Allocated Budget'
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: 'Actual Spending'
              }
            ]
          }
        ]
      },
      composeOption: {

      },
      mapOption: {
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        layoutCenter: ['50%', '58%'],
        layoutSize: 500,
        // 悬浮窗
        tooltip: {
          trigger: 'item'
        },
        // echarts大小位置
        grid: {
          left: '0px',
          right: '0px'
        },
        geo: {

          map: 'china',
          zoom: 1.2,
          center: [102.848234, 32.82333],
          scaleLimit: {
            min: 0.8
          },
          label: {
            color: '#fff',
            show: true
          },
          emphasis: {
            label: {
              color: '#fff',
              show: true
            },
            itemStyle: {
              areaColor: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#073684' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#2B91B7' // 100% 处的颜色
                  }
                ]
              }
            }
          },
          roam: false,
          itemStyle: {
            areaColor: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#073684' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#061E3D' // 100% 处的颜色
                }
              ]
            },
            borderColor: this.$echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: '#00F6FF'
                },
                {
                  offset: 1,
                  color: '#87ADCB'
                }
              ],
              false
            ),
            shadowColor: 'rgba(10,76,139,1)',
            shadowOffsetY: 0,
            shadowBlur: 60,
            borderWidth: 1
          },
          tooltip: {
            show: false
          }
        },
        // 要显示的散点数据
        series: [
          {
            name: '',
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: 'red' // arrow箭头的颜色
            },
            lineStyle: {
              color: '#fff',
              width: 0,
              curveness: 0.2
            },
            data: [
              {
                fromName: '北京',
                toName: '上海',
                coords: [
                  [116.4551, 40.2539],
                  [121.4648, 31.2891]
                ]
              },
              {
                fromName: '上海',
                toName: '北京',
                coords: [
                  [121.4648, 31.2891],
                  [116.4551, 40.2539]
                ]
              },
              {
                fromName: '北京',
                toName: '广州',
                coords: [
                  [116.4551, 40.2539],
                  [113.5107, 23.2196]
                ]
              },
              {
                fromName: '广州',
                toName: '北京',
                coords: [
                  [113.5107, 23.2196],
                  [116.4551, 40.2539]
                ]
              },
              {
                fromName: '北京',
                toName: '成都',
                coords: [
                  [116.4551, 40.2539],
                  [103.9526, 30.7617]
                ]
              },
              {
                fromName: '成都',
                toName: '北京',
                coords: [
                  [103.9526, 30.7617],
                  [116.4551, 40.2539]
                ]
              },
              {
                fromName: '成都',
                toName: '新疆维吾尔自治区',
                coords: [
                  [103.9526, 30.7617],
                  [85.294711, 41.371801]
                ]
              },
              {
                fromName: ' 新疆维吾尔自治区',
                toName: '成都',
                coords: [
                  [85.294711, 41.371801],
                  [103.9526, 30.7617]
                ]
              }
            ]
          },
          {
            name: '',
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
              symbolSize: 15
            },
            lineStyle: {
              color: '#fff',
              width: 1,
              opacity: 0.6,
              curveness: 0.2
            },
            data: [
              {
                fromName: '北京',
                toName: '上海',
                coords: [
                  [116.4551, 40.2539],
                  [121.4648, 31.2891]
                ]
              },
              {
                fromName: '上海',
                toName: '北京',
                coords: [
                  [121.4648, 31.2891],
                  [116.4551, 40.2539]
                ]
              },
              {
                fromName: '北京',
                toName: '广州',
                coords: [
                  [116.4551, 40.2539],
                  [113.5107, 23.2196]
                ]
              },
              {
                fromName: '广州',
                toName: '北京',
                coords: [
                  [113.5107, 23.2196],
                  [116.4551, 40.2539]
                ]
              },
              {
                fromName: '北京',
                toName: '成都',
                coords: [
                  [116.4551, 40.2539],
                  [103.9526, 30.7617]
                ]
              },
              {
                fromName: '成都',
                toName: '北京',
                coords: [
                  [103.9526, 30.7617],
                  [116.4551, 40.2539]
                ]
              },
              {
                fromName: '成都',
                toName: '新疆维吾尔自治区',
                coords: [
                  [103.9526, 30.7617],
                  [85.294711, 41.371801]
                ]
              },
              {
                fromName: ' 新疆维吾尔自治区',
                toName: '成都',
                coords: [
                  [85.294711, 41.371801],
                  [103.9526, 30.7617]
                ]
              }
            ]
          }
        ]
      }

    }
  },
  computed: {},
  watch: {},
  created() {

  },
  mounted() {
    this.compseChartInit()
  },
  methods: {
    compseChartInit() {
      const category = []
      let dottedBase = +new Date()
      const lineData = []
      const barData = []
      for (let i = 0; i < 20; i++) {
        const date = new Date((dottedBase += 3600 * 24 * 1000))
        category.push(
          [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
        )
        const b = Math.random() * 200
        const d = Math.random() * 200
        barData.push(b)
        lineData.push(d + b)
      }
      this.composeOption = {
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: 0,
          right: 0
        },
        legend: {
          data: ['line', 'bar'],
          textStyle: {
            color: '#ccc'
          },
          right: 40
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        yAxis: {
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        series: [
          {
            name: 'line',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 15,
            data: lineData
          },
          {
            name: 'bar',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              borderRadius: 5,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#14c8d4' },
                { offset: 1, color: '#43eec6' }
              ])
            },
            data: barData
          },
          {
            name: 'line',
            type: 'bar',
            barGap: '-100%',
            barWidth: 10,
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(20,200,212,0.5)' },
                { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
                { offset: 1, color: 'rgba(20,200,212,0)' }
              ])
            },
            z: -12,
            data: lineData
          },
          {
            name: 'dotted',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
              color: '#0f375f'
            },
            symbolRepeat: true,
            symbolSize: [12, 4],
            symbolMargin: 1,
            z: -10,
            data: lineData
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.center,
.left,
.right {
  height: 500px;
  margin-top: 30px;
}

.left,
.right {
  width: 22%;
   .small-module-content {
    height: 50%;
    width: 100%;
  }
}
.center {
  width: 50%;
  border: 3px solid rgba(2, 50, 66,0.3);

}
.bottom {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 600px;
  width: 100%;
  height: calc(100% - 600px) !important;
}
.content-box {
  height: 100%;
  background: black;
  display: flex;
  justify-content: center;
}
.content {
  position: fixed;
  top: 60px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 500px;
}
img {
  opacity: 0.2;
}
</style>
