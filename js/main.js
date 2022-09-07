var div= document.getElementById("div");
var input=document.getElementById("input");
function print(){

 
    var output=document.createElement("h1");
    output.innerText=input.value;
    div.appendChild(output);
    
    input.value="";
 }
 let button=document.getElementById("button");
 button.addEventListener("click",function(){
print();


 })