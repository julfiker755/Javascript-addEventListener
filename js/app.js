const btn=document.querySelector("#button11");
btn.addEventListener("click",function(){
const textva=document.querySelector("#comand");
const newpara=document.createElement("p");
newpara.innerHTML=textva.value;
var chi=document.querySelector(".command-area");
chi.appendChild(newpara)
})