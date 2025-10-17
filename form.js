let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector(".main")

form.addEventListener("submit",(dets)=>{
    dets.preventDefault();

    console.log(inputs[0].value,inputs[1].value,inputs[2].value)

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute(
        "src",inputs[0].value
    );

    let h4 = document.createElement("h4");
    h4.textContent = inputs[1].value
    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value
    let h6 = document.createElement("h6");
    h6.textContent = inputs[3].value

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h4);
    card.appendChild(h5);
    card.appendChild(h6);

    main.appendChild(card);

    inputs.forEach(function(inp){
        if(inp.type !== "submit"){
            inp.value = "";
        }
    })
})