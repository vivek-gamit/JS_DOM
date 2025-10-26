let hide = document.querySelector("#hide");
let seconds = 10;

let countdown = setInterval(function(){
    if(seconds > 0){
        hide.textContent = seconds;
        seconds--;
    }else{
        clearInterval(countdown);
        hide.style.display = "none"
    }
},1000);
