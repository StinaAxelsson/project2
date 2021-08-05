# project2

    let top = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    if (e.key == "ArrowUp" && top > 0) {
        player.style.top = top - 20 + "px";
      }
      else if (e.key == "ArrowDown" && top <= 400) {
        player.style.top = top + 20 + "px";
      }