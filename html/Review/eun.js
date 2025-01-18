let item=document.querySelector('button'); 
console.log(item);

item.addEventListener('click',function(){
alert('마우스가 클릭됨'); 
});

// item.addEventListener('mouseover',function(){

// item.style.backgroundColor='yellow';

// });

item.addEventListener('mouseover',function(){

    item.style.backgroundColor='yellow';
    //자바스크립트에서는 background-color 대신 대문자를 씀 
    
    });



item.addEventListener('mouseout',function(){
    item.style.backgroundColor=null;
});