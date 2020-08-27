'use strict';

$(function(){

    $(".txt1").closest("div")
    .css({
        "border":"2px solid blue"
    });
    //txt1과 가장 가가운 div
});


$(function(){
    $("#menu li:first").css({
        // "background": "#ff0"
    });

    $("#menu li:last").css({
        // "background": "#f00"
    });

    $("#menu li:even").css({
        // "background": "#ff0"
    });
    //짝수인덱스 요소

    $("#menu li:odd").css({
        // "background": "#f00"
    });
    //홀수 인덱스 요소

    $("#menu li").eq(2).css({
        "background": "#ff0"
    });

    $("#menu li:lt(2)").css({
        "background": "#f0f"
    });
    //인덱스번호 2보다 작은 li

    $("#menu li:gt(2)").css({
        "background": "#0ff"
    });
    //인덱스번호 2보다 큰 li


    $("li:first-of-type").css({
        // "background": "#0ff"
    });

    
    $("li:last-of-type").css({
        // "background": "#f0f"

    });


    $(".menu1 li:nth-child(1)").css({
        "background": "#0ff"
    });

    $(".menu1 li:nth-child(2n)").css({
        "background": "#f0f"
    });


    
$(".menu2 li:nth-last-child(2)").css({
    "background": "#f0f"
});





    

});

