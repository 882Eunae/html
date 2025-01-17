//object3.js 
//forEach()
let numAry = [20, 13, 45, 62, 19];
let sum = 0;
let max = 0;
numAry.forEach(function (item, idx, ary) {// 첫번째-요소  두번째 - 인덱스 세번째-배열 그자체
  if (idx % 2 == 0) { //인덱스값이 각각 0,2,4 임 
    console.log(`item => ${item}`);
    sum += item;
  }  
  if(max<item){
    max=item;
  }
});
console.log(`홀수위치 합계 : ${sum}  최댓값 : ${max}`);
     

//filter(function(item,idx,ary){}) 조건을 만족하는 배열생성. 
let filterAry=numAry.filter(function(item,idx,ary){
//조건을 만족하는 배열을 만들어줌 
  if(item%2==1){
    return true; //true 일때 아이템을 새로운 배열에 담아둠 
  }
  else{
    return false;
  }
}); 
console.log(filterAry);