let abcd = document.getElementById("abcd");

abcd.addEventListener("mouseover",()=>{
    abcd.style.backgroundColor = "yellow";
})

abcd.addEventListener("mouseout",()=>{
    abcd.style.backgroundColor = "red";
})