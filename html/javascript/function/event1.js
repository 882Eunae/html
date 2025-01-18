//event1.js 

let item=document.querySelector('button');

item.addEventListener('click',function(){
  let n1=document.querySelector('#num1').valueAsNumber; 
  let n2=document.querySelector('#num2').valueAsNumber; 
  
  document.querySelector('.result').value=n1+n2;
  // document.querySelector('#result)['value'] =n1+n2; 
  console.dir(n1+n2);
});
// + 더하기
let  item2=document.querySelector('button[name="add"]');
item2.addEventListener('click',function(){
  let N1=document.querySelector('#num1').valueAsNumber; 
  let N2=document.querySelector('#num2').valueAsNumber; 
document.querySelector('.result').value=N1+N2; //화면상에 띄어줌
console.dir(N1+ N2);
});
//clear
let item3=document.querySelector('button[name="clear"]'); //clear 버튼 
item3.addEventListener('click',function(){

document.querySelector('#num1').value=null;
document.querySelector('#num2').value=null;
document.querySelector('.result').value=null;

});
// - 빼기
let  item4=document.querySelector('button[name="minus"]');

item4.addEventListener('click',function(){

  let N1=document.querySelector('#num1').valueAsNumber; 
  let N2=document.querySelector('#num2').valueAsNumber; 

document.querySelector('.result').value=N1-N2; //화면상에 띄어줌

console.dir(N1- N2);

});




