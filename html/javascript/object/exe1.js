//연습1 exe1.js 
let myFriends = [];
myFriends.push({
  name: "홍길동",
  escore: 70,
  kscore: 78,
  gender: 'Female'
});
myFriends.push({
  name: "신현욱",
  escore: 80,
  kscore: 88,
  gender: 'Female'
});
myFriends.push({
  name: "김민식",
  escore: 90,
  kscore: 70,
  gender: 'Male'
});
myFriends.push({
  name: "석지욱",
  escore: 95,
  kscore: 55,
  gender: 'Female'
});

//forEach 출력 
myFriends.forEach(function (item, idx, ary) {
  console.log(item); //item은 객체 정보 idx는 위치정보 ary는 배열 자체  
});

// myFriends.forEach(function(item) { item은 오브젝트 그자체 
//   console.log(item.name);   //item은 객체 정보 idx는 위치정보 ary는 배열 자체  
//   });

//forEach:영어 점수 90이상 
myFriends.forEach(function (item) {
  if (item.escore >= 90) {
    console.log(item.name);
  }
});

console.log('==============평균점수 80이상=======================');
//평균점수가 80이상
myFriends.forEach(function (item) {
  avg = (item.escore + item.kscore) / 2;
  if (avg >= 80) {
    console.log(item.name);
  }
});
console.log('==================여학생의 영어평균==================');
let engSum = 0;
let n = 0; //여학생이 몇명인지에 대한 정보 
myFriends.forEach(function (item) {
  if (item.gender == 'Female') {
    engSum += item.escore;
    n++;
  }
});
// console.log(n); 
let femaleAvg = engSum / n;
console.log(femaleAvg);

//filter:여학생의 영어평균 미만  => underAvgAry 저장 
console.log("======filter:여학생의 영어평균 미만  => underAvgAry 저장====== ");

let underAvgAry = myFriends.filter(function (item) {
  if ( item.gender=='Female'&&item.escore < femaleAvg) {
    return true;
  } else {
    return false;
  }
});
console.log(underAvgAry);

