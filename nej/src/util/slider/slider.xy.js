/*
 * ------------------------------------------
 * 水平垂直滑动器逻辑封装实现文件
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 * ------------------------------------------
 */
var f = function(){
    var _p = NEJ.P('nej.ut'),
        _proSliderXY;
    if(!!_p._$$SliderXY) return;
    /**
     * 水平垂直滑动器逻辑封装
     * @class   {nej.ut._$$SliderXY} 水平垂直滑动器逻辑封装
     * @extends {nej.ut._$$Slider}
     * @param   {Object} 可选配置参数，已处理参数列表如下
     * @config  {Object}       range 滑动范围，默认为滑块可运动范围，如{x:[0,100],y:[0,1000]}
     * @config  {String|Node} slide 滑动节点
     * @config  {String|Node} track 滑动轨道节点
     * 
     * [hr]
     * 
     * @event  {onchange} 滑动触发事件，输入格式如{x:{rate:0.4,value:40},y:{rate:0.5,value:50}}
     * @config {Boolean} stopped 是否停止
     * @config {Object}  x          {rate:0.4,value:40}
     * @config {Object}  y          {rate:0.5,value:50}
     * 
     */
    _p._$$SliderXY = NEJ.C();
      _proSliderXY = _p._$$SliderXY._$extend(_p._$$Slider);
    /**
     * 控件初始化
     * @protected
     * @method {__init}
     * @return {Void}
     */
    _proSliderXY.__init = function(){
        this.__supInit();
        this.__dopt.direction = 0;
    };
};
define('{lib}util/slider/slider.xy.js',
      ['{lib}util/slider/slider.js'],f);