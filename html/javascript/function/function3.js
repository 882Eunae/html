//function3.js 
//매개변수 2개 
//자바스크립트 매개 변수 전달안해줘도 초기값 설정해놓으면 오류가 안뜸 

function getAverage(num1=0,num2=0){
  let sum=0 ,avg=0;
  sum=num1+num2;
  avg=sum/2;

  return avg //호출 avg값을 반환 

}

let avg1=getAverage(10,30);
let avg2=getAverage(30,50);
getAverage(avg1,avg2); //값을 안넣은경우 num1 num2의 초기값으로 설정됨,오류안뜸
let result=getAverage(getAverage(10,30),getAverage(30,50));
console.log(`평균:${result}`);