//forloop3.js 

let score1=90;
let sum=0;

let numAry=[10,20,30,40]; //배열생성.
numAry[4]=50;
numAry[5]=60;
numAry[6]=70;
numAry[7]=80;
console.log(numAry.length);

//6번째 위치값을 7번째로 이동 
// 7번째 위치값을 6번째 이동
let pos=3; 
// let number=numAry[6]  //원래 위치값을 새로운변수에 저장 ,7번째 위치값 
// numAry[6]=numAry[5]; //7번째를 6번쩨로 이동 
// numAry[5]=number;
let temp=numAry[pos+1];
numAry[pos+1]=numAry[pos];
numAry[pos]=temp;

for(let i=1; i<=numAry.length; i++){
  console.log(`${i}번째의 값=> ${numAry[i]}`);
  sum+=numAry[i];
}



console.log(sum);



