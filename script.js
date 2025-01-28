let time = 60;
let score = 0;
hitN = 0;

function bubble() {
let clutter = "";
for(let i = 1; i <= 156; i++) {
  var random = Math.floor(Math.random()*10)
 clutter += `<div id="bubble"><span>${random}</span></div>`
}
document.querySelector("#bottom").innerHTML = clutter;
}

function timer() {
  var timeInt = setInterval(function() {
    if(time > 0) {
      time--;
      document.querySelector("#timer").textContent = time;
    } else {
      clearInterval(timeInt);
      document.querySelector("#bottom").innerHTML =
      `<h1 id="gameOver">Game Over</h1>`
    }
  },1000)
}

function hitNum() {
  hitN = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitN;
}

function scoreUpd() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

function BubbleClick(){
  document.querySelector("#bottom").addEventListener("click", function(dets) {
    let checkNum = (Number(dets.target.textContent));
    if(checkNum === hitN){
    scoreUpd();
    bubble();
    hitNum();
    }
  })
}

timer();
bubble();
hitNum();
BubbleClick();