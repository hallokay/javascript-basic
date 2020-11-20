// 별찍기

for(let i = 1; i <= 6; i++){
    console.log('*'.repeat(i));
}

for(let i = 6; i >= 1; i--){
    console.log('*'.repeat(i));
}

//2개씩 뺴기
for(let i = 10; i >= 2; i -= 2){
    console.log('*'.repeat(i));
}

console.clear();

// 배수로 넣기
for(let i = 1; i <= 16; i *= 2){
    console.log('*'.repeat(i));
}

// 공백 넣기
for(let i = 6; i >= 1; i--){
    console.log(' '.repeat( 6 - i )+ '*'.repeat(i));
}
console.clear();


//
for(let i = 9; i >= 1; i-=2){
    console.log(' '.repeat((9 - i) / 2) + '*'.repeat(i));
}
// 공백을 2로 나눠줘야 양옆으로 공백이 생김

for(let i = 0; i < 6; i++){
    console.log('*'.repeat(i + 1));
}
//보통 반복문은 0부터 시작함 그럼 6개만 뺴고 싶으면 조건에 =을 넣으면 안되
// 그리고 나오는 값에 +1 더해주기


//마름모꼴 별찍기
