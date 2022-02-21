var btn=document.getElementById("button12");
btn.addEventListener("click",function(){
 document.querySelector(".delete").style.display='none';
})
var btnf=document.querySelector(".input-text");
btnf.addEventListener("focus",function(){
 document.body.style.backgroundColor='red';
})
btnf.addEventListener("blur",function(){
    document.body.style.backgroundColor="white";
})
