let n = prompt("Diga qual será o número de termos da sequência");
n = parseInt(n)
document.getElementById("terms").innerHTML = `${n}`;
let fib1 = 0
let fib2 = 1
let fibTemp;
let fibList = [];
let i = 3
while (i<=n){
  fibTemp = fib1 + fib2;
  fibList.push(fibTemp);
  fib1 = fib2;
  fib2 = fibTemp;
  i++;
}
document.getElementById("totalValue").innerHTML = `0, 1, ${fibList.join(", ")}`;
