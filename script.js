const line = document.getElementById('line');
let LineAngle = 0;
window.rotateEnabled = true;

function rotateLine() {
	if (!window.rotateEnabled) return;
    LineAngle += 2; 
    line.style.transform = `rotate(${LineAngle}deg)`; 
}

setInterval(rotateLine, 20);