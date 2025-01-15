//whileloop4.js
//도서회원 3사람 
//member_id:"user01" , member_name:"홍길동" ,point:80

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

let max=members[0];
let max_name;
let max_id;
for(let i=0; i<members.length; i++){
  
  console.log(members[i].id,members[i].member_name,members[i].point);
  if(max.point<members[i].point){
    // max=members[i].point;
    //max_name=members[i]['member_name'];    
    max=members[i];
  }
}

console.log(`max값:${max.point} 이고 ${max['member_name']} 의 점수입니다`);



