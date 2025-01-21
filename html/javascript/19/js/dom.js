//dom.js 
//let myPicture={name:"해와달", width:200 ,height:300} => property
//<img src="small.jpg"> => attribute(속성)
document.addEventListener('DOMContentLoaded', attrChangeFunc); //domChangeFunc -이벤트가 실행할때 함수호출 
// domChangeFunc()- 그냥 실행
// document.querySelector('#desc button').addEventListener('click', function () {

//   let itemName=document.querySelector('#desc>ul>li:nth-of-type(1)>span').innerText;
//   let price=document.querySelector('.bluetext>span').value;
//   let deliveryFee=document.querySelector('.delivery>span').value;
// alert(`${itemName}총금액 :${price+deliveryFee}`);


//   });

function attrChangeFunc(e) {
  console.log(e);
  console.log(Number('3000'))
  //대상선택 
  document.querySelectorAll('div#small-pic>img').forEach(function (item) {
    console.log(item);
    //img 이벤트등록 
    item.addEventListener('mouseover', function (e) {

      console.log(e.target.src);
      document.querySelector('#prod-pic>img').src = e.target.src;
    })
  });

  document.querySelector('#desc button').addEventListener('click', function () {
    let itemName = document.querySelectorAll('#desc>ul>li')[0].firstElementChild.innerText;
    let price = document.querySelectorAll('#desc>ul>li')[1].lastElementChild.value;
    let deliveryFee = document.querySelectorAll('#desc>ul>li')[2].children[1].value;
    itemName = document.querySelector('#desc>ul>li:nth-of-type(1)>span').innerText;
    price = parseInt(document.querySelector('input[name="price"]').value);
    // let price=parseInt(document.querySelector('#desc>ul>li:nth-of-type(2>)input').value);
    deliveryFee = parseInt(document.querySelector('input[name="delivery"]').value);
    // let price=parseInt(document.querySelector('#desc>ul>li:nth-of-type(3>)input').value);
    alert(`${itemName}총금액 :${price >=50000 ? price :price+deliveryFee}`);
  });

} //end of attrChangeFunc. 

//요소의 값을 변경 
function domChangeFunc() {
  // let detatil=document.querySelector('#detail>ul');
  // detatil.innerHTML='<li>사과</li>';
  // console.log(); 
  let heading = document.getElementById('heading');
  heading.onclick = function () {
    heading.innerText = "추천 ! 오늘의커피";
    document.getElementById('cup').src = "images/coffee-blue.jpg";
  }
  console.log(heading);

}
// DOM 요소의 선택 S
function domFunc() {

  let targetItem = document.getElementById('container');
  targetItem = document.querySelectorAll('#container'); //id값으로 선택 

  targetItem = document.getElementsByClassName('small'); //HTMLCollection([배열])
  for (let i = 0; i < targetItem.clientHeight; i++) {
    console.log(targetItem[i].src);
  }
  targetItem = document.querySelectorAll('.small'); //노드리스트
  targetItem.forEach(function (item) {
    item.style.borderColor = 'red';
    item.style.borderWidth = '3px';
    item.style.borderStyle = 'solid';

  });
  targetItem = document.getElementsByTagName('img'); //HTMLCollection([배열]) 
  targetItem = document.querySelectorAll('img'); //NodeList 

  console.log(targetItem);

} //end of domFunc(). 