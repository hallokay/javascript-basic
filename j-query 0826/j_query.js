'use strict';
        
$(function(){
    // $("*").css("color","red");

    // $("#title").css("border","1px solid blue")
    // .css("background-color","#ff0");
    // //체이닝 기법
    // $("h3,#title").css('background','#0ff')
    // .css('border','5px solid yellow');
    // $("h2.tit").css('background','#ccc')
    // .css('border','5px solid green')
});


//부모요소 선택자
$(function(){
$("#list_1").parent()//리스트 1-1의 부모 ul
.css("border","2px dashed #f00");
});


//하위 요소 선택자
// $(function(){
//     $('#wrap h1').css({
//         'background':'pink',
//         'border': '3px dashed #f00'
//     });
// });

//#wrap아래의 모든 h1선택


$(function(){
    //자식요소 선택자
    // $("#wrap > h1").css("border","3px solid blue");
    //바로 하위의 h1

    // $("#wrap > section").children()
    // .css({
    //     "background": "yellow",
    //     "border": "2px solid pink"
    // });

    // //형제 요소 선택자 이전 다음

    // let style_1 = {
    //     "background": "#ff0",
    //     "border": "2px solid purple"
    // }

    // let style_2 = {
    //     "background": "#0ff",
    //     "border": "2px dashed purple"
    // }
    
    // $(".txt").prev()
    // .css(style_1);


    // $(".txt + p").css(style_2);
    // 클래스의 바로 다음 오는 선택요소

    // $(".txt").next().next()
    // .css(style_2);
    //다음오는 형제요소



    //전체 형제 선택자
    // $(".txt").prevAll().css(style_1);
    // $(".txt").nextAll().css(style_2);

    // 전체 형제 요소 선택자
    // $(".txt").siblings().css(style_1);
    //이전 이후 형제들 전부 선택됨
    

// 범위제한
// $(".txt_2").prevUntil(".tit").css(style_1);

// $(".txt_2").nextUntil(".txt6").css(style_2);


$(".txt1").parent().css({
    "background": "#ff0",
    "border": "2px dashed purple"
});


// 텍스트 2의 부모인 div
$(".txt2").parent("div").css({
    "background": "#f00",
    "border": "2px dashed green"
});




});