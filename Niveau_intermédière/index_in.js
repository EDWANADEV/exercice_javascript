
const btn=document.getElementById("btn")
const text=document.querySelector(".text")
const aler=document.getElementById("alert")
btn.addEventListener("click",()=>{
    let elt=document.createElement("div")
    elt.innerHTML=`<p class="text-3xl"> élement </p`
})
aler.addEventListener("click",()=>{
    alert("hi!")
})