

'use strict';


// $(window).on("scroll", function(){

//     let sc_top = $(this).scrollTop();
//     let sc_left = $(this).scrollLeft();

//     $(".top").text(sc_top);
//     $(".left").text(sc_left);
// });


$(function(){
    $("#user_id1 , #user_pw1").on("focus",function(){
        $(this).css({
            "background": "pink"
        });
    });
// 포커스가 입력의 요소 안에 있을때 입력창 배경이 핑크가 됨

$("#user_id1 , #user_pw1").on("blur",function(){
    $(this).css({
        "background": "#fff"
    });
});
// 포커스가 이동하면 다시 하얀색

$("#frm2").on("focusin", function(){
    $(this).css({
        "background": "pink"
    });
});

$("#frm2").on("focusout",function(){
    $(this).css({
        "background": "#fff"
    });

});

// 포커스 안에 있을때 입력창을 싸고 있는 배경 전체가 변함

});

$(function(){

    $(".btn1")
    .data({"text":"javascript"})
    .on({
        "mouseover" : overFnc,
        "mouseout" : outFnc
    });
//마우스에  포인터를 올리면 overFnc()함수를 호출
//접근성을 배려하지 않음 --사용하지마




$(".btn2")
.data({"text":"welcome"})
.on({
    "mouseover focus" : overFnc,
    "mouseout blur" : outFnc
});
//접근성을 배려한 이벤트 사용
    function overFnc(){
        $(".txt").text($(this).data("text"));
//.data()는 선택한 요소에 속성 추가
    }
    function outFnc(){
        $(".txt").text("");
    }


$(function(){

    $("#rel_site").on("change",function(){

        $(".txt").text($(this).val());
    });
});

});

//키보드 이벤트

$(function(){
    $(document).on("keydown", keyEventFnc);

    function keyEventFnc(e){
        let direct = '';

        switch(e.keyCode){
            case 37:
                direct = 'LEFT';
                break;

             case 38:
                direct = 'TOP';
                break;

            case 39:
                direct = 'RIGHT';
                break;
    
            case 40:
                direct = 'BOTTOM';
                break;
        
        }

        if (direct) $("#user_id").val(direct);
    }
});