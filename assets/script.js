
//CONST variables
const player = document.getElementById('player');
const board = document.getElementById('gameboard');



// Touchevent and function for playing on a touch screen, for moving the player.
document.addEventListener('touchstart', handleTouchEvent, true);
document.addEventListener('touchmove', handleTouchEvent, true);
document.addEventListener('touchend', handleTouchEvent, true);
document.addEventListener('touchcancel', handleTouchEvent, true);

function handleTouchEvent(e) {
    if (e.touches.length === 0 ) return;
    let touch = e.touches[0];
    player.style.left = (touch.pageX - player.width / 2) + 'px';
    player.style.top = (touch.pageY - player.width / 2) + 'px';
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
    let top = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    if (e.key == "ArrowUp" && top > 0) {
        player.style.top = top - 20 + "px";
      }
      else if (e.key == "ArrowDown" && top <= 400) {
        player.style.top = top + 20 + "px";
      }
});