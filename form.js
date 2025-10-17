let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.getElementById("main")

form.addEventListener("submit",(dets)=>{
    dets.preventDefault();

    console.log(inputs[0].value,inputs[1].value,inputs[2].value)

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute(
        "src","https://images.unsplash.com/photo-1760086741328-c56df17e8272?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600"
    );

    let h4 = document.createElement("h4");
    h4.textContent = "Arisu"
    let h5 = document.createElement("h5");
    h5.textContent = "musician"
    let h6 = document.createElement("h6");
    h6.textContent = "Hey guys, i am the world best musician and i also perform wiht big celibrity"

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h4);
    card.appendChild(h5);
    card.appendChild(h6);

    main.appendChild(card);
})