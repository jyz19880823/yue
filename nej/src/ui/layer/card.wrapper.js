/*
 * ------------------------------------------
 * 弹出卡片封装基类实现文件
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 * ------------------------------------------
 */
var f = function(){
    var _  = NEJ.P,
        _o = NEJ.O,
        _e = _('nej.e'),
        _v = _('nej.v'),
        _u = _('nej.u'),
        _p = _('nej.ui'),
        _proCardWrapper;
    if(!!_p._$$CardWrapper) return;
    /**
     * 弹出卡片封装基类对象，主要实现层里面内容部分的业务逻辑
     * @class   {nej.ui._$$CardWrapper} 弹出卡片封装基类对象
     * @extends {nej.ui._$$LayerWrapper}
     * @param   {Object} 可选配置参数，已处理参数列表如下
     *                            
     */
    _p._$$CardWrapper = NEJ.C();
      _proCardWrapper = _p._$$CardWrapper._$extend(_p._$$LayerWrapper);
    /**
     * 卡片绑定到执行节点上
     * @static
     * @param  {String|Node} _node    执行节点
     * @param  {Object}                构建卡片配置参数
     * @config {String}  event   触发显示卡片事件名称，默认为click事件
     * @config {Boolean} fixed   是否固定位置，如果已固定位置则卡片显示位置不会自动计算
     * @config {Object}  delta   四周偏移，默认全为0，{top:0,right:0,bottom:0,left:0}
     * @config {String}  align   卡片位置，默认为'bottom left'
     * @config {Boolean} fitable 是否需要调整卡片位置使其适应页面
     * @return {nej.ui._$$CardWrapper}
     */
    _p._$$CardWrapper._$attach = (function(){
        var _doShowCard = function(_event,_class,_copt,_sopt){
            _v._$stop(_event);
            _v._$dispatchEvent(document,'click');
            _class._$allocate(_copt)._$showByReference(_sopt);
        };
        return function(_node,_options){
            _node = _e._$get(_node);
            if (!_node) return this;
            if (!this.__cdpol)
                 this.__cdpol = {};
            var _id = _e._$id(_node);
            if (!!this.__cdpol[_id]) return this;
            _options = _options||{};
            var _sopt = NEJ.EX({
                    align:'',delta:null,fitable:!1
                },_options);
            _sopt.target = _id;
            _options.destroyable = !0;
            if (!_options.fixed){
                _sopt.fitable = !0;
                //_options.parent = document.body;
            }
            this.__cdpol[_id] = [
                 _id,_options.event||'click',
                 _doShowCard._$bind2(null,this,_options,_sopt)
            ];
            _v._$addEvent.apply(_v,this.__cdpol[_id]);
            return this;
        };
    })();
    /**
     * 取消节点绑定的卡片
     * @static
     * @method {_$detach}
     * @param  {String|Node} 执行节点
     * @return {nej.ui._$$CardWrapper}
     */
    _p._$$CardWrapper._$detach = function(_node){
        if (!this.__cdpol) return this;
        var _id = _e._$id(_node);
        if (!this.__cdpol[_id]) return this;
        _v._$delEvent.apply(_v,this.__cdpol[_id]);
        return this;
    };
    /**
     * 构建弹层控件实例，子类实现具体业务逻辑
     * @protected
     * @method {__getLayerInstance}
     * @return {nej.ui._$$Layer} 弹层控件实例
     */
    _proCardWrapper.__getLayerInstance = function(){
        return _p._$$Card._$allocate(this.__lopt);
    };
    /**
     * 初始化弹层控件可选配置参数
     * @protected
     * @method {__doInitLayerOptions}
     * @return {Void}
     */
    _proCardWrapper.__doInitLayerOptions = function(){
        _p._$$CardWrapper._$supro
          .__doInitLayerOptions.apply(this,arguments);
        this.__lopt.top = null;
        this.__lopt.left = null;
    };
    /**
     * 通过参照节点显示卡片位置
     * @method {_$showByReference}
     * @param  {Object} 可选配置参数
     * @return {nej.ui._$$CardWrapper}
     */
    _proCardWrapper._$showByReference = function(_options){
        if (!!this.__layer) 
            this.__layer._$showByReference(_options);
        return this;
    };
};
define('{lib}ui/layer/card.wrapper.js',
      ['{lib}ui/layer/layer.wrapper.js'
      ,'{lib}ui/layer/card.js'],f);