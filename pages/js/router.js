var $container = $(".si-container");
si.config({
  router:[{
    path:'/home',
    page:'pages/views/index.html'
  },{
    path:'/layout',
    page:'pages/views/layout/layout.html'
  },{
    path:'/layout/grid',
    page:'pages/views/layout/grid.html'
  },{
    path:'/form/general',
    page:'pages/views/form/general.html'
  },{
    path:'/components/buttons',
    page:'pages/views/components/buttons.html'
  },{
    path:'/components/color',
    page:'pages/views/components/color.html'
  },{
    path:'/components/icons',
    page:'pages/views/components/icons.html'
  }],
  afterEach:function(){
    $container.find('[data-toggle="tooltip"]').tooltip();
    $container.find('code').map(function() {
      Prism.highlightElement(this);
    });
  }
})