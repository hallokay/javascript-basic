'use strict';


$(function(){
    $(".menu_wrap1 a").on("click", function(e){
        e.preventDefault();

        $(".menu_wrap1 a").css({
            "background": "#fff"
        });
        $(this).css({
            "background": "#ff0" 
        })
    });

    $(".menu_wrap2 a").on("click", function(e){
        e.preventDefault();

        $(".menu_wrap2 a").css({
            "background": "#fff"
        });
      
        let idx = $(".menu_wrap2 a").index(this);
        
        
        $(".menu_wrap2 a").eq(idx).css({
         "background": "#0ff"
        });
    $(".idxNum").text(idx)

    });



    $(".btn1.on").on("mouseover focus" , function(){
        alert("hello");
    });

    $(".btn1").addClass("on");

    //이벤트를 등록하고 class값을 생성하면 이벤트가 정상등록되지 않음

    $(document).on("mouseover focus", ".btn2.on", function(){
        alert("hello");
    });

    $(".btn2").addClass("on");



//     $(".btn_wrap").delegate(".btn_1.on",
//     "mouseoveer focus", function(){
//         alert("hello");
//     });
//     $(".btn_1").addClass("on");

//     $(document).one("mouseover focus",".btn_2.on", function(){
//         alert("welcome");
//     });
//     $(".btn_2").addClass("on");
// //1회만 발생시키고 제거됨


$(".btn1").on("mouseover", function(){
    alert("hello");
});

$(document).on("mouseover", ".btn2", function(){
    alert("welcome");
});

let btn2 = $("<p><button class=\"btn2\">버튼2</button></p>")

$("#wrap").append(btn2);

$(".del1").on("click", function(){
    $(".btn1").off("mouseover");
});


$(".del2").on("click", function(){
    $(document).off("mouseover", ".btn2");
});




});


$(function(){

    let baseFontSize = 14;

    $(".zoomBtnZone button").on("click", zoomInOut);
    function zoomInOut(){
        if($(this).hasClass("zoomOut")){
            if( baseFontSize <=8) return false;
            baseFontSize--;
        } else if($(this).hasClass("zoomIn"))
        {
            if( baseFontSize >= 20) return false;
            baseFontSize++;
        }
        else {
            baseFontSize = 14;
        }
        $(".fontSize").text(baseFontSize+ "px");
        $("body").css({fontSize : baseFontSize + "px"});
    };
});


$(function(){

    let beforeMenu = null;

    $(".gnb a").on("mouseover focus", function(){

        if(beforeMenu) beforeMenu.css({background: "none"});
        $(this).css({"background": "#0ff"});
        beforeMenu = $(this);

    });

    $(".gnb").on("mouseout blur", function(){
        if(beforeMenu) beforeMenu.css({background: "none"});
    });
});