//condition4.js 

const obj={
  // name:"홍길동",
  age:20,
  showName:function() {  //메소드. 
    console.log(obj.name);
    }
  }
obj.showName();

// 1 ~10 사이의 임의수 출력.
 // 0 <= x < 10 값의 출력
let num1=parseInt(Math.random() *10) +1;
let num2=parseInt(Math.random() *10) +1;

let sumEven =10; //짝수의 값은 sumEven 에 합하기 
let sumOdd=20; //홀수의 값은 sumOdd에 합하기 
console.log("num1r값:"+num1+"num2값:"+num2);

//sumEven ,sumOdd 출력 
if( num1 %2==0 && num2 %2==0){

sumEven=sumEven+num1+num2;
console.log(`num1 num2 둘다 짝수이고 sumEven에 더한값은 ${sumEven}이다`);

} else if(num1 %2==0 || num2 %2==0){

  if(num1 %2==0){
    sumEven=sumEven+num1;
    sumOdd=sumOdd+num2;
    console.log(`num1값은 ${num1}  num2값은${num2} sumeven 값은 ${sumEven} 이고 sumodd 값은 ${sumOdd}이다`);
  }
  else if(num2 %2==0){
    sumEven=sumEven+num2;
    sumOdd=sumOdd+num1;
    console.log(`sumeven 값은 ${sumEven} 이고 sumodd 값은 ${sumOdd}이다`);    
  }
  
} else{

sumOdd=sumOdd+num1+num2;
console.log(`둘다 홀수이고 sumodd 값은 ${sumOdd}이다`);
}

//truthy vs falsy (0,"",null, undefined)

if(num1 %2==0){
  sumEven +=num1;
}else{

  sumOdd +=num1;
}

if(num2 % 2==0){
  sumEven+=num2;
}

else{

  sumOdd+=num2;
}


