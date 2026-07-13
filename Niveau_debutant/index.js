const sentence=document.getElementById("sentence")
const modify=document.getElementById("modify")
const btn=document.querySelector(".btn_0")
const change_color=document.getElementById("change_color")
const title=document.querySelector("h1")
const change_img=document.getElementById("change")
const img=document.querySelector("img")
const bg=document.getElementById("change_bg")
const bold=document.getElementById("bold")
modify.addEventListener("click",()=>{
    bold.style.fontWeight="bold"
    bg.style.background="rgb(200, 200, 196)"
    sentence.innerText="Vous avez là un nouveau texte généré au clique"
})
change_color.addEventListener("click",()=>{
    btn.style.color="purple"
})
title.addEventListener("click",()=>{
    title.innerText="Exicice of JavaScript"
    title.style.color="blue"
})
change_img.addEventListener("click",()=>{
    img.src="/src/image/image_nature2.png"

})
