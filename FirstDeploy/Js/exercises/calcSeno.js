let x = prompt("Diga qual será o valor de x");
let n = prompt("Diga o número de termos da série");
n = parseInt(n)
document.getElementById("number").innerHTML = `${x}`;
document.getElementById("terms").innerHTML = `${n}!`;
if (n % 2 === 0) {
  n += 1;
}
let sineList = [];
while (n >= 1) {
  let factList = [];
  let i = 1;
  while (i <= parseInt(n)) {
    factList.push(i);
    i++;
  }
  i -= 1
  numberMult = factList.reduce((a, b) => a * b);
  sineFormula = Math.pow(x, i) / numberMult;
  console.log(i, n)
  sineList.push(sineFormula);
  n -= 2;
}
const finalFormula = (array) => {
  return array.reduce((a, b, i) => {
    return i % 2 === 0 ? a + b : a - b;
  }, 0);
};
document.getElementById("totalValue").innerHTML = finalFormula(sineList);
