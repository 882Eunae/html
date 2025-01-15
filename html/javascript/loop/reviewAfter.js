user01={
    id:"user01",
    member_name:"홍길동",
    point:100}
user02={
    id:"user02",
  member_name:"신현욱",
  point:90}
    user03={
        id:"user03",
        member_name:"김민식",
        point:70}

let members=[user01,user02,user03];

let run=true;
let find=false;
//찾을 친구입력 해서 이름이 있을경우 콘솔에 출력 
//stop입력하면 멈춤 
//입력했는데 없는 정보일경우 "찾는 친구이름이 없습니다 출력"


let html='';
html+='<table border="1">';
html+='<tbody>';
html+='<th> 회원이름</th>'; 
html+='<th>포인트</th>';
html+='<tr>';

while(run){
    find=false;
let searchName=prompt("찾을 친구 이름 입력 :");
if(searchName=="stop"){
run=false; //stop입력시 while문 전체가 끝남 
}
else{ //
    for(let i=0; i<members.length; i++){

        if(searchName==members[i].member_name){
            find=true;
            console.log(`${searchName}의 점수는 ${members[i].point} 입니다`);
            html+=`</tr><td>${searchName}</td>`;
            html+=`<td> ${members[i].point}</td><tr>`;
            html+=`</tr><tr>`;
            break;
        }
    } //for문이 끝나는지점 여기 왔으면 결국에 못찾았다는 소리 

    

    if(!find){

       alert(`${searchName}의 정보는 존재하지 않습니다`);
    }
}
}
html+='</tbody>';
html+='</table>';
document.write(html);

console.log("끝");










