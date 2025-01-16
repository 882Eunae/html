// 커밋하깅 
let scores=[];
let max=0;
for(let i=0; i<5; i++){

    scores[i]=prompt("과목 성적을 입력하세요");

    if(max<parseInt(scores[i])){
        max=scores[i];
    }
}

console.log(`최대값은 ${max} 입니다`);
