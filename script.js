const line = document.getElementById('line');
let LineAngle = 0;

function rotateLine() {
    LineAngle += 2; 
    line.style.transform = `rotate(${LineAngle}deg)`; 
}

setInterval(rotateLine, 20);