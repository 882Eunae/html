//condition5.js 
//두수 1~100 까지의 임의의 값을 생성 
// 큰수에서 작은수 빼서 결과값출력 

let num1 = parseInt(Math.random() * 100) + 1;
let num2 = parseInt(Math.random() * 100) + 1;
let num3 = parseInt(Math.random() * 100) + 1;
let resultt=0;
//세수중에서 제일 큰값을 출력 
console.log(num1, num2, num3);
if (num1 > num2) {

  if (num1 > num3) {
    resultt=num1;
    console.log(num1)
  } else {
    resultt=num3;
    console.log(num3);
  }
} else {

  if (num2 > num3) {
    resultt=num2;
    console.log(num2)
  } else {
    resultt=num3;
    console.log(num3);
  }
}

console.log(`가장 큰수는 ${resultt}입니다`);

console.log("===============================================================")






// 두 수중에서 큰수에서 작은수 빼기 
console.log(num1, num2);

let result = num1 - num2;

if (result < 0) {
  result = num2 - num1;
}




if (num1 > num2) {

  console.log("뺀값은" + (num1 - num2));

} else {
  console.log("뺀값은" + (num2 - num1));
}