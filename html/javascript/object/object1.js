//object1.js 
let obj = {}; //객체(인스턴스)
obj = new Object(); //생성자 
obj.title = "이것이자바다"; //속성을 담을수 있음 
obj['price'] = 30000;

console.log(obj);

let today = new Date(); //자바스크립트 내에 이미 정의되있는 
console.log(today.getFullYear() + '년도');

let numAry = [10, 20, 30]; //배열객체 선언  //new Array();
numAry.push(40); //마지막에 추가해주는 메소드 지원 해줌 
numAry.unshift(5); //앞쪽에 추가
numAry.splice(1, 1, 8); //(인덱스,개수,어떤수)수정5,10,20,30,40 특정위치에 무슨값을 넣겠다
numAry.splice(1, 1) // 삭제 인덱스값 1의위치 값 1개를 삭제 
console.log(numAry);