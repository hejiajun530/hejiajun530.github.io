1. 导入echarts
  html中导入echarts
  <script src="https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js"></script>
  vue中导入echarts
  下载echarts：npm i echarts@4.9.0 -s
  main.js全局导入： import echarts from 'echarts'; Vue.prototype.$echarts = echarts;
  页面使用：
    var myChart = this.$echarts.init(document.querySelector('#myCharts));
    let options = {...};
    myChart.setOption(options);
  下载echarts: npm i echarts -s    下载的是最新版本，在页面中使用时需要var echarts = require(echarts);
  问题："export ‘default’ (imported as ‘echarts’) was not found in ‘echarts’：  vue导入echarts，版本不一样，需要下载@4.9.0，npm install echarts@4.9.0


2. setOption({}) 配置项
setOption({
  title: {// 标题
    //id: '',//组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。
    show: true, //标题组件是否显示。默认true。
    text: '主标题', //主标题文本，支持\n换行。
    //link: 'www.baidu.com', //主标题文本超链接
    //target: 'self', //主标题超链接打开，'self'当前窗口打开,'blank'新窗口打开。
    textStyle: {
      color: '#333', //主标题文字颜色
      fontStyle: 'normal', //主标题文字字体的风格。可选：'noraml'无,'italic'斜体,'oblique'。
      fontWeight: 'normal', //主标题文字粗细，可选：'noraml','bold','bolder','lighter',100|200|300...
      fontFamily: 'sans-serif', //主标题文字的字体系列.'serif',''Microsoft YaHei','Arial'...
      fontSize: 18, //主标题文字大小
      lineHeight: 22, //行高。rich中如果没有设置lineHeight，则会使用这里的lineHeight
      //width: 10, // number/string, 文字块宽度，一般不指定
      //height: 10, // number/string, 文字块高度，一般不指定
      textBorderColor: 'transparent', //文字本身的描边颜色
      textBorderWidth: 1, //文字本身的描边宽度
      textShadowColor: 'transparent', //文字本身的阴影颜色
      textShadowBlur: 1, //文字本身的阴影长度
      textShadowOffsetX: 1, //文字本身的阴影 X 偏移
      textShadowOffsetY: 1, //文字本身的阴影 Y 偏移
    },
    //副标题与主标题大概一致 在所有属性前加上sub,如：subtext,sublink,subtextStyle...
    textAlign: 'auto', //整体(包括text和subtext)的水平对齐，可选：'auto''left''right''center'
    textVerticalAlign: 'auto', //整体(包括text和subtext)的垂直对齐，可选：'auto''top''bottom''middle'
    //triggerEvent: false, //是否触发事件
    padding: 5, // number/Array 标题内边距
    itemGap: 10, //主副标题之间的间距
    zlevel: 1, //所有图形的zlevel值，层级
    left: 'auto', //title 组件离容器左侧的距离。'left', 'center', 'right'
    top: 'auto', //title 组件离容器左侧的距离。'top', 'middle', 'bottom'
    right: 'auto', //title 组件离容器左侧的距离。
    bottom: 'auto', //title 组件离容器左侧的距离。
    backgroundColor: 'transparent', //标题背景色，默认transparent,颜色可以使用 RGB 表示，比如 'rgb(128, 128, 128)' ，如果想要加上 alpha 通道，可以使用 RGBA，比如 'rgba(128, 128, 128, 0.5)'，也可以使用十六进制格式，比如 '#ccc'
    borderColor: '#ccc', //标题的边框颜色。支持的颜色格式同 backgroundColor。
    borderWidth: 1, //标题的边框线宽
    borderRadius: 2, // number/Array 圆角半径
    shadowBlur: 1, //圆形阴影的模糊大小
    shadowColor: '#ccc', //阴影颜色
    shadowOffsetX: 1, //阴影水平方向上的偏移距离
    shadowOffsetY: 1, //阴影垂直方向上的偏移距离
  },
  legend: {
    type: 'plain', // 图例的类型。可选'plain'：普通图例，'scroll'：可滚动翻页的图例。当使用'scroll'时，使用这些设置进行细节配置：scrollDataIndex/pageButtonItemGap/pageButtonGap...
    //id: '', //组件id，默认不指定。
    show: true, //图例是否显示
    zlevel: 1, //层级
    left: 'auto', //title 组件离容器左侧的距离。'left', 'center', 'right'
    top: 'auto', //title 组件离容器左侧的距离。'top', 'middle', 'bottom'
    right: 'auto', //title 组件离容器左侧的距离。
    bottom: 'auto', //title 组件离容器左侧的距离。
    width: 'auto', //图例的宽度，默认自适应
    height: 'auto', //图例的高度，默认自适应
    orient: 'horizontal', //图例列表的布局朝向。可选：'horizontal','vertical'
    align: 'auto', //图例标记和文本的对齐。默认自动。可选：'auto','left','right'
    padding: 5, // number/Array 图例内边距。默认各方向内边距为5。
    itemGap: 10, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
    itemWidth: 25, //图例标记的图形宽度。
    itemHeight: 14, //图例标记的图形高度。
    symbolKeepAspect: true, //如果图标（可能来自系列的 symbol 或用户自定义的 legend.data.icon）是 path:// 的形式，是否在缩放时保持该图形的长宽比。
    formatter: 'Legend {name}', //用来格式化图例文本，支持字符串模板和回调函数两种形式。
    selectedMode: true, //图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择
    inactiveColor: '#ccc', //图例关闭时的颜色
    //selected: , //图例选中状态表 selected: {'系列1': true, '系列2': true},
    textStyle: {
      color: '#333', //文字的颜色
      fontStyle: 'noraml', //'normal','italic','oblique'
      fontWeight: 'noraml', //'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
      fontFamily: 'sans-serif', // 'serif','monospace','Arial','Courier New','Microsoft YaHei'...
      fontSize: 12, //文字的大小
      lineHeight: 22, //行高
      backgroundColor: 'transparent', //文字块背景色，'#123234', 'red', 'rgba(0,23,11,0.3)'。也可以使用图片 backgroundColor: {image: 'xxx.png'},
      borderColor: 'transparent', //文字块边框颜色
      borderWidth: 1, //文字块边框宽度
      borderRadius: 3, //文字块的圆角 number/Array
      padding: 5, //number/Array
      shadowColor: 'transparent', //文字块的背景阴影颜色
      shadowBlur: 1, //文字块背景阴影长度
      shadowOffsetX: 1, //文字块的背景阴影 X 偏移
      shadowOffsetY: 1, //文字块的背景阴影 Y 偏移
      width: 'auto', //文字块的宽度，一般不用指定，自适应
      height: 'auto', //文字块的高度，一般不用指定，自适应
      textBorderColor: 'transparent', //文字本身的描边颜色
      textBorderWidth: 1, //文字本身的描边宽度
      textShadowColor: 'transparent', //文字本身的阴影颜色
      textShadowBlur: 1, //文字本身的阴影长度
      textShadowOffsetX: 1, //文字本身的阴影 X 偏移。
      textShadowOffsetY: 1, //文字本身的阴影 Y 偏移。
    },
    tooltip: {
      show: true
    },
    icon: 'rect', //'circle','rect','roundRect','triangle','diamond','pin','arrow','none','image://url'
    data: [{
      name: '系列1',
      icon: 'circle', //强制设置图形为圆
      textStyle: {
        color: 'red', //设置文本为红色
      }
    }],
    backgroundColor: 'transparent', //图例背景色，默认透明
    borderColor: '#ccc', //图例边框颜色
    borderWidth: 1, //图例的边框线宽
    borderRadius: 3, //图例的圆角 number/Array
    shadowBlur: 1, //图例阴影的模糊大小
    shadowColor: '#ccc', //阴影颜色
    shadowOffsetX: 1, //阴影水平方向上的偏移距离。
    shadowOffsetY: 1, //阴影垂直方向上的偏移距离。
    // type 为  scroll 时有效
    scrollDataIndex: 3, //决定哪个图例显示在第一个
    pageButtonItemGap: 5, //图例控制块中，按钮和页信息之间的间隔
    pageButtonGap: 5, //图例控制块和图例项之间的间隔
    pageButtonPosition: 'end', //图例控制块的位置，'start'：控制块在左或上。'end'：控制块在右或下。
    pageFormatter: '{current}/{total}, // string/Function 默认为 '{current}/{total}',如果使用函数，须返回字符串，参数为{ current: number, total: number }
    pageIcons: {
      //horizontal: ,是一个数组，表示 [previous page button, next page button]。默认值为 ['M0,0L12,-10L12,10z', 'M0,0L-12,-10L-12,10z']，。可以通过 'image://url' 设置为图片，其中 URL 为图片的链接，或者 dataURI。
      //vertical ....
    },
    pageIconColor: '#2f4554', //翻页按钮的颜色
    pageIconInactiveColor: '#aaa', //翻页不激活时(即翻页到头时)的颜色
    pageIconSize: 15, // number/Array 翻页按钮的大小，Array如 [10, 3]，表示 [宽，高]。
    pageTextStyle: {
      // 几乎与之前设置文字一样，不多写了
    },
    animation: false, //图例翻页是否使用动画
    animationDurationUpdate: 800, //图例翻页的动画时长
    selector: [{ //图例组件中的选择器按钮，目前包括全选和反选两种功能。默认不显示，用户可手动开启，也可以手动配置每个按钮的标题。 或 selector: true 或 selector: ['all', 'inverse']
      type: 'all or inverse',
      // 可以是您喜欢的 title
      title: '全选'
    }, {
      type: 'inverse',
      title: '反选'
    }],
    selectorLabel: {
      // 有些之前出现过的就不写出来了
      distance: 5, //距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。
      rotate: 0, //标签旋转，从-90度到90度，正值时顺时针
      offset: [30, 40], // Array 是否对文字进行偏移。默认不偏移。例如：[30, 40] 表示文字在横向上偏移 30，纵向上偏移 40。
      align: 'left', //'left','center','right'
      verticalAlign: 'top', //'top','middle','bottom'
    },
    selectorPosition: 'auto', //选择器的位置，可以放在图例的尾部或者头部，对应的值分别为 'end' 和 'start'。默认情况下，图例横向布局的时候，选择器放在图例的尾部；图例纵向布局的时候，选择器放在图例的头部。
    selectorItemGap: 7, //选择器按钮之间的间隔
    selectorButtonGap: 10, //选择器按钮与图例组件之间的间隔
  },
  grid: {
    show: false,
    zlevel: 0,
    left: 10%, //'left', 'center', 'right'
    top: 10%, //'top', 'middle', 'bottom'
    right: 10%,
    bottom: 10%,
    width: 'auto',
    height: 'auto',
    containLabel: false, //grid 区域是否包含坐标轴的刻度标签。 ......
    tooltip: {
      show: true,
      trigger: 'item', //item:数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。axis:坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。none:什么都不触发。
      // axisPointer: , // Object 坐标轴指示器配置项。
      //position: , 具体看官网// string/Array/Function 提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。 Array：通过数组表示提示框浮层的位置，支持数字设置绝对位置，百分比设置相对位置。/ 绝对位置，相对于容器左侧 10px, 上侧 10 px/position: [10, 10] 
      //formatter: ,具体看官网
    },
    xAxis: {
      show: true,
      gridIndex: 1, //x 轴所在的 grid 的索引，默认位于第一个 grid。
      position: 'top', //x 轴的位置。可选：'top','bottom'。默认 grid 中的第一个 x 轴在 grid 的下方（'bottom'），第二个 x 轴视第一个 x 轴的位置放在另一侧。
      offset: 1, //X 轴相对于默认位置的偏移，在相同的 position 上有多个 X 轴的时候有用。
      type: 'value', //坐标轴类型。'value' 数值轴，适用于连续数据。'category' 类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 xAxis.data 设置类目数据。'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。'log' 对数轴。适用于对数数据。
      name: 'x', //坐标轴名称
      nameLocation: 'end', //坐标轴名称显示位置。可选：'start','middle' 或者 'center','end'
      nameTextStyle: {
        // 几乎与之前设置文字一样，不多写了
      },
      nameGap: 15, //坐标轴名称与轴线之间的距离
      nameRotate: 30, //坐标轴名字旋转，角度值。
      inverse: false, //是否是反向坐标轴
      //boundaryGap: , // boolean/Array 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。boundaryGap: ['20%', '20%']
      min: 1, // number/string/Function 坐标轴刻度最小值
      max: 10, // number/string/Function 坐标轴刻度最大值
    }
  }
});