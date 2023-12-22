// Create a new button
const newButton = document.createElement("button");
newButton.textContent = "Click me!";
// Bind a click event listener to the button
newButton.addEventListener("click", () => {
  alert("Button clicked!");
});
// Append the button to the page
document.body.appendChild(newButton);
