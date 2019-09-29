// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    // to edit target browsers: use "browserslist" field in package.json
    // cssnext和cssnano都具有autoprefixer, 事实上只需要一个
    // 所以把默认的autoprefixer删除掉，然后把cssnano中的autoprefixer设置为false
    // autoprefixer: {},
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': {
      utf8: false
    },
    'postcss-cssnext': {},
    'postcss-px-to-viewport': {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3, // 单位转换后保留的精度
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位
      minPixelValue: 1, // 设置最小的转换数值，只有大于该值时才会被转换
      mediaQuery: false // 媒体查询里的单位是否需要转换单位
    },
    "postcss-viewport-units": {},
    "cssnano": {
      // 需要安装cssnano-preset-advanced插件
      preset: 'advanced',
      autoprefixer: false,
      // 启用该插件，z-index的值就会重置为1，务必设置为false
      "postcss-zindex": false
    }
  }
};
