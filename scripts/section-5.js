const canvas = document.querySelector('.section-5__canvas');
const context = canvas.getContext('2d');
let isDrawing = false;
const rect = canvas.getBoundingClientRect();

canvas.width = rect.width;
canvas.height = rect.height;
context.strokeStyle = "#f3e261";

canvas.addEventListener('mousedown', function (e) {
    isDrawing = true;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    context.beginPath();
    context.moveTo(x, y);
});

canvas.addEventListener('mousemove', function (e) {
    if (isDrawing) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        context.lineTo(x, y);
        context.stroke();
    }
});

canvas.addEventListener('mouseup', function () {
    isDrawing = false;
});