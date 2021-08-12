
//const variables
const player = document.getElementById('player');
const board = document.getElementById('gameboard');
const gameoverBtn = document.getElementById('game-over');
const coinSound = new Audio('assets/sounds/coins.mp3');

//let variables
let score = 0;

gameoverBtn.style.display = 'none';




// Touchevent and function for playing on a touch screen, for moving the player.
document.addEventListener('touchstart', handleTouchEvent, true);
document.addEventListener('touchmove', handleTouchEvent, true);
document.addEventListener('touchend', handleTouchEvent, true);
document.addEventListener('touchcancel', handleTouchEvent, true);

/**
 * This function handle the touch event so you can use touch on devices without keyboard.
 */
function handleTouchEvent(e) {
    if (e.touches.length === 0 ) return;
    let touch = e.touches[0];
    player.style.left = (touch.pageX - player.width / 2) + 'px';
}

// Add an Keyevent for when play on desktop, using the up, down, left and right arrown in the gameboard for moving the player.
window.addEventListener("keydown", (e) => {

    let left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    if (e.key == "ArrowLeft" && left >=0) {
      player.style.left = left - 30 + "px";
    }
    else if (e.key == "ArrowRight" && left <= 350) {
      player.style.left = left + 30 + "px";
    }

});
/**
 * This function create new divs with obstacles/comets in random order.
 */
  let createObstacle = setInterval(function() {
  const comet = document.createElement('div');
  comet.classList.add('comets');
  comet.style.left = Math.floor(Math.random() * 300) + 'px';

  board.appendChild(comet);

}, 1000);  // <-- set the interval for the comets, so they fall 1 sec faster than the money

/**
 * This function is the same as the "createObstacle" but insted it create 
 * new divs with money bags.
 */
let createMoney = setInterval(function() {
  const money = document.createElement('div');
  money.classList.add('money');
  money.style.left = Math.floor(Math.random() * 350) + 'px';

  board.appendChild(money);
  
}, 2000); // <-- set the interval for the money, so they fall 1 sec slower than the comets

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

      let cometPos = comet.getBoundingClientRect(); //method to find comet-divs top,right,left and bottom side
      let playerPos = player.getBoundingClientRect(); //method to find the player-divs top,right,left and bottom side
    
     //If statement for a collision detection when comets hit the player
      if (cometPos.left >= playerPos.right || playerPos.left >= cometPos.right) {
      }
      else if (cometPos.bottom <= playerPos.top || playerPos.bottom <= cometPos.top) {
      }
      else {
          gameOver();

      }  
    
    comet.style.top = cometTop + 25 + 'px';
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

      let moneyPos = money.getBoundingClientRect(); //method to find money-divs top,right,left and bottom side
      let playerPos = player.getBoundingClientRect(); //method to find the player-divs top,right,left and bottom side
    
     //If statement for a collision detection when player hit a moneyBag.
      if (moneyPos.left >= playerPos.right || playerPos.left >= moneyPos.right) {
      }
      else if (moneyPos.bottom <= playerPos.top || playerPos.bottom <= moneyPos.top) {
      }
      else {
          score++; //add score 
          addScore(); 
          coinSound.play(); //play sound
          money.classList.remove('money'); //remove the moneybag from screen
          money.classList.add('collected-money');
          console.log('points');
      }  
    
    money.style.top = moneyTop + 25 + 'px';
  }
}
  
}, 200);

let addScore = () => {
  document.getElementById("score").innerHTML = "Score: " + score; //Adds score when hit a moneybag.
};

/**
 * When player hits a comet, the game stops and its game over, and if the player press "play again" 
 * the game starts over.
 */
function gameOver(){
  score = 0;
  clearInterval(moveObstacle);
  clearInterval(moveMoney);
  clearInterval(createMoney);
  clearInterval(createObstacle);
  let ship = document.querySelectorAll('#player');
  ship.forEach((player) => player.remove());

setTimeout(() => {
  document.getElementById('game-over').style.display = 'block';
  
});
}
/**
 * Function that set the image of spaceship as the player, despite on what spaceship the user choose in the "start game" page.
 * togheter with the start-game.js script.
 */
function setPlayerImage(){
  const imageUrl = localStorage.getItem('playerImageUrl');
  if (imageUrl) {
    document.getElementById("player").src = imageUrl;
  }
}

