console.log("JS LOADED");
const hook=document.querySelector("#hook");
const start=document.querySelector("#startbutton");
const gamehall= document.querySelector("#gamehall");
start.addEventListener("click",() =>{
  hook.style.display="none";
  gamehall.classList.add("open");
});
