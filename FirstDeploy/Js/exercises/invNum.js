let number = prompt("Diga qual será o número a ser invertido");
let newNumber = number.split('').reverse().join('')
document.getElementById("number").innerHTML = `${number}`;
document.getElementById("invNumber").innerHTML = `${newNumber}`;