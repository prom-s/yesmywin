$(function(){
	//inp部分
	$('#seach').focus(function(){
		$(this).css('background','#fff');
		$(this).attr('placeholder','');
	})
	$('#seach').blur(function(){
		if ($('#seach').val()=='') {
			$('#seach').attr('placeholder','输入你要查找的商品');
		}
		$(this).css({'background':'#F4F1F0','color':'#fff'});
	})
	
	$('.gouwuche').hover(function(){
		$(this).css('background-position','0 -195px');
		$(this).find('div').css('display','block');
	},function(){
		$(this).css('background-position','0 -160px');
		$(this).find('div').css('display','none');
	})
	//nav部分  b标签和s标签
	$('.navright>li').hover(function(){
		if ($(this).index()==1) {
			$(this).css('background','#BC0001');
			$(this).next().css('background','transparent');
			$(this).next().next().css('background','transparent');
		} else{
			$(this).css('background','#BC0001');
			$(this).next().css('background','transparent');
			$(this).next().next().css('background','transparent');
			$(this).prev().css('background','transparent');
			$(this).prev().prev().css('background','transparent');
		}
	},function(){
		if ($(this).index()==1) {
			$(this).css('background','');
			$(this).next().css('background','#A02C2C');
			$(this).next().next().css('background','#A01705');
		} else{
			$(this).css('background','');
			$(this).next().css('background','#A02C2C');
			$(this).next().next().css('background','#A01705');
			$(this).prev().css('background','#A01705');
			$(this).prev().prev().css('background','#A02C2C');
		}
	})
	
	
	//轮播部分
	
	$index=0;
	$siz=$('.bannerU .banner1 li').size();
	function star(){
		$('.BBt>li').eq($index).css('background','#D3161B').siblings().css('background','#86685E');
		$('.banner1 li').eq($index).stop().animate({'opacity':'1'},100).css('display','block').siblings().stop().animate({'opacity':'0'},100,function(){
			$(this).css('display','none');
		});
	}
	function move(){
		if ($index>=$siz-1) {
			$index=-1;
		}
		$index++;
		star();
	}
	timer=setInterval(move,2000);
	$('.BBt>li').each(function(G){
		$(this).hover(function(){
			clearInterval(timer);
			$index=G;
			star();
			
		},function(){
			timer=setInterval(move,2000);
		})
	})
	$width1=$('.banner1>li').width();
	$height1=$('.banner1>li').height();
	$('.banner1>li').hover(function(){
//		console.log($width1)
		$(this).stop().animate({'width':$width1*1.1,'height':$height1*1.1,'left':-$width1*0.05,'top':-$height1*0.05},1000);
	},function(){
		$(this).stop().animate({'width':$width1,'height':$height1,'left':'0','top':'0'},1000);
	})


//mainONE部分

	$('.mainOLeft>ul>li').mouseover(function(){
		$(this).css('background','none').siblings().css('background','#E0DBD8');
		$(this).find('a').css('color','#D85A44').siblings().find('a').css('color','#5C483D');
	});
    $('.mainOLeft>ul>li').each(function(s){
    	$(this).mouseover(function(){
			$('.mainOLeft>div>div').eq(s).css('display','block').siblings().css('display','none');
		})
    })




       $top1=$('.mainORightBOTT').height();
     	$index1= $('.mainORight>ul>li').size();
     $('.mainORight>ul>li').each(function(i){
     	$(this).mouseover(function(){
     			if (i>$index1) {
     				i=0;
     			}
     			$('.BOTTMain').animate({'top':-$top1*i},400);
     	})
     })
     
     
     
     
    //MAINFORE4 
    
    var bole=true;
    $index2=0;
    $width2=$('.FBOTT').width();
    $size2=$('.FBOTT>.DD>li').size();
    function star2(){
    	$('.FBOTT>.DDD>li').eq($index2).css('background','#E00005').siblings().css('background','#C9C9C9');
    	$('.FBOTT>.DD').animate({'left':-($width2*$index2)},600)
    }
    function move2(){
        if ($index2>=$size2-1) {
        	bole=false;
        }else if ($index2<=0) {
        	bole=true;
        }
        if (bole) {
        	$index2++;
        } else{
        	$index2--;
        }
        star2();
    }
     timer2=setInterval(move2,3000);
     $('.FBOTT>.DDD>li').each(function(l){
     	$(this).mouseover(function(){
     		clearInterval(timer2);
     		$index2=l;
     		star2();
     		timer2=setInterval(move2,3000);
     	})
     	
     })
     
     
     
     //444444444444
     
     
     
     
     $('.mainForeRBOM>ul>li>dl>.CX>a').hover(function(){
     	$('#MX').css('display','block');
     },function(){
     	$('#MX').css('display','none');
     })
     
      $('#SP>dl>#SPD>#SPDA').hover(function(){
     	$('#TH').css('display','block');
     	$('#MX').css('display','none');
     },function(){
     	$('#TH').css('display','none');
     })
    
     
     
     
     //77777777777手风琴
     $('.SiveBomTop>ul>li').mouseover(function(){
     	$(this).stop().animate({'width':'450px'},500).siblings().stop().animate({'width':'150px'},500)
     })
     
//  $index7_1=0;
//  $siz_7=$('.SiveBomTop>ul>li').size();
//  var bol_7=true;
//  function star7(){
//  	$('.SiveBomTop>ul>li').eq($index7_1).stop().animate({'width':'450px'},500).siblings().stop().animate({'width':'150px'},500);
//  }
//  function move_7(){
//  	if ($index7_1<=$siz_7-1) {
//  		bol_7=false;
//  	} else if($index7_1>=0){
//  		bol_7=true;
//  	}
//  	if (bol_7) {
//  		$index7_1++;
//  	} else{
//  		$index7_1--;
//  	}
//  	star7();
//  }
//  timer_7=setInterval(move_7,2000);











     
     $('.SiveBomBom>ul>li>a>img').hover(function(){
     	$(this).stop().animate({'left':'-100px'},600)
     },function(){
     	$(this).stop().animate({'left':'0px'},600)
     })


    













     
     
     
     
     
     //999999999999999999999999999999999999999999999999999
     
        $index9=0;
        $width9=$('.NineBomC').width();
//      console.log($width9);
        $siz9=$('#HuoNine>li').size();
//      console.log($siz9);
        function star9(){
     	$('#JiuNine>li').eq($index9).css('background','#7E0001').siblings().css('background','#86685E');
     	$('#HuoNine').animate({'left':-$width9*($index9)},600);
     }
//       var bol=false;
//       function move9(){
//		       	if ($index9>=$siz9-1) {
//		   		bol=true;
//		      }
//     	}
//	   	if ($index9<=0) {
//	   		bol=false;
//	   	}
//	   	if (bol) {
//	   		$index9--;
//	   	}else{
//	   		$index9++;
//	   	console.log($index9);
//	   	star9();
//	   }
        function move9(){
        	if ($index9>=$siz9-1) {
        		$index9=-1;

        	}
        	$index9++;
        	star9();
        }
	   timer9=setInterval(move9,2000);









//
//   var bole_9=true;
//  $index2_9=0;
//  $width_9=$('.NineBomC').width();
//  $size2_9=$('#TTTTTTT>li').size();
//  function star2_9(){
//  	$('#FFFFF>li').eq($index2_9).css('background','#E00005').siblings().css('background','#C9C9C9');
//  	$('#TTTTTTT>li').animate({'left':-($width2_9*$index2_9)},600)
//  }
//  function move2_9(){
//      if ($index2_9>=$size2_9-1) {
//      	bole_9=false;
//      }else if ($index2_9<=0) {
//      	bole_9=true;
//      }
//      if (bole_9) {
//      	$index2_9++;
//      } else{
//      	$index2_9--;
//      }
//      star2_9();
//  }
//   timer2_9=setInterval(move2_9,3000);
//   $('#FFFFF>li').each(function(f){
//   	$(this).mouseover(function(){
//   		clearInterval(timer2_9);
//   		$index2_9=f;
//   		star2_9();
//   		timer2_9=setInterval(move2_9,3000);
//   	})
//
//   })
//


//9999999999999999999
	$index15=0;
	$width15=$('.NineBomC').width();

	$siz15=$('#TTTTTTT>li').size();

	function star15(){
		$('#FFFFF>li').eq($index15).css('background','#7E0001').siblings().css('background','#86685E');
		$('#TTTTTTT').animate({'left':-$width15*($index15)},600);
	}

	function move15(){
		if ($index15>=$siz15-1) {
			$index15=-1;

		}
		$index15++;
		star15();
	}
	timer15=setInterval(move15,2000);

//1555555555555555



	$index20=0;
	$width20=$('.NineBomC').width();

	$siz20=$('#TTTTTTT>li').size();

	function star20(){
		$('#laojiu>li').eq($index20).css('background','#7E0001').siblings().css('background','#86685E');
		$('#chennian').animate({'left':-$width20*($index20)},600);
	}

	function move20(){
		if ($index20>=$siz20-1) {
			$index20=-1;

		}
		$index20++;
		star20();
	}
	timer20=setInterval(move20,2000);



	//17777777777777










	//11111111111111111111111111111111
     
      $index11=0;
        $width11=$('.NineBomC').width();
        console.log($width11);
        $siz11=$('#HuoNine>li').size();
        console.log($siz11);
        function star11(){
     	$('#JiuEven>li').eq($index11).css('background','#7E0001').siblings().css('background','#86685E');
     	$('#HuoEven').animate({'left':-$width11*($index11)},600);
     }
     
      function move11(){
        	if ($index11>=$siz11-1) {
        		$index11=-1;
        		
        	}
        	$index11++;
        	star11();
        }
	   timer11=setInterval(move11,2000);
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
     
     //1000000000000000000000000000000000000000000000
     $('.TenRu2>li.kuan').mouseover(function(){
     	$(this).css('height','124px');
     	$(this).find('div').css('display','none');
     	$(this).find('dl').css('display','block');
    	$(this).siblings().css('height','33px');
    	$(this).siblings().find('div').css('display','block');
    	$(this).siblings().find('dl').css('display','none');
    	$(this).find('i').addClass('color1');
    	$(this).siblings().find('i').removeClass('color1');
    	$(this).find('s').addClass('color2');
    	$(this).siblings().find('s').removeClass('color2');
     })
     
     //footer---------------------------------
     $('.foterTree>dl>i').click(function(){
     	$('.foterTree>dl').css('height','50px');
     	$(this).css('display','none');
     	$('.foterTree>dl>s').css('display','block');
     })
      $('.foterTree>dl>s').click(function(){
     	$('.foterTree>dl').css('height','25px');
     	$(this).css('display','none');
     	$('.foterTree>dl>i').css('display','block');
     })
     
     
     
     
     
     
     
});





