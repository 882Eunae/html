//278시간 => 1?일 몇시간 입니다.
let user=prompt("시간 단위를 입력하세요");
let day=parseInt(user/24);
let hour=user%24;
//console.log(`시간단위 바꾸기: ${user}는 ${day}일 ${hour}시간입니다`);

//89345분 => ?일 ?시간 ?분 

let user02=prompt("분 단위를 입력하세요");
let hour02=user02/60; //분에서 시간 으로 바꿀 단위 
let minute=user02%60;
let day02=parseInt(hour02/24);   
let hour03=parseInt(hour02%24);


/*
let inputMinutes=prompt("분입력");
let days=parseInt(inputMinutes/(24*60));
let hours=parseInt((inputMinutes %(24 *60))/60);
let minutes=inputMinutes %60;

*/

console.log(`분단위 바꾸기: ${user02}는 ${day02}일 ${hour03}시간 ${minute}분 입니다`);




