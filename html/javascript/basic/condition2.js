//condition2.js
// 입력받은 숫자  => 2의배수인지,3의배수인지 구분  
// 6 => 2 와 3의 배수입니다. 
// 4 => 2의배수입니다  9 => 3의 배수입니다 

let input = prompt();

// "0" === 0

if (input == 0 || isNaN(input)) {
  console.log('다른값을 입력하세요');
} else {
  if (input % 2 == 0 && input %3 ==0) {
   console.log('2와 3의배수 입니다');

  } else if (input % 2 == 0) {

    console.log('2의배수입니다');
  }
  else if(input % 3==0){
    console.log('3의배수입니다');
  }

}

// if (result == 0 && result_3 == 0) {

//   console.log("2와 3의배수입니다");
// }