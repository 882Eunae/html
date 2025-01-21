//dom1.js 
//element vs node 

document.addEventListener('DOMContentLoaded', function () {
  let container = document.querySelector('#container');
  console.dir(container);

  document.querySelector('button').addEventListener('click', function () {

    //상세설명이 보이도록 
    container.children[0].innerHTML = 'hello';
    container.childNodes[1].innerHTML = 'hello';

    let item = container.children[3];
    item.style.display = 'block';
    document.querySelector('#detail>ul').innerHTML+='<li>가공법 : 워시드</li>';
    let li=document.createElement('li'); //Element 생성 
    let txt=document.createTextNode('가공법 : 워시드'); //TextNode 생성 
    li.appendChild(txt); //부모요소가 자식요소를 추가 
    console.log(li);
    document.querySelector('#detail>ul').appendChild(li); 
  })

});