define(['jquery', 'underscore', 'backbone','text!modules/solutions/solDetail.html'],
       function ($, _, Backbone, proDetail) {
  'use strict';

  var detailView = Backbone.View.extend({
    
    template: _.template(proDetail),

    initialize: function(){
        this.model.bind('fetched:solDetail',this.render,this);
        // this.render()
    },
    
    render: function(){
      console.log("model=" + this.model.toJSON());
      $(this.el).append(this.template(this.model.toJSON()));
      // $(this.el).find("a").bind("click",function(e){$(this.el).remove()})
      // console.log("click a"+$(this.el))
      this.trigger("rendered:solDetail");
      // console.log("show product"+$(this.el).html())
      return this;
    }


  });
  
  return detailView;
});