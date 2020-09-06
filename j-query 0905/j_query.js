'use strict';
// 애니메이션 효과
$(function(){
    // $(".btn2").hide();

    // $(".btn1").on("click",function(){
    //     $(".box").slideUp(1000,"linear",
    //     function(){
    //         $(".btn1").hide();
    //         $(".btn2").show();
    //     });
    // });
//슬라이드 업버튼 클릭시 박스가 접히면서 사라집
//슬라이드 업버튼 사라지고 페이드인 버튼 생김

// $(".btn2").on("click", function(){
//     $(".box").fadeIn(1000,"swing", 
//     function(){
//         $(".btn2").hide();
//         $(".btn1").show();
//     })
// });

// $(".btn3").on("click", function(){
//     $(".box").slideToggle(1000, "linear");

// });

// $(".btn4").on("click", function(){
//     $(".box").fadeTo("fast",0.3);

// });


// $(".btn5").on("click", function(){
//     $(".box").fadeTo("fast",1);

// });


//-----------------------------------------------------

// $(".btn_1").on("click", function(){
//     $(".txt1").animate({
//         marginLeft: "500px",
//         fontSize: "30px"
//     },
//     2000, "linear", function(){
//         alert("모션완료");
//     });
// });

// $(".btn_2").on("click", function(){
//     $(".txt2").animate({
//         marginLeft: "+=50px"
//     }, 1000);
// });

//-------------------------------------------------

// $(".txt1")
// .animate({marginLeft: "300px"}, 1000);

// $(".txt2").delay(3000)
// .animate({marginLeft: "300px"}, 1000);


// $(".btn1").on("click", moveElement);

// function moveElement(){
//     $(".txt3").animate({marginLeft: "+=50px"}, 800);

//     $(".txt4").animate({marginLeft: "+=50px"}, 800);
//     $(".txt4").stop();
//     //아예 동작하지 않음

//     $(".txt5").animate({marginLeft: "+=50px"}, 800)
//     $(".txt5").stop(true,true);
//     //애니메이션 없이 종료시점으로 돌아감 그래서 움직이긴 움직임

// };



// $(".txt_1")
// .animate({marginLeft: "200px"}, 1000)
// .animate({marginTop: "200px"}, 1000)
// .queue(function(){
//     $(this).css({background: "red"});
//     $(this).dequeue();
// })
// .animate({marginLeft: "0px"}, 1000)
// .animate({marginTop: "0px"}, 1000)

// --------------------------------------------------------------



// $(".txt1")
// .animate({marginLeft: "200px"}, 1000)
// .animate({marginLeft: "300px"}, 1000)
// .animate({marginLeft: "400px"}, 1000);



// $(".txt2")
// .animate({marginLeft: "200px"}, 1000)
// .animate({marginLeft: "300px"}, 1000)
// .animate({marginLeft: "400px"}, 1000);


// $(".txt2").clearQueue();


// let txt1 = $(".txt_1");
// let count = 1;

// $(".btnWrap button").on("click", function(){

//     if(!txt1.is(":animated")) {
//         if($(this).hasClass("backBtn")){


//             count--;
//             if(count < 1){
//                 count = 1;
//                 return false;
//             }
//             txt1.animate({marginLeft: "-=50%"}, 300);
    
//         } else {
//             count++;
//             if(count > 10) {
//                 count = 10;
//                 return false;
//             }
//             txt1.animate({marginLeft: "+=50%"}, 300);
       
//         }
            

//         }
     

// });



// -----------------------------------------------------------------------------------


// $("#btn").on("click", function(){

//     $("h2").fadeOut(1000, "linear");
// });


$("#btn").on("click", function(){
    $("#ctx").animate({
        marginLeft: "+=50px"
    },500);
});


});