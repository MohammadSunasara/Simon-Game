



let gameseq = [];
let userseq = [];
let h2 = document.querySelector("h2")
let started = false;
let level = 0;

let btns = ["yellow", "purple", "red", "green"];

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started")
    started = true;
  }
  levelUp();
});

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 1000);
}
   




function levelUp() {
  userseq=[];
  level++;
  h2.innerText = `level ${level}`;

  let randomInx = Math.floor(Math.random() * 4);
  let randomColor = btns[randomInx];
  let randombtn = document.querySelector(`.${randomColor}`);

    gameseq.push(randomColor);
    console.log(gameseq)
    gameflash(randombtn);

}



function check(idx){
 
  if(userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
      setTimeout(levelUp,1000);
    }
  }else{
     h2.innerHTML=`Game over and your score is <b>${level}</b>
                  <br>press any key to start again`;
     reset();
  }
}


let allBtn=document.querySelectorAll(".btn")

function btnPress(){
  let btn=this
  gameflash(btn);
    
  userColor=btn.getAttribute("id")
  console.log(userColor)
   userseq.push(userColor)
    check(userseq.length-1);
}

for(btn of allBtn){
btn.addEventListener("click",btnPress)


}  

function reset(){
 
  started=false
  userseq=[]
  gameseq=[]
  level=0
}









