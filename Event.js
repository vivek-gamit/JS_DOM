let input = document.querySelector("input");

input.addEventListener("input",(dets)=>{
    if(dets.data !== null){
        console.log(dets.data);
    }
})

 let sel = document.getElementById("sel");
 let device = document.getElementById("device");
 

 sel.addEventListener("change",(dets)=>{
    device.textContent = `${dets.target.value} device is selected`;
 });