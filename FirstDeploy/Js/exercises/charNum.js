let input = prompt("Diga a sequência de caracteres a ser convertida para números");
let char;
let code;
let convInput = 0;
for (let i = 0; i < input.length; i++) {
  char = input.charAt(i);
  code = char.charCodeAt();
  convInput = convInput * 10 + (code - 48);
}
document.getElementById("phrase").innerHTML = `${input}`;
document.getElementById("number").innerHTML = `${convInput}`;