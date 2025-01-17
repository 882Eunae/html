//exe2.js 

let numAry = [
  {name:'조카',age:10}, 
  {name:'큰조카',age:9}, 
  {name:'삼촌',age:31}, 
  {name:'나',age:45}];
//foreach 해서 
numAry.forEach(function(item,idx,ary){
if(item.age>10){
console.log(`${idx}번째 값은 ${item.name} 입니다`);
}
});
//forEach 는 결과값을 받아서 변수에 저장할수 없음 그냥 반복하는게 끝 
let filAry=numAry.filter(function(item,idx,ary){
 if(item.name.indexOf('조카') !=-1){
    return true;
 }
  return false;
});
console.log(filAry);
