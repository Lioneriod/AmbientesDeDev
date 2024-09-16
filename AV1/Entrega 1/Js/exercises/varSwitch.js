let a = prompt("Diga o valor para a variável a: ");
let b = prompt("Diga o valor para a variável b: ");
let c;
let oldVars = [];
oldVars.push(a, b)
c = a
a = b
b = c
let newVars = [];
newVars.push(a, b)
document.getElementById("oldVars").innerHTML = oldVars.join(' e ');
document.getElementById("newVars").innerHTML = newVars.join(' e ');