//condition3.js
// 2개의 숫자를 입력. 
// 2개 짝수 => 모두 짝수 입니다 
// 1개 짝수 => 하나는 짝수 
//0개 => 짝수 없습니다 


let input1 = prompt("input1");
let input2 = prompt("input2");

if (input1 % 2 == 0 && input2 % 2 == 0) {
  console.log('모두 짝수입니다');
} else {
  if (input1 % 2 == 0 || input2 % 2 == 0) {
    console.log('하나는 짝수입니다')
  } else {
    console.log('모두 홀수 입니다')
  }
}

