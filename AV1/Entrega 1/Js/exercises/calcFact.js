let n = prompt("Diga qual fatorial você deseja calcular");
let numberList = [];
let i = 1;
while(i <= parseInt(n)){
  numberList.push(i);
  i++;
}
numberMult = numberList.reduce((a,b)=>a*b)
document.getElementById("number").innerHTML = `${n}!`;
document.getElementById("totalValue").innerHTML = numberMult;