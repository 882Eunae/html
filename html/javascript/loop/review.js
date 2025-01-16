let score1=90;
let sum=0;

let numAry=[10,20,30,40];
numAry[4]=50;
numAry[5]=60;
numAry[6]=70;
numAry[7]=80;
console.log(numAry.length);

let pos=3;   //3번째 숫자와 4번째 숫자 바꾸기 
let temp=numAry[pos+1];
numAry[pos+1]=numAry[pos];
numAry[pos]=temp;
for(let i=0; i<numAry; i++){
    console.log(`${i}번째의 값 => ${numAry[i]}`);
    sum+=numAry[i];
}


console.log(sum);


