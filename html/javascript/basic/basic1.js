//basic1.js 
/* 
  변수선언:이름,연락처,주소선언
  console 출력 
*/


let myName="정은애";
let myphone="010 -4513 -3096";
let myaddress="daegu"; 

let largeNumber=10000000000000000000000000000000000000000000000000000000n;
console.log(largeNumber);



myName="김길동"; //새로정의

const bloodType ="O"; 
// bloodType ="A"; 값을 바꿀수없음 
const PI = 3.14; //프로그램  변하지 않는 값으로 선언 



console.log("내 이름은 "+ myName+"입니다.");
console.log('연락처는 '+myphone+'입니다');
console.log(  `주소는 ${myaddress} 입니다`);

console.log(`반지름 5인 원의 넓이는 ${5 * 5*PI} 입니다. `);

console.log(typeof (PI==3)); //변수의 자료형을 출력


let myInfo ={

name:"홍길동",
age:20

};

let scores=[10,20,30]; //배열.
let specialType;


console.log(typeof specialType);
console.log(typeof null);


console.log(myInfo.name);
console.log(myInfo.age);







