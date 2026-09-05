const sections=document.querySelectorAll(
  "#hook, #gamehall, #cakescene, #celebrate, #game, #finale"
)
sections.forEach(section =>{
  for(let i=0;i<35;i++){
    const star=document.createElement("span")
    star.classList.add("star");
    const size = Math.random()*3 +1;
    star.style.width=`${size}px`
    star.style.height=`${size}px`
    star.style.left=`${Math.random()*100}%`
    star.style.top=`${Math.random()*100}%`
    if(Math.random()<=0.2){
    star.classList.add("magen")
    }
    star.style.animationDelay = `${Math.random()*2}s`
    section.appendChild(star)
  }
  
})
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
const game=document.querySelector("#game")
const you=document.querySelector("#you")
const me=document.querySelector("#me")
const both=document.querySelector("#both")
const res=document.querySelectorAll(".response")
const message = document.querySelector("#message");
const finale = document.querySelector("#finale");
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
let ref = 0;
let i = 0;
let typing = true;

function messa() {
    if (i < text[ref].length) {
        tinnhan.textContent = text[ref].slice(0, i + 1);
        i++;

        setTimeout(() => {
            messa();
        }, 25);
    } else {
        typing = false
        if(ref===text.length-1){
            con.classList.add("open")
        }
    }
}
message.addEventListener("click", () => {

    if (!typing) {

      ref++;

      if (ref < text.length) {
          i = 0;
          typing = true;
          messa();
          
      }
      else {
        cakescene.classList.remove("open");
        game.classList.add("open")
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
me.addEventListener("click",()=>{
  res[2].classList.add("open")
})
you.addEventListener("click",()=>{
  res[0].classList.add("open")
})
both.addEventListener("click",()=>{
  res[1].classList.add("open")
})
res.forEach(response => {
    response.addEventListener("click", () => {
        game.classList.remove("open");
        finale.classList.add("open");
    });
});
