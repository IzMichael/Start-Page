var full = false;

function toggleFullColour() {
    const displayF = document.getElementById('colourDisplayF');
    if (full === true) {
        displayF.classList.add('-translate-y-full');
        full = false;
    } else {
        displayF.classList.remove('-translate-y-full');
        full = true;
    }
}

function setColour(colour) {
    const display = document.getElementById('colourDisplay');
    const displayF = document.getElementById('colourDisplayF');
    display.style.backgroundColor = colour;
    displayF.style.backgroundColor = colour;
    const text = document.getElementById('textOutput');
    text.innerHTML = colour + ' - ' + 'rgb(' + hexToRgb(colour.toString().replace('#', '')).r + ', ' + hexToRgb(colour.toString().replace('#', '')).g + ', ' + hexToRgb(colour.toString().replace('#', '')).b + ')';
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}