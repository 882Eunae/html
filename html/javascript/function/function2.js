//function2.js 
/*
  함수이름:getMax 
  매개변수:배열(numAry)
  기능:배열의 요소중에서 제일 큰값을 콘솔 출력. 
*/

let ary1=[3,15,22,7];
let ary2=[23,11,45,30];
let ary3=[];

for(let i=0; i<5; i++){
ary3[i]=parseInt(Math.random()*50);
}
function getMax(ary=[]) {
let max=0;

for(let j=0; j<ary.length; j++){
  if(max<ary[j]){
  max=ary[j];
}
}
// console.log(`제일 큰 값은 ${max} 입니다`);
  return max; //함수를 호출한 영역으로 반환 
}//end of getMax()

document.write(getMax(ary3));
alert(getMax(ary1));
getMax(ary2);

// getMax(); //전달값이 없으면 함수기본 전달값 ary=[] 으로 간주


