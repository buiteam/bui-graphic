/**
 * @fileOverview 图形的入口文件
 * @ignore
 */

var BUI = require('./bui'),
  Graphic = BUI.namespace('Graphic');

BUI.mix(Graphic,{
  Canvas : require('./canvas'),
  Group : require('./group'),
  Shape : require('./shape'),
  Util : require('./util')
});

module.exports = Graphic;
