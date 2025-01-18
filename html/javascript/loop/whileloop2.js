//whileloop2.js
//stop 을 입력하면 반복문 종료. 
//입력한 값중에서 제일 큰 값을 출력.  

//'12345' '876'   

let inputValue = 0
console.log(inputValue);
let max = 0;
let run = true;
while (run) {
  inputValue = prompt("점수를 입력하세요: ");
  let temp = parseInt(inputValue);
  //isNaN(temp)
  if (isNaN(temp) == true) { //입력한 값이 문자열이라면? 
    if (inputValue == "stop") {

      run = false;
    } else {
      // inputvalue = prompt("잘못된 값 입니다 숫자값을 새로입력해주세요");

      // console.log(`문자적고난후 바로 숫자입력 ${inputvalue} 값이 저장됨`);
        alert('정상적인 값을 입력하세요')
        console.log("alert다음실행");
      // if (max<parseInt(inputValue)) {
        
      //   max = inputValue;
      // }   //prompt에 뜨고나서 바로 숫자 입력했을경우를 대비 
  
    }
  } else { //숫자값을 입력했을때 
    if (max < parseInt(inputValue)) {
      max = parseInt(inputValue);
    }
  }
} //end of while. 
console.log(`최대값은 ${max} 입니다`);
// umm.......