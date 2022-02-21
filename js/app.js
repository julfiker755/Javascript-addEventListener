// var items=document.querySelectorAll(".item")
// for (const item of items){
//     item.addEventListener("click",function(event){
//    // document.getElementById("delegate").removeChild(item)
//     // event.target.parentNode.removeChild(event.target)
//     })
// }
var btn=document.querySelector("#btn11");
btn.addEventListener("click",function(){
    var cre=document.createElement('li');
    cre.innerHTML="I live in khansama";
    cre.classList.add('item')
    var childvai=document.getElementById("delegate");
     childvai.appendChild(cre)
});
document.querySelector("#delegate").addEventListener("click",function(event){
    event.target.parentNode.removeChild(event.target)
})