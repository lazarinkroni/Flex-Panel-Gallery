// Selectioning the class .panels from html
const panels = document.querySelectorAll(".panel");

// I need a function thats going to toggle and add the class "open"
function toggleOpen() {
  this.classList.toggle("open");
}
// Now i need a function to add the class toggleActive
function toggleActive(e) {
  // I need to make a decision if the event property contains "flex" is true
  if (e.propertyName.includes("flex")) {
    // Add the the class open-active
    this.classList.toggle("open-active");
  }
}

// Each of the panels I'am going to listen for a click on the toggleOpen
panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
