
// 08.13

// //도전예제
// const price1 = 3000;
// const price2 = 6000;
// const price3 = 3000;

// let totalPrice = price1+price2+price3 <= 10000;
// totalPrice = totalPrice ? "굿굿" : "지출많음";
// console.log(totalPrice);


// const p1 = 1200;
// const p2 = 1300;
// const p3 = 1000;
// const p4 = prompt('4분기','0');

// const nor = (p1+p2+p3)*0.3;
// let re =  p4 > nor;
// re = re ? '평균 이상' : '평균 미달';
// console.log(re);



// 08.15

// //조건문 예제
const walkAmount = prompt("당신의 하루 걷는 양은 몇보 인가요?", "0");

if (walkAmount >= 10000) {
    document.write("매우 좋은 습관 입니다", "<br>");
};
document.write("=====The End======");



const min = prompt("하루에 몇분 통화하는가?","0");
if (min >= 60) {
    document.write("많이 사용하는 편","<br>");
};
document.write("===끝 ===");



const userName = prompt("방문자의 이름은?", "");


if (userName) {
    document.write(`${userName}님 반가워요!`);
};




const num = prompt("니가 좋아하는 숫자는?","0");

if (num % 2 === 0) {
    document.write("너가 좋아하는 숫자는 짝수");
} else {
    document.write("너가 좋아하는 숫자는 홀수");
};

// 짝수 구하기 식 num % 2 === 0



// confirm 객체사용 확인 취소 창만들기

const result = confirm("정말로 탈퇴하시겠습니까?");

if(result) {
    document.write("잘가라 빠이");
} else {
    document.write("탈퇴 취소 되었습니다.");
}





const mon = prompt("현재는 몇월입니까?", "");

if (mon >=9 && mon <= 11) {
    document.write(" 가을 독서의 계절.");
} else if (mon >= 6 && mon <= 8) {
    document.write("여름 여행가기 좋은 계절.");
} else if (mon >= 3 && mon <= 5) {
    document.write("봄 그냥 좋은 계절.");
} else {
         document.write("겨울 스키타기 좋은 계절.");

};



