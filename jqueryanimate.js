$(document).ready(function(){
  $("#button2").click(function(){
    $("#span1").fadeIn("");
  });
});
$(document).ready(function(){
    $("#button2").click(function(){
      $("#span1").animate({
        left: '350px',
        height: '+500px',
        width: '+500px'
      });
    });
  });