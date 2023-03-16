try{Typekit.load({ async: true });}catch(e){};

var countAnimation = (function () {
  var options = {
    useEasing : true, 
    useGrouping : true, 
    separator : ',', 
    decimal : '.', 
    prefix : '', 
    suffix : '' 
  };
  
  var startCount = function () {  
    $( ".stats-value" ).each(function( index, element ) {
      var queueCountAnimation = new countUp(element, $(element).data("start"), $(element).data("end"), 0, 1, options);
      queueCountAnimation.start();
    });
  };

  return {
    startCount: startCount
  };

})();

var waypoint = new Waypoint({
  element: document.getElementById('stats-row'),
  handler: function(direction) {    
    if (direction === 'down') {
      countAnimation.startCount()
    }
  },
  offset: '100%'
})