define(['libs/template', 'app/models/page'], function(tmpl, page){
  'use strict';

  var HomeLayout = Backbone.View.extend({

    render:function(opt){

      tmpl.render({
        $el:this.$el,
        template:'threads-list',
        data:{
          threads:opt.model.toJSON()
        }
      });
      
      page.setPage('offres-du-jour');

    }

  });
  
  return new HomeLayout({el:'#page'});
});
