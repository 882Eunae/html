let item=document.querySelector('button'); 
item.addEventListener('click',function(){
  let year=document.querySelector('[name="year"]').value; //이걸 안적어서 nan 값이 반환됨 
  let month=document.querySelector('[name="month"]').value; //얘도 마찬가지... 
makeCalenddar(year,month);

});

//캘린더함수 
function makeCalenddar(year=2025,month=1){
let now=new Date();
now.setFullYear(year);
now.setMonth(month-1);
now.setDate(1);  
let space=now.getDay(); //공백이 몇칸인지
 
now.setMonth(month); // 만약 3 -> 2 
now.setDate(0); //
let lastDate=now.getDate(); //마지막날짜가 몇일까지 있는지 

let days=['일','월','화','수','목','금','토'];









let html="";
html+="<table border=1>";
html+="<thead><tr>";

for(let i=0; i<days.length; i++){
  html+=`<th>${days[i]}</th>`;
 console.log(days[i]);
}   
html+="</tr>";

html+="</thead><tbody id='list'><tr>";
console.log(html);

console.log(`space : ${space} lastDate : ${lastDate}`);

//html 요소 
for(let j=0; j<space; j++){
html+='<td>0</td>';
console.log('for문실행중..');
//for문 실행안됨
}
console.log(html);
//for문 빼고 작동중...



for(let i=1;i<=lastDate;i++){
if((space+i) %7 == 0){//토요일 
html+=`<td>${i}</td>`;
console.log(`${i}일은 토요일`);
} else{
html+=`<td>${i}</td>`;
console.log(`${i}일`);
}

if((i+space)%7 ==0){

  html+='</tr><tr>'
}

} //lastDate까지  줄바꿈해서 날짜 넣어줌 

html+=`</tr></tbody></table>`;
console.log('html이 무사히 만들어짐');
document.querySelector('#show').innerHTML=html;
// return space , lastDate;

}

