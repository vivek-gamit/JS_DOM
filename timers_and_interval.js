let setT = setTimeout(function(){
    console.dir("hello")
},5000)

let setI = setInterval(function(){
    console.dir("hello")
},5000)

clearTimeout(setT);
clearInterval(setI);

let count = 10;
let countdown = setInterval(function(){
    if(count >= 1){
        console.log(count);
        count--;
    }else{
        clearInterval(countdown);
    }
},4000)