require('./index.css');
require('page/common/nav-simple/index.js');
var _wh = require('util/wh.js');

$(function(){
  var type = _wh.getUrlParam('type') || 'default',
  $element = $('.'+ type + '-success');
  //显示对应的提示元素
  $element.show();
})
