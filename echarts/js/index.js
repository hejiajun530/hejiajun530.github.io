// 左侧第一个图表  柱状图
(function () {
  var myBar = echarts.init(document.querySelector('.bar .chart'));
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: 'axis',
      // 坐标轴指示器，坐标轴触发有效
      axisPointer: {
        type: 'shadow'// 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "1%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
      axisTick: {
        alignWithLabel: true
      },
      // 设置x轴标签文字样式
      // x轴的文字颜色和大小
      axisLabel: {
        color: 'rgba(255, 255, 255, .6)',
        fontSize: '12'
      },
      //  x轴样式不显示
      axisLine: {
        // show: false
        lineStyle: {
          color: 'rgba(255,255,255,.3)',
          // width: 1,
          // type: 'solid'
        }
      }
    }],
    yAxis: [{
      type: 'value',
      // y轴文字颜色和大小
      axisLabel: {
        color: 'rgba(255,255,255,.6)',
        fontSize: '12'
      },
      // y轴线条样式
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.3)',
          // width: 1,
          // type: 'solid'
        }
      },
      // y轴分割线样式
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.3)'
        }
      }
    }],
    series: [{
      name: '直接访问',
      type: 'bar',
      // 修改柱子宽度
      barWidth: '45%',
      data: [200, 300, 300, 900, 1500, 1200, 600],
      // 修改柱子样式
      itemStyle: {
        barBorderRadius: 5
      }
    }]
  };
  // 让图表跟随屏幕自适应
  window.addEventListener("resize", function () {
    myBar.resize();
  });
  myBar.setOption(option);
})();

// 左侧第二个图表  折线图
(function () {
  var yearData = [
    {
      year: "2020", // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: "2021", // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];
  var myBar = echarts.init(document.querySelector('.line .chart'));
  var option = {
    // 通过这个color修改两条线的颜色
    color: ["#00f2f1", "#ed3f35"],
    legend: {
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%' // 距离右边10%
    },
    tooltip: {
      trigger: 'axis',
      // 坐标轴指示器，坐标轴触发有效
      axisPointer: {
        type: 'line'// 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: '30px',
      right: "4%",
      bottom: "4%",
      containLabel: true
      // show: true,// 显示边框
      // borderColor: '#012f4a',// 边框颜色
      // containLabel: true // 包含刻度文字在内
    },
    xAxis: [{
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      // y轴文字颜色和大小
      axisLabel: {
        color: '#fff',
        fontSize: '8'
      },
      // y轴线条样式
      axisLine: {
        show: false
      },
      // y轴刻度
      axisTick: {
        show: false
      },
      boundaryGap: false  // 去除轴内间距
    }],
    yAxis: [{
      type: 'value',
      // y轴文字颜色和大小
      axisLabel: {
        color: '#4c9bfd'
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
        color: '#012f4a'
      }
    }],
    series: [{
      name: '新增粉丝',
      type: 'line',
      data: yearData[0].data[0],
      // 折线修饰为圆滑
      smooth: true,
    }, {
      name: '新增游客',
      type: 'line',
      data: yearData[0].data[1],
      // 折线修饰为圆滑
      smooth: true,
    }]
  };
  // 让图表跟随屏幕自适应
  window.addEventListener("resize", function () {
    myBar.resize();
  });
  myBar.setOption(option);
  // 5.点击切换效果
  $(".line h2").on("click", "a", function () {
    // alert(1);
    // console.log($(this).index());
    // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 需要重新渲染
    myBar.setOption(option);
  });
})();

// 左侧第三个图表  饼状图
(function () {
  var myBar = echarts.init(document.querySelector('.pie .chart'));
  var option = {
    // color: [ "#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab", ],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/> {b}:{c} ({d}%)'
    },
    legend: {
      bottom: 0,
      textStyle: {
        color: '#fff',
        fontSize: '8'
      },
      itemWidth: 20,
      itemHeight: 11
    },
    series: [{
      name: '年龄分布',
      data: [
        { value: 1, name: "0岁以下" },
        { value: 4, name: "20-29岁" },
        { value: 2, name: "30-39岁" },
        { value: 2, name: "40-49岁" },
        { value: 1, name: "50岁以上" }
      ],
      avoidLabelOverlap: false,
      type: 'pie',
      radius: ['50%', '60%'],
      center: ['50%', '50%'],
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
        position: 'center'
      }
    }]
  };
  // 让图表跟随屏幕自适应
  window.addEventListener("resize", function () {
    myBar.resize();
  });
  myBar.setOption(option);
})();

// 右侧第一个图表  柱状图
(function () {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  var myBar = echarts.init(document.querySelector('.bar1 .chart'));
  var option = {
    grid: {
      left: "1%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [{
      show: false
    }],
    yAxis: [{
      type: 'category',
      inverse: true,
      data: ['HTML5', 'CSS3', 'JavaScrip', 'VUE', 'NODE'],
      // y轴文字颜色和大小
      axisLabel: {
        color: '#fff'
      },
      // y轴线条样式
      axisLine: {
        show: false
      },
      // y轴刻度
      axisTick: {
        show: false
      }
    }, {
      inverse: true,
      data: [702, 350, 610, 793, 664],
      // y轴文字颜色和大小
      axisLabel: {
        color: '#fff'
      },
      // y轴线条样式
      axisLine: {
        show: false
      },
      // y轴刻度
      axisTick: {
        show: false
      }
    }],
    series: [{
      name: '跳',
      type: 'bar',
      data: [70, 34, 60, 78, 69],
      yAxisIndex: 0,
      // 修改第一根柱子的圆角
      itemStyle: {
        barBorderRadius: 20,
        // 此时的color 可以修改柱子的颜色
        color: function (params) {
          // params 传进来的是柱子对象
          console.log(params);
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
        position: 'inside',
        // {c} 会自动的解析为 数据  data里面的数据
        formatter: "{c}%"
      }
    },
    {
      name: "框",
      type: "bar",
      barCategoryGap: 45,
      barWidth: 13,
      yAxisIndex: 1,
      data: [100, 100, 100, 100, 100],
      itemStyle: {
        color: "none",
        borderColor: "#00c1de",
        borderWidth: 3,
        barBorderRadius: 15
      }
    }]
  };
  // 让图表跟随屏幕自适应
  window.addEventListener("resize", function () {
    myBar.resize();
  });
  myBar.setOption(option);
})();

// 右侧第二个图表  折线图
(function () {
  var myBar = echarts.init(document.querySelector('.line1 .chart'));
  var option = {
    // 通过这个color修改两条线的颜色
    color: ["#0184d5", "#00d887"],
    legend: {
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%' // 距离右边10%
    },
    tooltip: {
      trigger: 'axis',
      // 坐标轴指示器，坐标轴触发有效
      axisPointer: {
        type: 'line'// 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: '30px',
      right: "4%",
      bottom: "4%",
      containLabel: true
      // show: true,// 显示边框
      // borderColor: '#012f4a',// 边框颜色
      // containLabel: true // 包含刻度文字在内
    },
    xAxis: [{
      type: 'category',
      data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
      // y轴文字颜色和大小
      axisLabel: {
        color: '#fff',
        fontSize: '8'
      },
      // y轴线条样式
      axisLine: {
        show: false
      },
      // y轴刻度
      axisTick: {
        show: false
      },
      boundaryGap: false  // 去除轴内间距
    }],
    yAxis: [{
      type: 'value',
      // y轴文字颜色和大小
      axisLabel: {
        color: '#4c9bfd'
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
        color: '#012f4a'
      }
    }],
    series: [{
      name: '播放量',
      type: 'line',
      data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
      // 折线修饰为圆滑
      smooth: true,
      // 设置拐点 小圆点
      symbol: "circle",
      // 拐点大小
      symbolSize: 2,
      areaStyle: {
        // 渐变色，只需要复制即可
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: "rgba(1, 132, 213, 0.8)"   // 渐变色的起始颜色
            },
            {
              offset: 0.8,
              color: "rgba(1, 132, 213, 0.2)"   // 渐变线的结束颜色
            }
          ],
          false
        ),
        shadowColor: "rgba(0, 0, 0, 0.1)"
      },
    }, {
      name: '转发量',
      type: 'line',
      data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
      // 折线修饰为圆滑
      smooth: true,
      // 设置拐点 小圆点
      symbol: "circle",
      // 拐点大小
      symbolSize: 2,
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(0, 216, 135, .8)"
              },
              {
                offset: 0.8,
                color: "rgba(0, 216, 135, 0.2)"
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        }
      },
    }]
  };
  // 让图表跟随屏幕自适应
  window.addEventListener("resize", function () {
    myBar.resize();
  });
  myBar.setOption(option);
})();

// 右侧第三个图表  饼状图
(function () {
  var myBar = echarts.init(document.querySelector('.pie1 .chart'));
  var option = {
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/> {b}:{c} ({d}%)'
    },
    legend: {
      top: 'bottom',
      left: 'center',
      textStyle: {
        color: '#fff',
        fontSize: '6'
      },
      itemWidth: 20,
      itemHeight: 11
    },
    series: [{
      name: '年龄分布',
      data: [
        { value: 20, name: '云南' },
        { value: 26, name: '北京' },
        { value: 24, name: '山东' },
        { value: 25, name: '河北' },
        { value: 20, name: '江苏' },
        { value: 25, name: '浙江' },
        { value: 30, name: '四川' },
        { value: 42, name: '湖北' }
      ],
      type: 'pie',
      radius: ['10%', '70%'],
      center: ['50%', '50%'],
      roseType: 'area',
      label: {
        fontSize: 10
      },
      labelLine: {
        // 连接扇形图线长
        length: 6,
        // 连接文字线长
        length2: 8
      }
    }]
  };
  // 让图表跟随屏幕自适应
  window.addEventListener("resize", function () {
    myBar.resize();
  });
  myBar.setOption(option);
})();
