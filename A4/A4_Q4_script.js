const draggable = document.getElementById('image');
let isDragging = false;
let startingX = 0;
let startingY = 0;
let offsetX = 0;
let offsetY = 0;

draggable.addEventListener('mousedown', startDragging);
document.addEventListener('mousemove', dragElement);
document.addEventListener('mouseup', stopDragging);

function startDragging(e) {
  e.preventDefault();
  isDragging = true;
  startingX = parseInt(draggable.style.left) || 0;
  startingY = parseInt(draggable.style.top) || 0;
  offsetX = e.clientX;
  offsetY = e.clientY;
}

function dragElement(e) {
  if (isDragging) {
    draggable.style.left = `${startingX + e.clientX - offsetX}px`;
    draggable.style.top = `${startingY + e.clientY - offsetY}px`;
  }
}

function stopDragging() {
  isDragging = false;
}

