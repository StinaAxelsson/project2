
//CONST variables
const player = document.getElementById('player');
const board = document.getElementById('gameboard');



// Mouseevent for playing on a touch screen, for moving the player.
document.addEventListener('mousemove', handleMouseEvent);

function handleMouseEvent(e) {
    player.style.left = (e.pageX - player.width / 2) + 'px';
    player.style.left = (e.pageX + player.width / 5) + 'px';
}


// Add an Keyevent for when play on desktop, using the up, down, left and right arrown in the gameboard for moving the player.
window.addEventListener("keydown", (e) => {

    var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    if (e.key == "ArrowLeft" && left > 0) {
      player.style.left = left - 20 + "px";
    }
    else if (e.key == "ArrowRight" && left <= 350) {
      player.style.left = left + 20 + "px";
    }
    var top = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    if (e.key == "ArrowUp" && top > 0) {
        player.style.top = top - 20 + "px";
      }
      else if (e.key == "ArrowDown" && top <= 400) {
        player.style.top = top + 20 + "px";
      }
});