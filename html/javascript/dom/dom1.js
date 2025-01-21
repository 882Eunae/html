//dom1.js 

document.addEventListener('DOMContentLoaded', init);

function init() {
  console.dir(document);
  document.forms.myForm.addEventListener('submit', function (e) {
    e.preventDefault(); //기본기능 차단 페이지에 계속 머물러야 함 


    let mid = document.querySelector('input[name="member_id"]').value;
    let mname = document.querySelector('input[name="member_name"]').value;
    let mpoint = document.querySelector('input[name="member_point"]').value;

    if (mid == null || mid.length < 5 || mid.length > 20) {
      alert("id를 5자 이상 20자 이하로 생성해주세요.");
      //함수종료 

    }
    console.log(mid.length);
    // <tr><td>admin</td>...... </tr> 필요한함수:createElement ,appendChild 
    //let member={member:mid,memberName:mname,point:mpoint};

    // let tr= makeTr(member); //값 
    // let td1=document.createElement('td'); 
    // let td_2=document.createElement('td'); 
    // let td_3=document.createElement('td'); 
    let member = {
      memberId: mid,
      memberName: mname,
      point: mpoint
    };
    let tr = makeTr(member);
    // td1.innerHTML=mid;
    // td_2.innerHTML=mname;
    // td_3.innerHTML=mpoint;

    // tr.appendChild(td1);
    // tr.appendChild(td_2);
    // tr.appendChild(td_3);

    let tbody = document.querySelector('tbody[id="list"]');
    tbody.appendChild(tr);
    //tr /tr 
    console.log(tr);

  }) //end of submit 

  let chk = document.querySelector('thead input');
  chk.checked = false;

  chk.addEventListener('change', function () {
    if (chk.checked == true) {
      document.querySelectorAll('tbody input').forEach(function (item) {

        item.checked = true;

      });
    } else if (chk.checked == false) {
      document.querySelectorAll('tbody input').forEach(function (item) {

        item.checked = false;

      });
    }

  });
  //input값이 change 이벤트 등록 
} //end of init(). 

function makeTrAry(mbr = []) {
  let tr = document.createElement('tr');
  //   for(let i=0; i<mbr.length; i++){
  // let td=document.createElement('td');
  // td.innerText=mbr[i];
  // tr.appendChild(td); 
  //   }

  mbr.forEach(function (item) {
    let td = document.createElement('td');
    td.innerText = item;
    tr.appendChild(td);
  });
  return tr;
}




function makeTr(mbr = {}) {

  let tr = document.createElement('tr');

  let td = document.createElement('td');
  let check = document.createElement('input');
  check.type = "checkbox";

  td.appendChild(check); //체크박스 만들어짐  
  tr.appendChild(td);
  for (let prop in mbr) {
    td = document.createElement('td');
    td.innerText = mbr[prop];
    tr.appendChild(td);

  }
  td = document.createElement('td');
  let btn = document.createElement('button');
  btn.style.backgroundColor = 'yellow';
  btn.innerHTML = "삭제";
  btn.addEventListener('click', function () {

    btn.parentElement.parentElement.remove(); //td -> tr   

  });

  td.appendChild(btn);
  tr.appendChild(td);

  return tr; //return 
} //end of makeTr() 