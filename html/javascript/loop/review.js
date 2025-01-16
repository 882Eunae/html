// let score1=90;
// let sum=0;

// let numAry=[10,20,30,40];
// numAry[4]=50;
// numAry[5]=60;
// numAry[6]=70;
// numAry[7]=80;
// console.log(numAry.length);

// let pos=3;   //3번째 숫자와 4번째 숫자 바꾸기 
// let temp=numAry[pos+1];
// numAry[pos+1]=numAry[pos];
// numAry[pos]=temp;
// for(let i=0; i<numAry; i++){
//     console.log(`${i}번째의 값 => ${numAry[i]}`);
//     sum+=numAry[i];
// }


// console.log(sum);

let sum = 0;

//1~10까지 출력
for (let i = 1; i <= 10; i++) {
  console.log(`현재i의 값: ${i}`);
  if (i % 2 == 1) {
    sum += i;
  }
}
console.log(`1~10까지의 홀수합: ${sum}`);
console.log(`end of for`);
