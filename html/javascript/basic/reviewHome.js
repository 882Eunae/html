// let myName="user01";
// let myAge=20;
// let myObj={name:"user02",age:5};

// let MyName;

// let a;
// console.log(myName=="user01");

// myName="고길동";
// const bloodType="O";
// const PI=3.14;

// console.log("내 이름은"+myName+" 입니다");

// console.log(`반지름 5인 원의넓이는 ${5*5*PI} 입니다`);

// let myInfo={
// name:"홍길동",
// age:20
// };

// let scores=[10,20,30];
// let specialType;

// console.log(typeof specialType);
// console.log(typeof null);

// console.log(myInfo.name);
// console.log(myInfo.age);




// let result= Number(anyVal) +parseInt(anyVal2);
// console.log(`두 수의 합은 ${result} 입니다`);


// let anyVal=prompt("값을 입력하세요");
// let anyVal2=prompt("값을 입력하세요"); 

// anyVal+=5;
// anyVal2-=3;

// console.log(anyVal +anyVal2);


// let user=prompt("시간단위를 입력하세요 ");
// let day=parseInt(user/24);
// let hour=parseInt(user%24);

// console.log(`${user}시간은 ${day}일 ${hour}시간입니다`);

// let user02=prompt('user02분 단위를 입력하세요');
// let hour02=user02/60;   //분단위에서 아예 시간으로 바꿔버림 
// let minute=user02%60; //분단위 나머지 
// let day02=parseInt(hour02/24); //일 단위 변환 
// let hour03=parseInt(hour02%24);
// console.log(`${user02}분은 ${day02}일 ${hour03}시간 ${minute}입니다`);

// let inputMinutes=prompt("inputminutes분 입력");
// let days= parseInt(inputMinutes/(60*24)); //일 단위로 바뀜 
// let hours=parseInt(inputMinutes%(60*24)/60); //일 단위로 넘어가지 못한 분이 남음,분 에서 60으로 나누어야 시간단위가 나옴 
// let Minute=inputMinutes%60; 

// console.log(`${inputMinutes}는 ${days}일 ${hours}시간 ${minute}분 입니다 `);


// let firstNumber=6;
// if(firstNumber %2 ==0){
//   console.log('2의배수 입니다');
// }else if(firstNumber %3==0){
//   console.log('3의배수입니다');
// }else{
//   console.log(firstNumber+"은 2또는 3의배수가 아닙니다");
// }

// let input=prompt();
// if (input==0 ||isNaN(input)){
//   console.log('다른값을 입력하세요');
// } else{
//   if(input %2==0 && input %3==0){
//     console.log('2와 3의배수 입니다');
//   } else if(input %2==0){
//     console.log('2의배수입니다');
//   }
//   else if(input %3==0){
//     console.log('3의배수입니다'); 
//   }



// let num1= parseInt(Math.random()*10)+1;
// let num2= parseInt(Math.random()*10) +1;

// let sumEven=10;
// let sumOdd=20;
// console.log(num1, num2); 

// if(num1 %2==0){

//   sumEven+=num1;
// }else{
//   sumOdd+=num1;
// }

// if(num2 %2==0){

//   sumEven+=num2;
// }else{
//   sumOdd+=num2;
// }
// console.log(sumEven , sumOdd);

let num1 = parseInt(Math.random() * 100) + 1;
let num2 = parseInt(Math.random() * 100) + 1;
let num3 = parseInt(Math.random() * 100) + 1;
let result = 0;
console.log(num1, num2, num3);
if (num1 > num2) {

  if (num1 > num3) {
    result = num1;

  } else {
    result = num3;
  }
} else {
  //num2가 더 큰 상황 

  if (num2 > num3) {
    result = num2;
  } else {
    result = num3;
  }
}

console.log(result);