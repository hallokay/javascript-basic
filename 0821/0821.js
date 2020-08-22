
'use strict';

//함수
// let count = 0;

// myFnc();// 호출문이 먼저 나와도 호이스팅방식으로 정상적으로 함수호출 가능

// function myFnc() {
//     count++;
//     document.write(`hello ${count},<br>`);
// }

// myFnc ();
// const theFnc = function() {
//     count++;
//     document.write(`bye ${count},<br>`);
// };

// theFnc();


//배경색 바꾸기 버튼 클릭할때마다 배경색 바뀌는 예제

const color = ['white', 'yellow', 'aqua', 'purple'];

let i = 0;
function changeColor() {
    i++;
    if( i >= color.length) {
        i = 0;
    } 
    //i 의 값이 컬러의 배열 이상이면 다시 i에 0을 대입 
    const bodyTag = document.getElementById("theBody");
//바디태그라는 변수 안에 html엘리먼트아이디 더바디를 담는다-- html선택자 소환
bodyTag.style.backgroundColor = color[i];
//바디태그에 스타일 백그라운드는 컬러변수i와 같다

};

//매개변수 함수
function myFnc(name, area) {
    document.write(`안녕하세요 나는 ${name}입니다,<br>`);
    document.write(`사는 곳은 ${area}입니다,<br>`);
};

myFnc('kay','춘천');
myFnc('보미','부산');



// const rightID = 'korea';
// const rightPw = '1234';

// function login(id,pw) {
//     if(id === rightID) {
//         if( pw === rightPw){
//             document.write(`환영합니다 ${id}님,<br>`);
//         }else {
//             alert("존재하지 않는 비밀번호 입니다.");
//         }
//     } else {
//         alert("존재하지 않는 아이디 입니다.");
//     }
// };

// const userId = prompt('아이디를 입력하세요');
// const userPw = prompt('비밀번호를 입력하세요');

// login(userId,userPw);


// function sum() {
//     const sum = arguments[0] + arguments[1] + arguments[2];
//     document.write(sum);
// }
// sum(10,20,30);

// function sum1(){
//     let sum1 = 0;
//     for(let i= 0; i< arguments.length; i++) {
//         sum1 += arguments[i];
//     }
//     document.write(sum1);

// }
// sum1(10,20,30);



//return

// function sum(num1,num2) {
//     return num1 + num2;
// };
// const result = sum(20,30);
// document.write(result);


// //예제-- 평균 점수 계산
// function testAvg(arrData) {
//     let sum = 0;
//     for (let i = 0; i < arrData.length; i++) {
//         sum += Number(prompt(`${arrData[i]}점수는?`,'0'));
//         //배열에 저장된 데이터 개수만큼 반복문 실행

//     }
    
//    let avg = sum / arrData.length;
//    return avg;
// };

// const arrSubject = ['수학', '국어','사회'];
// const result = testAvg(arrSubject);

// document.write(`평균 점수는 ${result}입니다 <br>`);


//갤러리 만들기 예제

// let num = 1;
// function gallery(direct) {
//     if(direct) {
//         if(num === 8) return;
//         num++;
//         //다음 버튼을 누르면 derect값이 1만큼 증가 넘버가 8이면 리턴 그렇지 않으면 1추가
//     } else {
//         if(num === 1) return;
//         num--;
//     }
    
//     const imgTag = document.getElementById('photo');
//     // imgTag는 아이디 포토와 연결
//     imgTag.setAttribute("src","images/pic_" + num +".jpg" );
//     //이미지 태그의 src속성을 뒤에 값처럼 변경
//     //setAttribute("속성명","새값")

// };


//재귀함수 호출 --반복문처럼 함수를 여러번 호출

let num = 0;
function testFnc() {
    num++;
    document.write(num,"<br>");
    if( num === 10) return;

    testFnc();
    //만약 넘버가 10일때 리턴 그렇지않으면 함수 다시 호출
};

testFnc();


//함수 스코프 --변수나 함수의 유효범위를 가르킴 scope--범위

// 지역변수와 지역함수의 충돌을 막기위한 예제 (function(){변수명; 함수; 호출;}());
(function (){
    let num = 100;
    function menu(){
        num += 100;
        alert(num);
    }
    menu();
    } ());
//호출시킴

(function(){
        let num = 100;
        function menu(){
            alert(num);
        }
    } ());
    //-호출 안시킴


    //객체 생성자 함수
    //객체 생성자 파라미터는 대문자로 쓸것
    (function checkWeight(Name,Height,Weight) {
        this.userName = Name;
        this.userHeight = Height;
        this.userWeight = Weight;
        this.minWeight;
        this.maxWeight;
        //생성한 객체에 이름 키 몸무게등의 속성 등록
        
        this.getInfo = function(){
            let str = ""
            str += `이름: ${this.userName}`;
            str += `키: ${this.userHeight}`;
            str += `몸무게: ${this.userWeight},<br>`;
            return str;
        }

        

    }());