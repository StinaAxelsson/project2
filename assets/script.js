
//CONST variables
const player = document.getElementById('player');
const board = document.getElementById('gameboard');
const startBtn = document.getElementById('menu-btn')
const gameoverBtn = document.getElementById('game-over');


let score = 0;

gameoverBtn.style.display = 'none';



// Touchevent and function for playing on a touch screen, for moving the player.
document.addEventListener('touchstart', handleTouchEvent, true);
document.addEventListener('touchmove', handleTouchEvent, true);
document.addEventListener('touchend', handleTouchEvent, true);
document.addEventListener('touchcancel', handleTouchEvent, true);

function handleTouchEvent(e) {
    if (e.touches.length === 0 ) return;
    let touch = e.touches[0];
    player.style.left = (touch.pageX - player.width / 2) + 'px';
}

// Add an Keyevent for when play on desktop, using the up, down, left and right arrown in the gameboard for moving the player.
window.addEventListener("keydown", (e) => {

    let left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    if (e.key == "ArrowLeft" && left >=0) {
      player.style.left = left - 20 + "px";
    }
    else if (e.key == "ArrowRight" && left <= 350) {
      player.style.left = left + 20 + "px";
    }

});
/**
 * This function create new divs with obstacles/comets in random order.
 */
let = createObstacle = setInterval(function() {
  const comet = document.createElement('div');
  comet.classList.add('comets');
  comet.style.left = Math.floor(Math.random() * 300) + 'px';

  gameboard.appendChild(comet);

}, 2000);

/**
 * This function is the same as the "createObstacle" but insted it create 
 * new divs with money bags.
 */
let createMoney = setInterval(function() {
  const money = document.createElement('div');
  money.classList.add('money');
  money.style.left = Math.floor(Math.random() * 350) + 'px';

  gameboard.appendChild(money);
  
}, 3000);

/**
 * This function make the obstacles/comets fall from the top of the board
 * and when they hit the player, the game stops.
 */
let moveObstacle = setInterval(function() {
  const comets = document.getElementsByClassName('comets');
  if (comets != undefined) {
    for (let i = 0; i < comets.length; i++){
      let comet = comets[i];
      let cometTop = parseInt(window.getComputedStyle(comet).getPropertyValue('top'));

      let cometPos = comet.getBoundingClientRect(); 
      let playerPos = player.getBoundingClientRect(); 
    
     
      if (cometPos.left >= playerPos.right || playerPos.left >= cometPos.right) {
      }
      else if (cometPos.bottom <= playerPos.top || playerPos.bottom <= cometPos.top) {
      }
      else {
          gameOver();

      }  
    
    comet.style.top = cometTop + 25 + 'px'
  }
}
  
}, 200);

/**
 * This function make the moneybags fall down from the top in random intervals.
 */
let moveMoney = setInterval(function() {
  const moneyBag = document.querySelectorAll('.money');
  if (moneyBag != undefined) {
    for (let i = 0; i < moneyBag.length; i++){
      let money= moneyBag[i];
      let moneyTop = parseInt(window.getComputedStyle(money).getPropertyValue('top'));

      let moneyPos = money.getBoundingClientRect(); 
      let playerPos = player.getBoundingClientRect(); 
    
     
      if (moneyPos.left >= playerPos.right || playerPos.left >= moneyPos.right) {
      }
      else if (moneyPos.bottom <= playerPos.top || playerPos.bottom <= moneyPos.top) {
      }
      else {
          score++;
          scoreboardRefresh();
          money.classList.remove('money');
          money.classList.add('collected-money');
          console.log('points');
      }  
    
    money.style.top = moneyTop + 25 + 'px'
  }
}
  
}, 200);

let scoreboardRefresh = () => {
  document.getElementById("score").innerHTML = "Score: " + score;
}


function gameOver(){
  score = 0;
  clearInterval(moveObstacle);
  clearInterval(moveMoney);
  clearInterval(createMoney);
  clearInterval(createObstacle);

setTimeout(() => {
  document.getElementById('game-over').style.display = 'block';
  
})
}

