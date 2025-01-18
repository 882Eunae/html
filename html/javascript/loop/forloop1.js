//for loop1.js 
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