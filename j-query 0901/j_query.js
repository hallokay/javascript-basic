

'use strict';

//이벤트 메서드

// $(function(){


// $(document).ready(function(){
//     let h1 = $(".img1").height();
//     console.log(`ready: ${h1}`);
// });//html 전체요소가 로딩되면 이벤트 핸들러 실행

//  $(window).load(function(){
//      let h2 =$(".img1").height();
//      console.log(`load: ${h2}`);
//  });
//  //외부소스가 완전히 로딩되면 이벤트 핸들러 실행



// $(".btn1").on("click", function(e){
//     e.preventDefault();
//     //a에 링크된 페이지로 이동하는 기본 이벤트 차단--링크안열림
//     $(".txt1").css({
//         "background" : "#ff0"
//     });
// });

// $(".btn2").on("click", function(e){
//     $(".txt2").css({
//         "background" : "#0ff"
//     });
// });


// $(".btn3").on("dblclick", function(){

//     $(".txt3").css({
//         "background" : "#0f0"
//     });
// });


// });

// 마우스 오버

$(function(){


    $(".btn1").on({
        "mouseover" : function() {
            $(".txt1").css({
                "background" :"yellow"
            });
        },
        //마우스 오버 되었을때

        "mouseout" : function() {
            $(".txt1").css({
                "background" : "none"
            });
        }
        //마우스가 벗어났을때

       
    });



    $(".btn2").hover(function(){
        $(".txt2").css({
            "background" :"aqua"
        });
    },
    function(){
        $(".txt2").css({
            "background" : "none"
        });
    } 
    );

    
});


$(function(){

    $(".box_1").on("mouseout", function(){
        $(".box_1").css({
            "background" :"yellow"
        });
    });
//마우스가 해당요소에서 벗어나면 이벤트 발생-- 목록에서 떨어지는 순간


$(".box_2").on("mouseleave", function(){
    $(".box_2").css({
        "background" :"pink"
    });
});
//대상요소를 포함한 범위내에서 벗어나면 

});


$(function(){

    $(document).on("mousemove",function(e){

        $(".posX").text(e.pageX);
        $(".posY").text(e.pageY);


    });
});