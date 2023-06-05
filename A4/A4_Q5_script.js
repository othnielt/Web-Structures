const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
context.font = '40px serif';
context.shadowOffsetX = 2;
context.shadowOffsetY = 5;
context.shadowBlur = 6;
context.shadowColor = 'gray';
context.fillText('HTML5 Canvas', 2, 100);
