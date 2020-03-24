(function() {
    var spaStage = {};
  
    spaStage.init = function($container) {
      var $iframe = $('<iframe frameborder="0"></iframe>');
    
      $iframe.attr('src', '矩形计算器/index.html');
      $container.append($iframe);
    };
  
    spaStage.show = function(msg) {
      if(msg.display) $('.spa-content').css({ display: msg.display });
      if(msg.href) $('.spa-content iframe').attr('src', msg.href);
    };
  
    window.spaStage = spaStage;
  }());