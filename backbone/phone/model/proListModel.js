define(function(){
var proListModel = Backbone.Model.extend({
     fetch:function(){
       var self=this;
            var tmpContact;
            var jqxhr = $.getJSON("data/productsList.json")
              .success(function(data, status, xhr) { 
                self.set({
                  left:data.left,
                  right:data.right
                });

                console.log(data.left)
                self.trigger("fetched:productList");
              })
              .error(function() { alert("error"); })
              .complete(function() {
                    console.log("fetch complete + " + this);
              });
          }
});
console.log("new model")
return proListModel
});