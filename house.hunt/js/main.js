
//NAV BAR
$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });

});


//top button
$(function(){
  $("nav").each(function(){  
      var nav=$(this); 
      var target=nav.offset().top; 
     
      $(window).on("scroll", function(){
          if($(this).scrollTop()>target){
              nav.css("background-color","white")
              }else{nav.css("background-color","#F6F4F1");
          }
      });
  });

  $(window).scroll(function(){
      if($(this).scrollTop()>100){ 
       $(".top_btn").fadeIn("slow");
      } 
       else{$(".top_btn").fadeOut("slow")} 
  });

  $(".top_btn").on("click",function(){
      $("html, body").animate({scrollTop:0},1000);
  });

});


//Follow US slide
$(function(){
  var eleWidth=$(".frame>ul>li").innerWidth(); 
  var state=false; 
  var playOn=false; 
  var direction="left";
  var bannerAuto;

//when plays
  function play(){  
      if(!playOn){playOn=true; bannerAuto=setInterval(function(){  
          if(direction=="left"){ $(".left").click(); } 
          else{$(".right").click();}
       },1000);
      }
  }

//when stop  
  function stop(){ 
      if(playOn){ 
          playOn=false; clearInterval(bannerAuto);
      }
      $(".frame>ul>li>a").mouseout(function(){  
          play();
      });
      $(".frame>ul>li>a").click(function(){
          location.href;  
      });
  }

//left side rolling
  function left(){
      stop();
      direction="left";  
      $(".frame>ul").animate({
          left:eleWidth*-1   
      },200, 
         
       function(){   
          $(this).children("li:first").insertAfter($(this).children("li:last"));   
          $(this).css("left",0);
          state=false;
          play(); 
      });
  }

//right side rolling
  function right(){
      stop();
      direction="right";
      $(".frame>ul>li:last").insertBefore($(".frame>ul>li:first"));  
      $(".frame>ul").css("left",eleWidth*-1); 
      $(".frame>ul").animate({ 
          left:0   
      },200,
      function(){
          state=false;
          play();
      });
  }    

//control with arrow
  $(".left").click(function(){
      if(!state){state=true; left();} 
  });    

  $(".right").click(function(){
      if(!state){state=true; right();}
  });

  $(".frame li").click(); 

});