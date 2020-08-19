
// //문자열 객체 --자스에서 가장많이 쓰임


// const t = 'hello thank you good luck to you';

// //charAt(인덱스 번호) -- 그번호에 있는 인덱스 문자열 불러옴
// document.write(t.charAt(16),"<br>");
// //인덱스 16에 저장된 문자열 불러옴
// document.write(t.charAt(3),"<br>");


// //indexOf('찾을 문자') --제일 먼저 일치하는 문자의 인덱스 번호 불러움 찾는 문자 없으면 -1 반환
// document.write(t.indexOf('you'),"<br>");
// //왼쪽 문자열 부터 제일먼저 you가 발견된 인덱스 반환
// document.write(t.indexOf('thank'),"<br>");

// document.write(t.indexOf('you',16),"<br>");
// //인덱스 번호 16번 위치부터 제일먼저 있는 you 의 인덱스 값 반환


// //lastIndexOf('찾을 문자') -- 뒤에서부터 앞으로 검열
// document.write(t.lastIndexOf('you'),"<br>");
// //뒤쪽에서부터 제일 처음 나오는 문자열의 인덱스 값 반환
// document.write(t.lastIndexOf('you',25),"<br>");
// //뒤에서부터 앞쪽으로.. 25번부터 앞으로 나오는 you의 인덱스 값 반환

// //match('찾을 문자') -- 앞에서 부터 검열 일치하는 문자와 같은 문자 반환
// document.write(t.match('luck'),"<br>");

// //search('찾을 문자') -- 앞에서 부터 제일 첫번째 찾을 문자의 인덱스 번호 반환
// document.write(t.search('you'),"<br>");


// //substr(a,문자 개수) --인덱스 번호 a부터 문자개수만큼 불러옴
// document.write(t.substr(21,4),"<br>");


// //substring(a,b)  -- 인덱스번호 a 부터b이전 구간의 문자 반환
// document.write(t.substring(6,12),"<br>");


// //replace('찾을 문자','바꿀문자')
// document.write(t.replace('you','me'),"<br>");

// //toLowerCase() 소문자
// document.write(t.toLowerCase(),"<br>");

// //toUpperCase 대문자
// document.write(t.toUpperCase(),"<br>");

// //length문자열의 길이 반환 
// document.write(t.length,"<br>");

// const s = t.split(' ');
// //공백 문자를 기준으로 문자 분리 분리된 문자열은 배열에 저장되어 s에 할당
// document.write(s[0],"<br>");
// document.write(s[4],"<br>");

// const str = "A";
// const j = str.charCodeAt(0);
// document.write(j);
// document.write(String.fromCharCode(65),"<br>");


//예제 -- 방문자의 영문이름을 소문자로받아서 대문자로 바꿔출력 
//연락처를 받아서 정보가 노출되지 않도록 별로 표시

// const userName = prompt('당신의 영문 이름은?','');

// const upperName = userName.toUpperCase();
// document.write(upperName,"<br>");

// const userNum = prompt('연락처는?','');

// const resultNum = userNum.substring(0, userNum.length - 4) +'****';
// document.write(resultNum,"<br>")

//이메일 유효성을 검사하는 예제
// const userEmail = prompt('당신의 메일주소는?','');
// const arrUrl = ['.co.kr','.com','.net','.or.kr','.go.kr'];

// let check1 = false;
// let check2 = false;


// if (userEmail.indexOf('@') > 0) {
//     check1 = true;
// }
// //이메일 유호성을 검사하여 @가 정상적으로 작성했으면 check1은 트루

// for(let i =0; i < arrUrl.length; i++ ){
//     if(userEmail.indexOf(arrUrl[i]) > 0) {
//         check2 = true;
//     }
//     //만약 입력한 이메일과 url배열의 단어를 하나씩 비교해서 1개의 단어라도 일치하면 check2 트루
// }

// if(check1 && check2){
//     document.write(userEmail);
// } else {
//     alert('이메일 형식이 잘못되었습니다.');
// };

//3초 간격으로 변수 i를 1씩 증가
let intv = setInterval(function(){i++;},3000);
let intv = setInterval("i++",3000);

//clearInterval 은 setInterval를 취소시킴
clearInterval(intv);




