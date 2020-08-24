

//     //객체 생성자 함수
//     //객체 생성자 파라미터는 대문자로 쓸것
//    { function CheckWeight(Name,Height,Weight) {
//         this.userName = Name;
//         this.userHeight = Height;
//         this.userWeight = Weight;
//         this.minWeight;
//         this.maxWeight;
//         //생성한 객체에 이름 키 몸무게등의 속성 등록
        
//         this.getInfo = function(){
//             let str = ""
//             str += `이름: ${this.userName}`;
//             str += `키: ${this.userHeight}`;
//             str += `몸무게: ${this.userWeight},<br>`;
//             return str;
//         }

//         this.getResult = function() {
//             this.minWeight =(this.userHeight - 100)*0.9 -5;
//             this.maxWeight =(this.userHeight - 100)*0.9 +5;
//             //몸무게 평균 오차

//             if(this.userWeight >= this.minWeight
//                 && this.userWeight <= this.maxWeight) {
//                     return "정상몸무게";
//             } else if (this.userWeight < this.minWeight){
//                 return "정상 미달";
//             } else { 
//                 return "정상 초과"; 
//             }
        
//         }

//     }
    
//     const jang = new CheckWeight("장보라" , 168, 62);
//     const park = new CheckWeight("박달채" , 180, 82);
//     console.log(jang);
//     console.log(park);
    
//     document.write(jang.getInfo());
//     document.write(jang.getResult());
// }
    
    //함수가 길어지고 비효율적-- 프로토 타입쓸것!!!

// 프로토 타입


// { function CheckWeight(name, height, weight){
//     this.userName = name;
//     this.userHeight = height;
//     this.userWeight = weight;
//     this.minWeight;
//     this.maxWeight;
// }
// CheckWeight.prototype.getInfo = function(){
//     let str = ""
//     str += `이름: ${this.userName},`;
//     str += `키: ${this.userHeight},`;
//     str += `몸무게: ${this.userWeight} <br>`;
//     return str;
// }
// CheckWeight.prototype.getResult = function() {
//     this.minWeight = (this.userHeight - 100)*0.9 -5;
//     this.maxWeight = (this.userHeight - 100)*0.9 +5;

//     if(this.userWeight >= this.minWeight
//         && this.userWeight <= this.maxWeight) {
//             return "정상몸무게";
//     } else if (this.userWeight < this.minWeight){
//         return "정상 미달";
//     } else { 
//         return "정상 초과"; 
//     }
// }

// const jang = new CheckWeight("장보라" , 168, 62);
// const park = new CheckWeight("박달채" , 180, 82);
// console.log(jang);
// console.log(park);

// document.write(jang.getInfo());
// document.write(jang.getResult(),"<br>");

// document.write(jang.getResult===park.getResult);
// //두객체가 같은 함수 사용하는지

// }

// //도전 예제
// {
//     function chColor(){
//         let arrColor = ["#ff0", "#6c0", "#fcf", "#cf0", "#39f"];
//         let arrNumber = Math.floor(Math.random()*arrColor.length);
//         // Math.floor(Math.random()*arrColor.length); 이렇게 하면 계속 랜덤
//         // Math.floor(Math.random(arrColor.length)); 한번만 랜덤 선택됨
    
//         let bodyTag = document.getElementById("theBody");
//         bodyTag.style.backgroundColor = arrColor[arrNumber];
    
//     };


    //예제 2
    { function TestScore(name, kor, eng){
        this.userName = name;
        this.korNum = kor;
        this.engNum = eng;
    }

    TestScore.prototype.getInfo = function(){
        document.write(`이름: ${this.userName},<br>`);
        document.write(`국어: ${this.korNum},<br>`);
        document.write(`영어: ${this.engNum},<br>`);

    }



    TestScore.prototype.getAvg = function(){
        return(this.korNum + this.engNum)/2;

    }

    

    let kimgun = new TestScore("김군", 89, 98);
    let ohgun = new TestScore("오군", 32, 98);


    kimgun.getInfo();
    document.write(`평균점수: ${kimgun.getAvg()},<br>`);

    ohgun.getInfo();
    document.write(`평균점수: ${ohgun.getAvg()} ,<br>`);
    };