//whileloop1.js

//1부터 10까지 출력
let i=1; 
while(i <= 10){
  console.log(`현재 i의 값 => ${i}`);
  i++
}
let run=true;
while(run){
  let temp =parseInt(Math.random() *100);
  console.log(temp);  //40보다 큰값
  if(temp < 40){
    // breaks; //반복문 종료할때 
    run=false;
  }
         
}

console.log('end of program.');
