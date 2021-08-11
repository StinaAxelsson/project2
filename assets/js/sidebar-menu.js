
/**
 * This function make the sidebar menu opens when clicked on the hamurger icon
 */
function openNav() {
    document.getElementById("menu-sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /**
 * This function make the sidebar menu close when clicked on the X in the menu
 */
  function closeNav() {
    document.getElementById("menu-sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }