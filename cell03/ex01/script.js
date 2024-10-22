const balloon = document.getElementById('balloon');
let size = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

balloon.addEventListener('click', () => {
    size += 10;
    if (size > 420) {
        size = 200; // Explode and reset size
    }
    updateBalloon();
});

balloon.addEventListener('mouseleave', () => {
    size = Math.max(size - 5, 200); // Shrink but not below 200px
    colorIndex = (colorIndex - 1 + colors.length) % colors.length; // Reverse color change
    updateBalloon();
});

function updateBalloon() {
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;
    balloon.style.backgroundColor = colors[colorIndex];
}
