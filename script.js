console.log("JS LOADED");
const hook=document.querySelector("#hook");
const start=document.querySelector("#startbutton");
const gamehall= document.querySelector("#gamehall");
const conti=document.querySelector("#continuebutton");
const quit=document.querySelector("#quit");
const ifquit = document.querySelector("#ifquit");
const close=document.querySelector("#closepu");
const cakescene = document.querySelector("#cakescene");
const cake=document.querySelector("#cake");
const celeb=document.querySelector("celebrate");
const falling=document.querySelectorAll(".falling");
let clik=0;
start.addEventListener("click",() =>{
  hook.style.display="none";
  gamehall.classList.add("open");
});
quit.addEventListener("click",() => {
  ifquit.classList.add("open");
});
close.addEventListener("click",() =>{
  ifquit.classList.remove("open");
});
conti.addEventListener("click",() => {
  gamehall.classList.remove("open");
  cakescene.classList.add("open");
});
cake.addEventListener("click",() =>{

  clik++;
  if(clik===10){
    celeb.style.display="flex";
    falling.forEach(icon =>{
      const x=Math.random() * 400 - 200
      const y=Math.random() * -150
      icon.style.setProperty("--x",`${x}px`)
      icon.style.setProperty("--y",`${y}px`)
    });
  }
});
