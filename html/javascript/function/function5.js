//function5.js : 메소드.
//this :object일때 object자신을 가리킴 
let obj = {
  name:"홍길동",
  birth:"1998-05-01",
  bloodType:"0",
  showInfo:function(){
    console.log(`이름은 ${this.name},생일은 ${this.birth} 입니다`)
  },
  addNumber:function(num1=0,num2=0){
    return num1+num2;
  },
  calcullateFnc:function(num1=0,num2=0,calFnc){
    return calFnc(num1,num2);

  }

}

obj.showInfo();
// alert(obj.addNumber(10,12));
// let result=obj.calcullateFnc(10,5,function(a,b){
// return a-b;

// });

let result=obj.calcullateFnc(10,5,function(a,b){
  return a+b;
  });

console.log(`결과값:${result}`);

