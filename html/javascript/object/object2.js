//object2.js 
//concat(배열요소 합)

let numAry1 = [10,20];
let numAry2 = [30,40];
let resultAry=numAry1.concat(numAry2); 

console.log(resultAry.join('-').split('-'));
//join => 배열 ->문자열 
//split => 문자열 ->배열 

let result=resultAry.join('-').split('-'); 
result.push('60'); //뒤에 추가 unshift 
console.log(result.pop()); //뒤에서부터 제거 shift

console.log(result,result.indexOf('200')); //요소의 인덱스 반환

console.clear(); 
result=['홍길동','김민수','허성식','박창식']

if(result.indexOf('홍길동')!=-1){
  console.log("찾는 이름이 존재합니다");
} else{
  console.log("찾는 이름이 없습니다"); 
}
console.log(result.at(1)); //인덱스에 해당하는 값을 반환 
result.sort().reverse().join(); //여기서 result 는 배열인데 join에서 문자열로 반환 그래서 이상태에서 다시 배열에서 쓰는 메서드못씀 
console.log(result); //문자열로 출력 

