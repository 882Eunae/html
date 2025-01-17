//object4.js 
//1일의 요일 ? 막날? 
let month=3;
let date=0; //2월마지막날 
let year=2024;

let today =new Date(); 

today.setFullYear(year);  
today.setMonth(month);
today.setDate(date);

today=new Date(2024,4,3,15,30,22);
let now=new Date();
console.log(now);
// console.clear();
console.log(today.getTime() == now.getTime());

console.log(new Date(2000)); //밀리세컨드 단위의 숫자값 
console.log(today.valueOf()==now.valueOf());
console.log(today.valueOf());

today=new Date(); //인스턴스가 만들어진 위치의 주소값을 가짐 
now=new Date(); 
console.log(today);
console.clear();
console.log(today==now); //주소값을 담기때문에 각자다름 