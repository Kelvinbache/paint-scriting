const fragment = document.querySelectorAll(".fragment");

for (let i = 0; i < fragment.length; i++) {
 
 let x, y;
  let isDragging = false;
  let select = false;

  function selection(e) {
    isDragging = true;
    x = e.clientX - fragment[i].getBoundingClientRect().left;
    y = e.clientY - fragment[i].getBoundingClientRect().top;
    select = true;
  }

  function animation(e) {
    if (isDragging && select) {
      const new_located_x = e.clientX - x;
      const new_located_y = e.clientY - y;

      fragment[i].style.left = `${new_located_x}px`;
      fragment[i].style.top = `${new_located_y}px`;
    }
  }

  function status() {
    isDragging = false;
  }

  fragment[i].addEventListener("click", selection);
  document.addEventListener("mousemove", animation);
  document.addEventListener("mouseup", status);
}
