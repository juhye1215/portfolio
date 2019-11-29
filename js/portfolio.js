//earth spin
var angle = 0;
setInterval(function()
{    angle+=1;
     $("#earth").rotate(angle); 
    },100);
    
    
//small planet spin
 var ang = 0;
setInterval(function()
{ang+=1;
   $(".venus,.mercury,.minimoon,.neptune2").rotate(ang); 
   },'slow');
    


//j.moore title drop
$(function(){
    $(".title").animate({marginTop:"130px"},5000);    
 
    $( "#me1").click(function() {
      $( ".bio1" ).toggle( "blind" );
    });
    
    $( "#me2").click(function() {
      $( ".bio2" ).toggle( "blind" );
    });
    
    $( "#me3").click(function() {
      $( ".bio3" ).toggle( "blind" );
    });
});


//contact page astronut up and down
$(document).ready(function () {
  function loop() {  
    $(".astro,.spaceship").animate({marginTop:"100px"},3000,loop)
    .animate({marginTop:"0"},3000,loop); 
   }
   loop();
}); 

