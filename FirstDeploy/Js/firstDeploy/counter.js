let n = prompt("Diga a quantidade de notas");
let tempGrade;
let gradeList = [];
let counter = 0;
let i = 0;
while(i < n){
  tempGrade = prompt(`Diga a nota número ${i+1}`);
  gradeList.push(tempGrade);
  if(tempGrade > 50){
    counter++;
  }
  i++;
}
document.getElementById("counter").innerHTML = counter;
document.getElementById("grades").innerHTML = gradeList.join(' ');