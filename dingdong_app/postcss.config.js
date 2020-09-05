module.exports = {
  plugins: {
    autoprefixer: {},             //安装配置即可
    "postcss-px-to-viewport":{
      viewportWidth:375,   //视窗宽度，对应的是我们设计稿的宽度(当设备的视口不同时，按照相应的比例进行缩放)
      viewportHeight:667,   //视窗高度，对应的是我们设计稿的高度
      unitPrecision: 5,      //指定转换的视窗保留位数
      viewportUnit: 'vw',     //指定需要转换成的视窗单位
      // selectorBlackList: ['ignore','tab-bar','tab-bar-item'], //指定不需要转换的类
      // minPixelValue: 1,   //小于等于1px的不转换
      mediaQuery: true,  //是否允许在媒体查询中转化
    }
  }
}
