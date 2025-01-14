// tool1.js 
// 세개의 수 1-100 까지의 임의의 값을 생성 
// 세개의 수에서 가장 작은 수의 값을 출력 
// 가장 작은수가 짝수 이면 짝수입니다 출력 
let num1 = parseInt(Math.random() * 100) + 1;
let num2 = parseInt(Math.random() * 100) + 1;
let num3 = parseInt(Math.random() * 100) + 1;
let result=0;
console.log(num1,num2,num3);
if(num1<num2){
if(num1<num3){

result=num1;
}else{
result=num3;
}

}else{
if(num2<num3){
result=num2;
}
else{
result=num3;
}


}

console.log("가장작은수:"+result);

if(result %2==0){
  console.log("짝수입니다")
}


// git push 



//임의의 값 2개출력 
//3의배수인지 5의배수인지 구분후, 짝수이면 짝수출력,홀수이면 홀수출력
let num_1 = parseInt(Math.random() * 100) + 1;
let num_2 = parseInt(Math.random() * 100) + 1;
let result_num1_3=true;
let result_num1_5=true;
let result_num2_3=true;
let result_num2_5=true;
console.log(num_1,num_2);
if(num_1 %3==0 && num_1%5==0){

   result_num1_3=true;
   if(num_1 %2==0){
    console.log("3과 5의배수이면서 짝수입니다"); 
   }
else{
       console.log("3과 5의배수이면서 홀수입니다");
}


}else{

  if(num_1 %3==0){
    if(num_1%2==0){
      console.log("3의배수이면서 짝수입니다");
    }else{
      console.log("3의배수이면서 홀수입니다");
    }
  }

  else{
    if(num_1 %5==0){
      if(num_1%2==0){
        console.log("3의배수이면서 짝수입니다");
      }else{
        console.log("3의배수이면서 홀수입니다");
      }
    }

    else{
      if(num_1%2==0){
        console.log("3의배수,5의배수 모두 아닌 짝수입니다");
      }
      else{
        console.log("3의배수,5의배수 모두 아닌 홀수입니다");
      }
    }

  }

  
}

if(num_2 %3==0 && num_2%5==0){

  result_num2_3=true;
  if(num_2 %2==0){
   console.log("3과 5의배수이면서 짝수입니다"); 
  }
else{
      console.log("3과 5의배수이면서 홀수입니다");
}


}else{

 if(num_2 %3==0){
   if(num_2%2==0){
     console.log("3의배수이면서 짝수입니다");
   }else{
     console.log("3의배수이면서 홀수입니다");
   }
 }

 else{
   if(num_2 %5==0){
     if(num_2%2==0){
       console.log("3의배수이면서 짝수입니다");
     }else{
       console.log("3의배수이면서 홀수입니다");
     }
   }

   else{
     if(num_2%2==0){
       console.log("3의배수,5의배수 모두 아닌 짝수입니다");
     }
     else{
       console.log("3의배수,5의배수 모두 아닌 홀수입니다");
     }
   }

 }

 
}





if(num_1 %5==0){

   result_num1_5=true;


}else{
   result_num1_5=false;
}

if(num_2 %3==0){

  result_num2_3=true;

}else{

result_num2_3=false;
}

if(num_2 %5==0){
result_num2_5=true;

}else{
result_num2_5=false;
}
console.log("num1 :  "+num_1+"num2 :  "+num_2);

