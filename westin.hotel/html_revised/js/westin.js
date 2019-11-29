//menu
$(function(){		
	var gnbA = $('#gnb>li>a');
	var ul = $('#gnb>li>ul');	
	var speed = 200;
	gnbA.on("mouseenter focus",function(){				
		if(gnbA.target){
			$(gnbA.target).next().stop().fadeOut(speed);
			$(this).next().stop().fadeIn(speed);
			imgOut(gnbA.target);
			imgOver(this);					
		}else{
			$(this).next().stop().fadeIn(speed);
			imgOver(this);
		}
		gnbA.target = this;
	});
	gnbA.mouseleave(function(){		
		$(this).next().stop().fadeOut(speed);
		imgOut(this);
	});
	ul.hover(function(){		
		$(this).stop().fadeIn(speed);
		imgOver(gnbA.target);
	},function(){		
		$(this).stop().fadeOut(speed);
		imgOut(gnbA.target);
	});
	$("#gnb>li>ul>li>a").focus(function(){
		$(gnbA.target).next().stop().fadeIn(speed);	
		imgOver(gnbA.target);
	}).blur(function(){
		$(gnbA.target).next().stop().fadeOut(speed);
		imgOut(gnbA.target);
	});
	function imgOver(t){				
		$(t).find("img").attr("src",$(t).find("img").attr("src").replace("out","over"));
	}
	function imgOut(t){
		$(t).find("img").attr("src",$(t).find("img").attr("src").replace("over","out"));			
	}

//top button
	$(window).scroll(function(){
        if($(this).scrollTop()>100){ 
         $(".top_btn").fadeIn("slow");
        } 
         else{$(".top_btn").fadeOut("slow")} 
    });

    $(".top_btn").on("click",function(){
        $("html, body").animate({scrollTop:0},500);
    
	});
	
	$(".wellbeing1").on("click",function(){
        $(".wb_text1").fadeToggle("slow");
	});
});


//visual main
$(function(){
    var list=$("#list_btn>a");
    var li=$("#banner").find("li");
    var i=0;  
    var playOn=false;
    var roll; 

    li.hide();    
    list.click(function(){  
        var index=list.index(this);  
        if(list.state){  
            stop();   
            imgOff(list.state);  
            imgOn(this);  
            $(li.state).hide(); 
            $(li[index]).show(); 
            i=index;
            
        }
        else{
            imgOn(this);
            $(li[index]).show();
            
        }
        list.state=this;
        li.state=li[index];
        
        return false;
    });

    function play(){  
        if(!playOn){
            playOn=true; 
            roll=setInterval(function(){
                $(".right").click();
            },2000);
        }
    }
    function stop(){  
        if(playOn){
            playOn=false;
            clearInterval(roll);
        }
    }
   
    function imgOn(t){  
        $(t).find("img").attr("src",$(t).find("img").attr("src").replace("off","on"));    
    }
    function imgOff(t){
        $(t).find("img").attr("src",$(t).find("img").attr("src").replace("on","off"));
    }

    $(".left").click(function(){
        i--;  
        if(i<0){  
            i=list.length-1;
        }
        list[i].click();
    });
    $(".right").click(function(){
        i++;
        if(i>list.length-1){i=0;}
        list[i].click();
    });
	list[0].click();
});	


//featured hotel and resort toggle button
$( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          height: 70
        }, 500 );
      } else {
        $( "#effect" ).animate({
          height: 198
        }, 500 );
      }
      state = !state;
    });

    var state = true;
    $( "#button2" ).on( "click", function() {
      if ( state ) {
        $( "#effect2" ).animate({
          height: 70
        }, 500 );
      } else {
        $( "#effect2" ).animate({
          height: 197
        }, 500 );
      }
      state = !state;
    });
  });

//boat moving- infinite

  $(document).ready(function () {
      function loop() {  
        $(".boat").animate({marginRight:"500px"},5000,loop)
        .animate({marginRight:"0"},5000,loop); 
       }
       loop();
 }); 


