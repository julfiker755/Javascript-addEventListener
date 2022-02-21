
const demo1=document.querySelector("#button11");
 demo1.addEventListener("click",()=>{
    document.querySelector("#demo1").innerHTML="Bangladesh";
    
 })
 const demo2=document.querySelector("#button12");
 demo2.addEventListener("click",function(){
     document.querySelector("#demo").textContent="I am fine";
 })
 var update=document.querySelector("#update");
 update.addEventListener("click",function(){
     var text1=document.querySelector("#input-text");
     var update=document.querySelector(".update-text");
     update.innerHTML=text1.value;
     text1.value='';
 })