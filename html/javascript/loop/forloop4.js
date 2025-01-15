//forloop4.js 
//0 <= Math.random()*100 < 100 =>50부터 100.
//학생 10명의 임의 점수를 배열에 저장 
let scores = [];
let sum = 0;
let max = 0;
for (let i = 0; i < 10; i++) {


  scores[i] = parseInt(Math.random() * 51) + 50; //50 <= x <=100
  let temp = scores[i];
  if (temp == 50 || temp == 100) {
    console.log(temp);
  }
  if (max < scores[i]) {
    max = scores[i];

  }

}


//평균계산 
for (let i = 0; i < 10; i++) {
  sum += scores[i];
  console.log(scores[i]);
}
let average = sum / 10;
console.log(`평균은 ${average} 입니다`);
console.log(`max값은 ${max} 입니다`);