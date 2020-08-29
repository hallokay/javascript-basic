'use strict';

$(function(){

    $(".wrap p:first").text("내용1");
    //랩의 p태그 첫번째 택스트를 바꾼다

    $(".wrap p.active")
    .removeClass("active")
    .addClass("on");

    $(".wrap p:eq(2) a")//p태그의 인덱스 2번의 a
    .attr("href", "http://www.naver.com");

    $(".wrap p:eq(3) input")
    .val("korea");
    //벨류값 바꾸기

    $(".wrap2 p:first")
    .after("<p>애프터 추가1</p>");

    $(".wrap2 p:first")
    .before("<p>비포 추가2</p>");


    $(".wrap3 p")
    .unwrap()//디브를 삭제
    .wrapInner("<strong/>");
    // /안에 스트롱태그로 감싸줌

});

//이벤트 메서드

$(function(){
 
    $(".btn1").click(function(){
        $(".btn1").parent().next()
        // .css({"color": "#f00"});
    });

    $(".btn2").on({
        "mouseover focus" : function(){
            $(".btn2").parent().next()
            // .css({"color": "#0f0"});
        },

        "mouseout blur" : function(){
            $(".btn2").parent().next()
            // .css({"color": "#000"});
        },
    });

    $(".btn1").click(function(){

        $(".btn1").parent().next()
        .css({
            "color": "#f00"
        });
    });

$(".btn1").click();

$(".btn2").on({

    "mouseover focus" : function() {
        $(".btn2").parent().next()
            .css({"color": "#0f0"});
    }
});

$(".btn2").trigger("mouseover");








});
