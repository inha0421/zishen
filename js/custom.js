$(document).ready(function () {
    

    //gnb 메뉴 슬라이드 다운구현

    $(".gnb > li").mouseenter(function(){

//      해당 li의 ul만 슬라이드다운 할때        
//       $("this").children("ul").slideDown(300); 
        
        $(".gnb > li ul, .gnbBG").stop().show();
        
    });


    
    $(".gnb > li ").mouseleave(function(){
        
        var li_list = $("this").index();
        
//       $("this").children("ul").slideUp(300);
        $(".gnb > li ul, .gnbBG").stop().hide();

        $(".gnb >li").removeClass("li_on");
    });


    //gnb li 클래스 on 주기

    $(".gnb >li").mouseenter(function(){

        var li_list = $("this").index();

        $(".gnb >li").removeClass("li_on");
        $(this).addClass("li_on");


    });
    
    
    
// slider 구현
    
    $(".prev").click(function(){
        
        $(".panel").stop().animate({"margin-left":"-200%"},1000,function(){
            $(".panel li").eq(0).appendTo(".panel");
            $(".panel").css({"margin-left":"-100%"});
        });
        
    });
    
    $(".next").click(function(){
        
        $(".panel").stop().animate({"margin-left":"0%"},1000,function(){
            $(".panel li").eq(2).prependTo(".panel");
            $(".panel").css({"margin-left":"-100%"});
        });
        
        
        
    });
    

    
    
    /*********** topIcon **********/

    $(".facebook").mouseenter(function(){
        $(this).children("img").attr("src","img/header/facebook_ov.png"); 
    });
    
    $(".facebook").mouseleave(function(){
        $(this).children("img").attr("src","img/header/facebook_ot.png"); 
    });
    
    $(".blog").mouseenter(function(){
        $(this).children("img").attr("src","img/header/blog_ov.png"); 
    });
    
    $(".blog").mouseleave(function(){
        $(this).children("img").attr("src","img/header/blog_ot.png"); 
    });
    
    $(".kakao").mouseenter(function(){
        $(this).children("img").attr("src","img/header/kakao_ov.png"); 
    });
    
    $(".kakao").mouseleave(function(){
        $(this).children("img").attr("src","img/header/kakao_ot.png"); 
    });
    
    $(".mileage").mouseenter(function(){
        $(this).children("img").attr("src","img/header/mileage_ov.png"); 
    });
    
    $(".mileage").mouseleave(function(){
        $(this).children("img").attr("src","img/header/mileage_ot.png"); 
    });
    
    
    /********** centerUL **********/
    
    $(".homme").mouseenter(function(){
        $(this).children("img").attr("src","img/cont1/homme_pc_ov.gif"); 
    });
    
    $(".homme").mouseleave(function(){
        $(this).children("img").attr("src","img/cont1/homme_pc_ot.gif"); 
    });
    
    $(".woman").mouseenter(function(){
        $(this).children("img").attr("src","img/cont1/zishen_pc_ov.gif"); 
    });
    
    $(".woman").mouseleave(function(){
        $(this).children("img").attr("src","img/cont1/zishen_pc_ot.gif"); 
    });
    
    
    /********** centerULleft **********/
    
    $(".event").mouseenter(function(){
//       $(this).children("img").attr("src","바꿀애"); 
        $(this).children("img").attr("src","img/cont2/event_ov.jpg"); 
    });
    
    $(".event").mouseleave(function(){
        $(this).children("img").attr("src","img/cont2/event_ot.jpg"); 
    });
    
    $(".Wlookbook").mouseenter(function(){
        $(this).children("img").attr("src","img/cont2/zishen_lookbook_ov.jpg"); 
    });
    
    $(".Wlookbook").mouseleave(function(){
        $(this).children("img").attr("src","img/cont2/zishen_lookbook_ot.jpg"); 
    });  


        
    
    /********** centerULright **********/

    $(".Hlookbook").mouseenter(function(){
        $(this).children("img").attr("src","img/cont2/homme_lookbook_ov.jpg"); 
    });
    
    $(".Hlookbook").mouseleave(function(){
        $(this).children("img").attr("src","img/cont2/homme_lookbook_ot.jpg"); 
    });    
    
    $(".shop").mouseenter(function(){
        $(this).children("img").attr("src","img/cont2/shop_ov.jpg"); 
    });
    
    $(".shop").mouseleave(function(){
        $(this).children("img").attr("src","img/cont2/shop_ot.jpg"); 
    });    
    
    
    /********* bottom **********/
    
    $(".mileageC").mouseenter(function(){
        $(this).children("img").attr("src","img/cont2/mileage_ov.png"); 
    });
    
    $(".mileageC").mouseleave(function(){
        $(this).children("img").attr("src","img/cont2/mileage_ot.png"); 
    }); 
    
    
    
    /********** footer **********/
    
    
    $(".facebookB").mouseenter(function(){
        $(this).children("img").attr("src","img/footer/facebook_ov.png"); 
    });
    
    $(".facebookB").mouseleave(function(){
        $(this).children("img").attr("src","img/footer/facebook_ot.png"); 
    });
    
    $(".blogB").mouseenter(function(){
        $(this).children("img").attr("src","img/footer/blog_ov.png"); 
    });
    
    $(".blogB").mouseleave(function(){
        $(this).children("img").attr("src","img/footer/blog_ot.png"); 
    });
    
    $(".kakaoB").mouseenter(function(){
        $(this).children("img").attr("src","img/footer/kakao_ov.png"); 
    });
    
    $(".kakaoB").mouseleave(function(){
        $(this).children("img").attr("src","img/footer/kakao_ot.png"); 
    });
    
    $(".mileageB").mouseenter(function(){
        $(this).children("img").attr("src","img/footer/mileage_small_ov.png"); 
    });
    
    $(".mileageB").mouseleave(function(){
        $(this).children("img").attr("src","img/footer/mileage_small_ot.png"); 
    });
    
    
    
//    var imgArr = $(img){
//        
//        
//        
//        
//        
//    }
    

//cf. 주소로 이동하고 싶을때    
//    $(".event").mouseleave(function(){
//        $(this).attr("href","http://www.naver.com"); 
//    });

    
});
