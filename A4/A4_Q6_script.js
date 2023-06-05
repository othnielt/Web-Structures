const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// non-rectangular shape
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 50);
ctx.lineTo(300, 100);
ctx.lineTo(300, 200);
ctx.lineTo(200, 250);
ctx.lineTo(100, 200);
ctx.closePath();

// Create gradient
const gradient = ctx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, 'red');
gradient.addColorStop(0.5, 'pink');
gradient.addColorStop(1, 'purple');

// Apply gradient to shape
ctx.fillStyle = gradient;
ctx.fill();
