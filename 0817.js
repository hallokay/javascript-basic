////중첩if

// const id = "kay1024"
// const pw = "2336"

// const user_id = prompt("아이디는?");

// if  (id == user_id) {
//    //아이디가 일치할때 비밀번호 창을 불러옴
//    const user_pw = prompt("패스워드는?");
//    if  (pw == user_pw) {
//     document.write(`${user_id}님 반가워요`);
 
//     } else {
//      alert("비밀번호가 일치하지 않습니다");
//      location.reload();
//     } 

// } else {
//     alert("아이디가 일치하지 않습니다");
//     location.reload();
// };
 


//선택문  switch
//if 는 만족하는 데이터가 여러개 일때 switch는 여러경우의 값중 일치하는 데이터 찾는거


// const site = prompt("다음 네이버 구글중 즐겨 사용하는 검색 포털은?","");
// let url;

// switch(site) {
//     case "구글": url = "www.google.com";
//     break;
//     case "네이버": url = "www.naver.com";
//     break;
//     case "다음": url = "www.daum.net";
//     break;
//     default: alert("보기중 없는 사이트 입니다");
// };

// if (url) location.href = "http://" + url;
// //url에 저장된 장소로 이동 


//반복문 - while, do while, for 가 있다
//while --먼저 조건식 만족 여부 검사

// let i = 1;

// while (i <= 10) {
//     document.write(`안녕하세요 ${i} <br>`);
//     i++;
// }
// document.write("the End");


//1-30 중에서 2의 배수이면서 6의 배수인 숫자만 출력

// let i = 1;
// while (i <= 30) {
//     if(i % 2 === 0 && i % 6 === 0){
//         document.write(i,"<br>");
//     }
//     i++;
// };


//20부터 10까지중 짝수일때 파란색 홀수일때 붉은색
 
// let i = 20;
// while (i >= 10) {
//     if (i % 2 === 0) {
//         document.write(`<p class='blue'> ${i} </p>`);
//     } else {
//         document.write(`<p class='red'> ${i} </p>`);
//     }
//     i--;
// };

//do while--한번은 코드를 실행한후 조건식 검사

// let i = 10;
// do {
//     document.write("hello");
// } while (i < 3);

//for --조건식이 만족할때까지 사용하기 편해서 빈도수 높음

// for ( let i = 1; i <= 10; i++) {
//     document.write(`반복 ${i} <br>`);
// };

//1 - 100  5의 배수 빨간색 7의 배수 초록 5의배수이자 7의배수 일때 아쿠아
 
// for(i = 1; i <=100; i++){
//     if (i % 5 ===0 && i % 7 !== 0) {
//         document.write(`<p class='red'> ${i} </p>`);
//     } else if (i % 7 === 0 && i % 5 !== 0) {
//         document.write(`<p class='blue'> ${i} </p>`);
//     } else if ( i%7 ===0 && i%5 === 0 ) {
//         document.write(`<p class='green'> ${i} </p>`);
//     }
// };



//break -- 반복문 강제 종료

// for (let i = 1; i <= 10; i++){
//     if (i === 6) break;
//     document.write(i ,"<br>");
// };
// document.write("the End");

//continue -- 반복문에서만 사용가능 
// continue 다음에 오는 코드는 무시하고 바로 조건식으로 넘어감

//짝수는 무시하고 홀수만 출력
// for (let i = 1; i <= 10; i++){
//     if (i % 2 === 0) continue;
//     document.write(i ,"<br>");
// };
// document.write("the End");

//중첩for문

// for(let i = 1; i <= 3; i++){
//     for (let k = 1; k <= 2; k++){
//         document.write(`${i}행 ${k}열 <br>`);
//     }
//     document.write("<br>");
// };

// 바깥 for 는  i 가 3이 될때까지 세로
//안쪽for는 k가 2가 될때까지 가로

//도전 예제
//while 로 구구단 출력
// let i = 1;
// while (i < 10) {
//     document.write(`5x ${i} = ${i*5} <br>`);
//    i++;
// };


//5행 5열 데이터가 1-25까지 출력되게

let num = 1;
let t = "<table border=1>";

for (let i = 1; i <= 5; i++) {
    t += "<tr>";

    for(let k = 1; k <= 5; k++){
        t+= `<td> ${num} </td> `;
        num++;
    }
    t += "</tr>";
};
t+="</table>";
console.log(t);
document.write(t);