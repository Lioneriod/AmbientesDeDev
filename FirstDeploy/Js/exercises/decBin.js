let decNum = prompt("Diga qual será o número a ser convertido para binário");
let binNum = Number(decNum).toString(2)
document.getElementById("decNumber").innerHTML = `${decNum}`;
document.getElementById("binNumber").innerHTML = `${binNum}`;