//1~10까지 짝수값을 구하는 반복 
let sum = 0;
 

document.write('<table border="1">');

document.write('<tbody>');
document.write('<tr>');

// document.write('<td>2 * i = ${2 * i}</td>');
// document.write('<td>2 * 2 = 4</td></tr><tr>');
// document.write('<td>2 * 2 = 6</td></tr><tr>');
// document.write('<td>2 * 2 = 8</td>');

let html='';
html+='<table border="1">';
html+='<tbody>';
for (let i = 1; i <= 9; i++) {

html +=`<td style='background-color :yellow;'>2 * ${i} = ${2 * i}</td></tr><tr>`;

}
html+='</tbody>';
html+='</table>';
document.write(html);

console.log("======the end======")
console.log(sum);

let Html='';
Html+='<table border="2">';
Html+='<tbody>';
Html+=('<tr>');
for(let j=1; j<9; j++){

  if(j %2==0){
    Html+=`<td style='background-color :pink;'>3 * ${j}= ${3 * j}</td></tr><tr>`;

  }
  else{
    Html+=`<td>3 * ${j}= ${3 * j}</td></tr><tr>`;
  }
}

Html+='</tbody>';
Html+='</table>';
document.write(Html);


