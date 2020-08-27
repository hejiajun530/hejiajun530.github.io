<template>
  <div class="echarts">
    <!-- 柱状图 -->
    <div
      class="echarts-bar"
      ref="bar"
      v-if="type == 'bar'"
    ></div>
    <div
      class="echarts-barNew"
      ref="barNew"
      v-if="type == 'barNew'"
    ></div>
    <!-- 线形图 -->
    <div
      class="echarts-line"
      ref="line"
      v-if="type == 'line'"
    ></div>
    <div
      class="echarts-lineNew"
      ref="lineNew"
      v-if="type == 'lineNew'"
    ></div>
    <!-- 饼状图 -->
    <div
      class="echarts-pie"
      ref="pie"
      v-if="type == 'pie'"
    ></div>
    <div
      class="echarts-pieNew"
      ref="pieNew"
      v-if="type == 'pieNew'"
    ></div>
  </div>
</template>
<script>
export default {
  props: ["type", "data"],
  data() {
    return {};
  },
  mounted() {
    var _self = this;
    if (_self.type == "bar") {
      _self.initBarEcharts();
    } else if (_self.type == "barNew") {
      _self.initBarNewEcharts();
    } else if (_self.type == "line") {
      _self.initLineEcharts();
    } else if (_self.type == "lineNew") {
      _self.initLineNewEcharts();
    } else if (_self.type == "pie") {
      _self.initPieEcharts();
    } else if (_self.type == "pieNew") {
      _self.initPieNewEcharts();
    }
  },
  methods: {
    // 柱状图
    initBarEcharts() {
      var _self = this;
      let myBarEcharts = _self.$echarts.init(_self.$refs.bar);
      myBarEcharts.setOption({
        // 柱子 颜色
        color: ["#2f89cf"],
        tooltip: {
          trigger: "axis", // 坐标轴指示器，坐标轴触发有效 item 主要再散点图、饼图..触发  axis 主要再柱状图、折线图..触发  none  不触发
          axisPointer: {
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        // 网格大小
        grid: {
          left: "1%",
          top: "10px",
          right: "0%",
          bottom: "4%",
          containLabel: true
        },
        // 横坐标
        xAxis: [
          {
            type: "category",
            data: _self.data.name,
            axisTick: {
              alignWithLabel: true
            },
            // 设置x轴标签文字样式
            // x轴的文字颜色和大小
            axisLabel: {
              color: "rgba(255, 255, 255, .6)",
              fontSize: "10",
              rotate: 45
            },
            //  x轴样式不显示
            axisLine: {
              // show: false,
              lineStyle: {
                color: "rgba(255,255,255,.3)"
                // width: 1,
                // type: 'solid'
              }
            }
          }
        ],
        // 纵坐标
        yAxis: [
          {
            type: "value",
            // y轴文字颜色和大小
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            },
            // y轴线条样式
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.3)"
                // width: 1,
                // type: 'solid'
              }
            },
            // y轴分割线样式
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.3)"
              }
            }
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            // 修改柱子宽度
            barWidth: "45%",
            data: _self.data.value,
            // 修改柱子样式
            itemStyle: {
              barBorderRadius: 5
            }
          }
        ]
      });
    },
    // 柱状图2
    initBarNewEcharts() {
      var _self = this;
      var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
      let myBarEcharts = _self.$echarts.init(_self.$refs.barNew);
      myBarEcharts.setOption({
        grid: {
          left: "1%",
          top: "10px",
          right: "0%",
          bottom: "4%",
          containLabel: true
        },
        xAxis: [
          {
            show: false
          }
        ],
        yAxis: [
          {
            type: "category",
            inverse: true,
            data: _self.data.name,
            // y轴文字颜色和大小
            axisLabel: {
              color: "#fff"
            },
            // y轴线条样式
            axisLine: {
              show: false
            },
            // y轴刻度
            axisTick: {
              show: false
            }
          },
          {
            inverse: true,
            data: _self.data.value,
            // y轴文字颜色和大小
            axisLabel: {
              color: "#fff"
            },
            // y轴线条样式
            axisLine: {
              show: false
            },
            // y轴刻度
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "框",
            type: "bar",
            barCategoryGap: 45,
            barWidth: 13,
            yAxisIndex: 0,
            data: _self.data.all,
            itemStyle: {
              color: "none",
              borderColor: "#00c1de",
              borderWidth: 3,
              barBorderRadius: 15
            }
          },
          {
            name: "跳",
            type: "bar",
            data: _self.data.baifenbi,
            yAxisIndex: 1,
            // 修改第一根柱子的圆角
            itemStyle: {
              barBorderRadius: 15,
              // 此时的color 可以修改柱子的颜色
              color: function(params) {
                // params 传进来的是柱子对象
                // console.log(params);
                // dataIndex 是当前柱子的索引号
                return myColor[params.dataIndex];
              }
            },
            // 柱子间的距离
            barCategoryGap: 50,
            // 柱子的跨度
            barWidth: 10,
            // 显示柱子里的文字
            label: {
              show: true,
              position: "inside",
              // {c} 会自动的解析为 数据  data里面的数据
              formatter: "{c}%"
            }
          }
        ]
      });
    },
    // 线型图
    initLineEcharts() {
      var _self = this;
      var myLineEcharts = _self.$echarts.init(_self.$refs.line);
      myLineEcharts.setOption({
        // 通过这个color修改两条线的颜色
        color: ["#00f2f1", "#ed3f35"],
        legend: {
          textStyle: {
            color: "#4c9bfd"
          },
          right: "10%" // 距离右边10%
        },
        tooltip: {
          trigger: "axis",
          // 坐标轴指示器，坐标轴触发有效
          axisPointer: {
            type: "line" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "0%",
          top: "30px",
          right: "4%",
          bottom: "4%",
          containLabel: true
          // show: true,// 显示边框
          // borderColor: '#012f4a',// 边框颜色
          // containLabel: true // 包含刻度文字在内
        },
        xAxis: [
          {
            type: "category",
            data: _self.data.value,
            // y轴文字颜色和大小
            axisLabel: {
              color: "#fff",
              fontSize: "8"
            },
            // y轴线条样式
            axisLine: {
              show: false
            },
            // y轴刻度
            axisTick: {
              show: false
            },
            boundaryGap: false // 去除轴内间距
          }
        ],
        yAxis: [
          {
            type: "value",
            // y轴文字颜色和大小
            axisLabel: {
              color: "#fff"
            },
            // y轴线条样式
            axisLine: {
              show: false
            },
            // y轴刻度
            axisTick: {
              show: false
            },
            splitLine: {
              color: "#012f4a"
            }
          }
        ],
        series: [
          {
            name: "新增粉丝",
            type: "line",
            data: _self.data.yearData[0].data[0],
            // 折线修饰为圆滑
            smooth: true
          },
          {
            name: "新增游客",
            type: "line",
            data: _self.data.yearData[0].data[1],
            // 折线修饰为圆滑
            smooth: true
          }
        ]
      });
    },
    // 线型图
    initLineNewEcharts() {
      var _self = this;
      let myLineNewEcharts = _self.$echarts.init(_self.$refs.lineNew);
      myLineNewEcharts.setOption({
        // 通过这个color修改两条线的颜色
        color: ["#0184d5", "#00d887"],
        legend: {
          textStyle: {
            color: "#4c9bfd"
          },
          right: "10%" // 距离右边10%
        },
        tooltip: {
          trigger: "axis",
          // 坐标轴指示器，坐标轴触发有效
          axisPointer: {
            type: "line" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "0%",
          top: "30px",
          right: "4%",
          bottom: "4%",
          containLabel: true
          // show: true,// 显示边框
          // borderColor: '#012f4a',// 边框颜色
          // containLabel: true // 包含刻度文字在内
        },
        xAxis: [
          {
            type: "category",
            data: [
              "01",
              "02",
              "03",
              "04",
              "05",
              "06",
              "07",
              "08",
              "09",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "26",
              "28",
              "29",
              "30"
            ],
            // y轴文字颜色和大小
            axisLabel: {
              color: "#fff",
              fontSize: "8"
            },
            // y轴线条样式
            axisLine: {
              show: false
            },
            // y轴刻度
            axisTick: {
              show: false
            },
            boundaryGap: false // 去除轴内间距
          }
        ],
        yAxis: [
          {
            type: "value",
            // y轴文字颜色和大小
            axisLabel: {
              color: "#fff"
            },
            // y轴线条样式
            axisLine: {
              show: false
            },
            // y轴刻度
            axisTick: {
              show: false
            },
            splitLine: {
              color: "#012f4a"
            }
          }
        ],
        series: [
          {
            name: "播放量",
            type: "line",
            data: [
              30,
              40,
              30,
              40,
              30,
              40,
              30,
              60,
              20,
              40,
              30,
              40,
              30,
              40,
              30,
              40,
              30,
              60,
              20,
              40,
              30,
              40,
              30,
              40,
              30,
              40,
              20,
              60,
              50,
              40
            ],
            // 折线修饰为圆滑
            smooth: true,
            // 设置拐点 小圆点
            symbol: "circle",
            // 拐点大小
            symbolSize: 2,
            areaStyle: {
              // 渐变色，只需要复制即可
              // color: new echarts.graphic.LinearGradient(
              //   0,
              //   0,
              //   0,
              //   1,
              //   [
              //     {
              //       offset: 0,
              //       color: "rgba(1, 132, 213, 0.8)" // 渐变色的起始颜色
              //     },
              //     {
              //       offset: 0.8,
              //       color: "rgba(1, 132, 213, 0.2)" // 渐变线的结束颜色
              //     }
              //   ],
              //   false
              // ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            }
          },
          {
            name: "转发量",
            type: "line",
            data: [
              130,
              10,
              20,
              40,
              30,
              40,
              80,
              60,
              20,
              40,
              90,
              40,
              20,
              140,
              30,
              40,
              130,
              20,
              20,
              40,
              80,
              70,
              30,
              40,
              30,
              120,
              20,
              99,
              50,
              20
            ],
            // 折线修饰为圆滑
            smooth: true,
            // 设置拐点 小圆点
            symbol: "circle",
            // 拐点大小
            symbolSize: 2,
            areaStyle: {
              normal: {
                // color: new echarts.graphic.LinearGradient(
                //   0,
                //   0,
                //   0,
                //   1,
                //   [
                //     {
                //       offset: 0,
                //       color: "rgba(0, 216, 135, .8)"
                //     },
                //     {
                //       offset: 0.8,
                //       color: "rgba(0, 216, 135, 0.2)"
                //     }
                //   ],
                //   false
                // ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
              }
            }
          }
        ]
      });
    },
    // 饼状图
    initPieEcharts() {
      var _self = this;
      var myPieEcharts = _self.$echarts.init(_self.$refs.pie);
      myPieEcharts.setOption({
        // color: [ "#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab", ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/> {b}:{c} ({d}%)"
        },
        legend: {
          left: 0,
          right: 0,
          bottom: 0,
          textStyle: {
            color: "#fff",
            fontSize: "10"
          },
          itemWidth: 15,
          itemHeight: 11
        },
        series: [
          {
            name: "年龄分布",
            data: _self.data,
            avoidLabelOverlap: false,
            type: "pie",
            radius: ["50%", "70%"],
            center: ["50%", "39%"],
            emphasis: {
              label: {
                show: true
              }
            },
            labelLine: {
              show: false
            },
            label: {
              show: false,
              position: "center"
            }
          }
        ]
      });
    },
    // 饼状图
    initPieNewEcharts() {
      var _self = this;
      let myPieNewEcharts = _self.$echarts.init(_self.$refs.pieNew);
      myPieNewEcharts.setOption({
        color: [
          "#006cff",
          "#60cda0",
          "#ed8884",
          "#ff9f7f",
          "#0096ff",
          "#9fe6b8",
          "#32c5e9",
          "#1d9dff"
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/> {b}:{c} ({d}%)"
        },
        legend: {
          top: "bottom",
          left: "center",
          textStyle: {
            color: "#fff",
            fontSize: "10"
          },
          itemWidth: 20,
          itemHeight: 11
        },
        series: [
          {
            name: "年龄分布",
            data: _self.data,
            type: "pie",
            radius: ["10%", "70%"],
            center: ["50%", "50%"],
            roseType: "area",
            label: {
              fontSize: 10
            },
            labelLine: {
              // 连接扇形图线长
              length: 6,
              // 连接文字线长
              length2: 8
            }
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
.echarts,
.echarts-bar,
.echarts-line,
.echarts-pie,
.echarts-barNew,
.echarts-lineNew,
.echarts-pieNew {
  width: 100%;
  height: 100%;
}
</style>