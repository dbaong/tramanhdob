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
const celeb=document.querySelector("#celebrate");
const falling=document.querySelectorAll(".falling");
const tinnhan=document.querySelector("#tinnhan");
const deco=document.querySelector(".deco")
const con=document.querySelector("#con");
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
let text=["hilu chăm anhh.",
          "Hôm nay 30/9 là sinh nhật của Chăm Anhhh.",
          "Chúc em tuổi 17 sẽ gặp thật nhiều điều vui trong cuộc sống, ngày càng có thêm nhiều kỷ niệm đáng nhớ với bạn bè và người thân.",
          "Quan trọng hơn, chúc em tuổi mới ngày cảng trổ mã đẹp gái và học giỏi hơn để đậu ULaw và tranh được suất học bổng của trường.",
          "Cuối cùng, chúc em có 1 ngày sinh nhật vui vẻ và tuổi mới vui tươi với ít nỗi buồn hơn!!!"]
let start = 0;
let i = 0;
let typing = true;

function messa() {
    if (i < text[start].length) {
        tinnhan.textContent = text[start].slice(0, i + 1);
        i++;

        setTimeout(() => {
            messa();
        }, 50);
    } else {
        typing = false;
    }
}
message.addEventListener("click", () => {

    if (!typing) {

        start++;

        if (start < text.length) {
            i = 0;
            typing = true;
            messa();
        }

    }
});
cake.addEventListener("click",() =>{

  clik++;
  if(clik===10){
    celeb.style.display="flex";
    falling.forEach(icon =>{
      const x=(Math.random() * 0.8 - 0.4) * window.innerWidth
      const y=Math.random() *50 -150
      icon.style.setProperty("--x",`${x}px`)
      icon.style.setProperty("--y",`${y}px`)
    });
    setTimeout(()=>{
      message.classList.add("open")
      messa()
    },5000)
  }
});
