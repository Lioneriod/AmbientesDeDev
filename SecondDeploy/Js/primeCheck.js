let input = prompt("Diga o número que você quer checar se é primo");
let primeCheck = "É primo"
for(let i = 0; i < input; i++){
  if(input%i===0 && i!=input && i!=1){
    primeCheck = "Não é primo"
  }
}
document.getElementById("input").innerHTML = `${input}`;
document.getElementById("result").innerHTML = `${primeCheck}`;