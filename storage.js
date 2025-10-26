document.body.className = localStorage.getItem("theme") || "light";
let themetoggle = document.querySelector("#themetoggle button")

themetoggle.addEventListener("click",()=>{
    let currenttheme = localStorage.getItem("theme") === "dark" ?"light" : "dark";
    localStorage.setItem("theme",currenttheme);
    document.body.className = currenttheme;
});