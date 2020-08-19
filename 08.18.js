
//객체
//객체(obj) 기능(method) 속성(property)
 
//내장 객체
//new 키워드 사용
const tv = new Object();
tv.color = "white";
tv.price = 3000000;
tv.info = function ()  {
    document.write(`tv색상: ${this.color}<br>`);
    document.write(`tv가격: ${this.price}<br>`);
};

document.write("<h1>tv 객체 메서드</h1>");
tv.info();


//기본객체 생성함수
const car = {
    color: "black",
    price: 50000000,
    info: function() {
        document.write(`car색상: ${this.color}<br>`);
        document.write(`car가격: ${this.price}`);
    }
};
document.write("<h1>car 객체 메서드</h1>");
car.info();




// 날짜 정보 객체
// const today = new Date();
// const nowMonth = today.getMonth();
// nowDate = today.getDate();
// nowDay = today.getDay();


// document.write("<h1>오늘 날짜 정보</h1>");
// document.write(`현재 월 ${nowMonth}<br>`);
// document.write(`현재 일 ${nowDate}<br>`);
// document.write(`현재 요일 ${nowDay}<br>`);



// const worldcup = new Date(2002,4,31);
// const theMonth = worldcup.getMonth();
// const theDate = worldcup.getDate();
// const theDay = worldcup.getDay();

// document.write("<h1>월드컵 날짜 정보</h1>");
// document.write(`현재 월 ${theMonth}<br>`);
// document.write(`현재 일 ${theDate}<br>`);
// document.write(`현재 요일 ${theDay}<br>`);


// 디데이 구하기
//남은 일수(밀리세컨)= 특정 날짜 객체 - 현재 날짜 객체
//1초 1000(msc);
// 1분 1000 *60;
// 1시간 1000 * 60 * 60
// 하루 1000 * 60 * 60 *24

// const today = new Date();
// const nowYear = today.getFullYear();

// const theDate = new Date(nowYear,12,31);
// //올해 연말에 대한 객체 생성
// const diffDate = theDate.getTime() - today.getTime();
// //남은 일수(밀리세컨)= 특정 날짜 객체 - 현재 날짜 객체

// const result = Math.ceil(diffDate / (1000 * 60 * 60 * 24));
// document.write(`<h1>연말 D day ${result}</h1><br>`);

//Math.ceil() 소숫점 첫째자리에서 무조건 올림



//수학 객체
const num = 2.1234;

const maxNum = Math.max(10, 5, 8, 30),  //최댓값
minNum = Math.min(10, 5, 8, 30),        //최소값
roundNum = Math.round(num),    //소수점 첫째자리 반올림
floorNum = Math.floor(num),   //소수점 첫째자리 내림
ceilNum = Math.ceil(num),    //소수점 첫째자리 올림
rndNum = Math.random(),  //0과 1사이 난수
piNum = Math.PI;     //원주율 상수 반환


document.write(maxNum,"<br>");
document.write(minNum,"<br>");
document.write(roundNum,"<br>");
document.write(floorNum,"<br>");
document.write(ceilNum,"<br>");
document.write(rndNum,"<br>");
document.write(piNum,"<br>");

Math.random()*10; //0부터 10까지 실수로 난수 반환
Math.floor( Math.random()*11 );  //0부터 10까지 정수로 난수 반환
Math.floor( Math.random()*31 );
Math.floor( Math.random()*31 )+120; //120부터 150까지 정수 난수반환


//가위 바위보

// document.write("<h1>가위바위보 맞추기</h1>");

// const game = prompt("가위 바위 보 중 선택하세요","가위");
// let gameNum;

// switch(game) {
//     case"가위":
//         gameNum = 1; break;
//     case"바위":
//         gameNum = 2; break;
//     case"보":
//         gameNum = 3; break;
// //문자열에 따라 123 저장
//     default: alert("잘못 작성했습니다");
//         location.reload();
// }

// let com = Math.ceil( Math.random()*3);
// //1-3난수 발생
// document.write("<img src=\"/imagesgame/math_img_"+ com +".jpg\">");


// if(gameNum){
//     document.write(`<img src="/imagesgame/game_1.jpg">`);
// } else {
//     document.write(`<img src="/imagesgame/game_2.jpg">`);
// };

//배열 객체 --여러개의 데이터를 하나의 저장소에 저장

const arr = [30, "따르를", true];

document.write("<h1>뱌열값 가져오기</h1>");

document.write(arr[0],"<br>");
document.write(arr[2],"<br>");
document.write(arr[1],"<br>");



document.write("<h1>뱌열값 가져오기2</h1>");

for(let i = 0; i < arr.length; i++) {
    document.write(arr[i],"<br>");

};



document.write("<h1>뱌열값 가져오기3</h1>");
let i = 0;
for(i in arr ) {

    document.write(arr[i],"<br>");

};

//배열 객체의 메서드

const arr1 = ['사당','교대','방배','강남'];
const arr2 = ['신사', '압구정', '옥수'];


let result = arr1.join('-');
console.log(result);
//배열에 저장된 값을 지정한 문자로 연결하여 하나의 문자열 반환

result = arr1.concat(arr2);
console.log(result);
//2개의 배열을 하나로 합쳐줌

result = arr1.slice(2);
console.log(result);
//2번 이전까지 삭제 후 남은 값 반환

arr1.sort();
console.log(arr1);
//오름차순 정렬

arr2.reverse();
console.log(arr2);
//배열순서 거꾸로


const greenArr = ['교대','방배','강남'];
const yellowArr = ['미금', '정자','수서'];

greenArr.splice(2, 1,'서초','역삼');
console.log(greenArr);
//2번 배열부터 1개를 지우고 서초 역삼 삽입
//배열객체의 지정데이터를 지우고 새 데이터 삽입


const data1 = yellowArr.pop();
//yellowArr 의 마지막 인덱스 데이터를 data1에 저장
//pop()은 배열의 마지막 인덱스데이터 제거
console.log(data1);

const data2 = yellowArr.shift();
//yelloArr dml 첫번째 인덱스 데이터 값을 data2에 저장
//shift는 배열의 첫번째 인덱스 데이터 제거
console.log(data2);


yellowArr.push(data2);
//data2에 저장된것을 yellowArr의 마지막 인덱스에 밀어 넣는다
console.log(yellowArr);

yellowArr.unshift(data1);
//data1 을 맨앞 인덱스에 밀어넣는다
console.log(yellowArr);









