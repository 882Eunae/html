//basic3.js 
/*
 두 숫자를 입력받아서 두수의 곱을 출력 
첫번째 값에 5의 값을 더하고 ,두번째 3의 값을 빼서 두수의 차를 구해보세요.   



 */



let firstValue=parseInt(prompt());
let secondValue=prompt();

firstValue +=5;//parseInt(firstValue)+1; 
secondValue-= 3;//parseInt(secondValue)-1;
// console.log(firstValue,secondValue);

console.log(firstValue + secondValue)
let result=Number(firstValue)-Number(secondValue);


// let result=anyVal *anyVal2  곱하기는 알아서 숫자로 변환 되서 곱해짐 

console.log(`${firstValue}와 ${secondValue}의 두수의 차는  ${result} 입니다`);



