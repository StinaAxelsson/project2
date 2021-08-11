
/**
 *This function goes with the onclick in the start-game html file. And set the millenium falcon as default image
 and togheter with the function setPlayerImage in the script.js to set the image decpite on what the
 user choose in the start-game page.
 */
function startGame(imgUrl){
localStorage.setItem('playerImageUrl', imgUrl);
window.location.href='gameboard.html';
}