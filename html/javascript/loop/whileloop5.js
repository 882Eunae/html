//whileloop5.js
user01={
  id:"user01",
  member_name:"홍길동",
  point:100
}
user02={
  id:"user02",
  member_name:"신현욱",
  point:90
}
user03={
  id:"user03",
  member_name:"김민식",
  point:70
}

let members=[user01,user02,user03];

let run=true;
// let find=false;
let exists=false; 
while(run){
 let searchName= prompt("찾을 친구 이름 입력 :");
if(searchName=="stop"){
  run=false;
}
else{ //stop이 아닌경우 
  for(let i=0; i<members.length; i++){
    exists=false;
    //배열의 이름속성중에서 searchName과 같으면 포인트를 콘솔출력
      if(searchName==members[i].member_name){
        
        console.log(`${searchName}의 포인트는 ${members[i].point}`);
        // find=true;
        exists=true;
        break;
        
      }
     
      //exists=false;

  //  if(find==true){
  //   find=true;
  //   console.log(`=================================`);
  //  } else{
  //     //find가 false인 상태,즉 아직까지 못찾은 상태 
  //  }
    //exists=false;

    } //for문 끝 



// if(find==false){
// console.log(`${searchName}의 정보가 없습니다`);

// }
  
if(!exists){

  alert("찾는 친구이름이 없습니다");
}
   
} //stop아닌 경우 else문 
} //while문 끝 

console.log('end of program');





