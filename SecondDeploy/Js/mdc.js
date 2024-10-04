let input = prompt("Diga os dois números separados por vírgula");
let numList = input.split(",");
let sorted = input.split(",").sort((a,b)=>a-b)
let mdc = 0;
if(sorted[1]%sorted[0]===0){
  mdc = sorted[0];
} else{
  for(let i=0;i<sorted[0];i++){
    if(sorted[1]%i===0 && sorted[0]%i===0){
      mdc = i
    }
  }
}
document.getElementById("numList").innerHTML = `${numList}`;
document.getElementById("mdcTotal").innerHTML = `${mdc}`;