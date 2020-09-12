'use strict';

// let id = "kay"
// let pw = "1234444"

// const user_id = prompt(" 아이디는? ","");
// if(user_id){
//     const user_pw = prompt(" 비번은?", "");
//     if(user_pw){
//         document.write(`${user_id}님 반가우`);
//     }else {
//         alert("비밀번호가 일치하지 않는다");
//         location.reload();
//     }
// } else {
//     alert("아이디가 일치하지 않는다")
//     location.reload();

// };


// const site = prompt("네이버 다음 구글중 즐겨사용하는 포털은?","");

// let url;

// switch(site) {
//     case "구글" : url = "www.google.com";
//     break;
//     case "네이버" : url = "www.naver.com";
//     break;
//     case "다음" : url = "www.daum.net";
//     break;
//     default: alert("보기중 없는 사이트 입니다.");
// };

// if(url) location.href =`http://${url}`;




// let i = 1;
// while( i <= 10 ) {
//     document.write(`안녕하세요 ${i} <br>`);
//     i++;
// }
// document.write("the end");

// while( i <= 30 ) {
//     if( i % 2 === 0 && i % 6 === 0 ) {
//         document.write(` ${i} <br>`);
//     } 
//     i++;
// };

// let j = 20;
// while(j >= 10){
//     if( j % 2 === 0 ){
//         document.write(`<p class ='blue'> ${j} </p><br>`);
//     }else{document.write(`<p class ='red'> ${j} </p><br>`);}
//    j--; 
// } ;






// html 태그를 선택을 하는 것은 document.

let firstTitle = document.getElementById('title'),
//아이디로 선택해서 불러오기
    myList = document.getElementsByClassName('list'),
//클래스명으로 불러오기
    paragraphs = document.getElementsByTagName('p'),
//태그 네임으로 불러오기
    myList2 = document.querySelector('.list .red');
//css식으로 불러오기

// ;을 안쓰고 , 쓰면 let을 중복 사용 안할수 있음


// firstTitle.style.color = 'blue';
// firstTitle.style.display = 'none';

// myList[0].style.display = 'none';



// //반복문을 이용해서 패러그래프 색깔 붉게 만들기

// for(let i = 0; i<= paragraphs.length; i++){
//     paragraphs[i].style.color = 'red';
// };


// -----------------------------------------------------


const btn = document.getElementById('submit'),
    container = document.querySelector('.container');

btn.addEventListener('click', function(){
    btn.style.color = 'red';
    console.log('버튼이 클릭되었습니다');
}); 

container.addEventListener('mouseenter',function(){
    console.log('마우스 엔터');
});
container.addEventListener('mouseleave',function(){
    console.log('마우스 리브');
});


window.addEventListener('keydown', function(event){
    console.log(event.key);
    console.log(event.keyCode);
    
});
