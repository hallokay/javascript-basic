'use strict';

// let name = prompt("당신의 이름은","");
// let height = prompt("당신의 키은","");
// let weight = prompt("당신의 체중은","");


// const normal_w = (height -100) / .9;
// let result = weight >= normal_w - 5 &&  weight <= normal_w + 5 ;
// result = result ? "적정체중입니다 " : "적정체중이 아닙니다"
// document.write(`${name}님은 ${result}`);



const pr1 = 3000;
const pr2 = 6000;
const pr3 = 3000;

const total = pr1 + pr2 +pr3;
let result = total >=10000 ? "초과사용" : "돈관리를 잘";
document.write(`너는${result} 했다 <br>`);



// let sale = prompt("4분기 판매량 입력");

// const sale1 = 1200;
// const sale2 = 1300;
// const sale3 = 1000;

// const avg = (sale1 + sale2 + sale3) / 3;
// const avgrs = sale >= avg ? "평균이상" : "평균 미달";
// document.write(`너는${avgrs} 했다`);




// let walkAmount = prompt("하루 걷는 양은 몇보인가?");

// if(walkAmount >10000) {
//     document.write("아주 좋은 습관");
// }else {
//     document.write("걸어");
// };

// document.write(" the end");



// let min = prompt("당신의 하루 통화량은?");
// if( min >= 60){
//     document.write("통화 많이 하네", "<br>");
// };
// document.write(" the end");



// let username = prompt("방문자 이름은","");
// if(username){
// document.write(`${username}님 반가워`);

// };

let num = prompt("당신이 좋아하는 숫자는?","");

if(num % 2 === 0){
    document.write("당신이  좋아하는 숫자는 짝수");
} else {
    document.write("당신이  좋아하는 숫자는 홀수");
}
