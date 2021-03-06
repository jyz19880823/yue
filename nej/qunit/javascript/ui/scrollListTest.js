var f = function(){
    //定义测试模块
    module("ui-scrollList");
    
    var _  = NEJ.P,
        _e = _('nej.e'),
        _p = _('nej.ui');
        
    //开始单元测试
    test('scrollList',function(){
        stop();
        var _scrollList = _p._$$ListScroller._$allocate({
            parent:'scrollList-box',
            onscroll:function(_offset){
                ok(true,'onscroll');
            },
            onbounce:function(_event){
                ok(true,'onbounce');
            },
            onbouncestart:function(){
                ok(true,'onbouncestart');
            },
            onlistupdate:function(_node){
                ok(true,'onlistupdate');
                start();
            },
            onbeforeclear:function(_box){
                ok(true,'onbeforeclear');
            }
        });
        _scrollList._$bindPuller(_p._$$PullRefresh._$allocate({
            onrefresh:function(){
                var _list = '';
                for(var _i = 20; _i > 0; _i--){
                    _list += '<div>' + _i + '</div>'
                }
                _scrollList._$addLast(_list);
            }
        }));
    });
}
module('依赖模块');
test('define',function(){
    define('{pro}scrollListTest.js',['{lib}ui/scroller.list/scroller.list.js','{lib}ui/pullrefresh/pullrefresh.js','{pro}log.js'],f);
});