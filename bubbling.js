let ul = document.querySelector("ul")

ul.addEventListener("click",(dets)=>{
    dets.target.classList.toggle("lt")
})

let div = document.querySelector("div")
let btn = document.querySelector("button")

div.addEventListener("click",()=>{
    alert("div is activated")
});

btn.addEventListener("click",()=>{
    alert("Butten clicked")
});