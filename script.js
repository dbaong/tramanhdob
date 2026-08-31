console.log("JS LOADED");
const hook=document.querySelector("#hook");
const start=document.querySelector("#startbutton");
const gamehall= document.querySelector("#gamehall");
const conti=document.querySelector("#continuebutton");
const quit=document.querySelector("#quit");
const ifquit = document.querySelector("#ifquit");
const close=document.querySelector("#closepu");
const cakescene = document.querySelector("#cakescene");
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
