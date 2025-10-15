//Task 1: Change the text of an <h1> with id title
let heading = document.getElementById("title");
heading.textContent = "Hello Dom !!"

//Task 2: Change the background color of <body>
document.body.style.backgroundColor = "lightblue"

//Task 3: Add a new paragraph <p> with text “DOM is fun!”
let para = document.createElement("p");
para.textContent = "DOM  is fun!";
document.body.appendChild(para);

//Task 4: Select all <li> elements and log their text
let fruits = document.querySelectorAll("li");
fruits.forEach(items => console.log(items.textContent));

//Task 5: Add a new <li> when a button is clicked
let addBtn = document.getElementById("adbutten");
let list = document.getElementById("list");

addBtn.addEventListener("click",() => {
    let newitem = document.createElement("li");
    newitem.textContent = "new fruit";
    list.appendChild(newitem);
});

//Task 6: Create an image dynamically
let img = document.getElementById("imgadd")

img.addEventListener("click",()=>{
    let addimg = document.createElement("img")
    addimg.setAttribute("src","https://images.unsplash.com/photo-1760509811587-c15b8dbd069f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600")
    addimg.setAttribute("alt","Random image")
    addimg.style.display = "block";
    addimg.style.marginTop = "10px";
    document.body.appendChild(addimg);
});

//Task 7: Toggle a class on a <div>

let toggle = document.getElementById("toggle");
let box = document.getElementById("box");

toggle.addEventListener("click",()=>{
    box.classList.toggle("highlight");
});

//Task 8: Remove a paragraph
let removeBtn = document.getElementById("remove");
let removepara = document.getElementById("deletepara");

removeBtn.addEventListener("click",()=>{
    removepara.remove();
});