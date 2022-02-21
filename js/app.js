document.querySelector("#bubb").addEventListener("click",function(event){
    console.log("Hello bubble parent")
    event.stopPropagation();
})
document.querySelector(".item").addEventListener("click",function(event){
    console.log("Hello bubble child section")
    event.stopPropagation();
})
document.querySelector("#our").addEventListener("click",function(event){
    console.log("Ami second child vai-1")
    event.stopImmediatePropagation();
})
document.querySelector("#our").addEventListener("click",function(){
    console.log("Ami second child vai-2")
})
document.querySelector("#our").addEventListener("click",function(){
    console.log("Ami second child vai-3")
})
