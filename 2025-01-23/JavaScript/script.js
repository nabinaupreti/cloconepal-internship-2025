document.getElementById("butt").addEventListener("click", function () {
  // Remove the original paragraph
  const paragraph = document.getElementById("para");
  if (paragraph) {
    paragraph.remove();
  }

  // Add a new paragraph dynamically below the button
  const newParagraph = document.createElement("p");
  newParagraph.innerText = "This paragraph has been changed dynamically!";
  this.insertAdjacentElement("afterend", newParagraph);

  // Toggle the button's background color
  this.classList.toggle("toggled");
});
