const fragment_const = document.getElementById("fragment-code-const");

function located(e) {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = false;
}

fragment_const.addEventListener("mousemove", located);
