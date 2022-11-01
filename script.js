const gridContainer = document.getElementById("grid-container");
const resetButton = document.getElementById("reset-button");
const blackButton = document.getElementById("black-button");
const whiteButton = document.getElementById("white-button");
const rgbButton = document.getElementById("rgb-button");
const colorButtons = document.getElementsByClassName("color-button")
var slider = document.getElementById("myRange");
var denominatorHTML = document.getElementById("denominator");
var numeratorHTML = document.getElementById("numerator");
const defaultDenominator = 16;
const defaultNumerator = 24;

var hoverColor = "black";


function hoverShade(e){
    if (e.target.className == "tile"){
        e.target.setAttribute("id", hoverColor);
    };
}

gridContainer.addEventListener("mouseover", hoverShade);

function resetTiles(){
    var denominatorValue = slider.value;
    var numeratorValue = (denominatorValue * 1.5);
    denominatorHTML.innerHTML = denominatorValue;
    numeratorHTML.innerHTML = numeratorValue;
    var tilesetSize = denominatorValue * numeratorValue;
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    gridContainer.style.gridTemplateRows = "repeat(" + denominatorValue + ", 1fr)";
    gridContainer.style.gridTemplateColumns = "repeat(" + numeratorValue + ", 1fr)"

    for (let i = 0; i < tilesetSize; i++){
        var div = document.createElement("div");
        div.className = "tile";
        gridContainer.appendChild(div);
    }
}

resetButton.addEventListener("click", resetTiles);
resetButton.addEventListener("mouseover", (event) => {resetButton.textContent = "RESET?"});
resetButton.addEventListener("mouseleave", (event) => {resetButton.innerHTML = "RESET"});

blackButton.addEventListener("click", (event) => {hoverColor = "black"; whiteButton.textContent=""; rgbButton.textContent=""; blackButton.textContent="X";});
whiteButton.addEventListener("click", (event) => {hoverColor = "white"; blackButton.textContent=""; rgbButton.textContent=""; whiteButton.textContent="X"});
rgbButton.addEventListener("click", (event) => {hoverColor = "rgb"; blackButton.textContent=""; whiteButton.textContent=""; rgbButton.textContent="X"});

document.addEventListener("DOMContentLoaded", (event) => {
    slider.value = defaultDenominator;
    denominatorHTML.innerHTML = defaultDenominator;
    numeratorHTML.innerHTML = defaultNumerator;
    for (let i = 0; i < defaultNumerator * defaultDenominator; i++){
        var div = document.createElement("div");
        div.className = "tile";
        gridContainer.appendChild(div);
    }
    blackButton.textContent="X";
});

slider.oninput = function() {
    var denominatorValue = this.value;
    var numeratorValue = (denominatorValue * 1.5);
    denominatorHTML.innerHTML = denominatorValue;
    numeratorHTML.innerHTML = numeratorValue;
    var tilesetSize = denominatorValue * numeratorValue;
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    gridContainer.style.gridTemplateRows = "repeat(" + denominatorValue + ", 1fr)";
    gridContainer.style.gridTemplateColumns = "repeat(" + numeratorValue + ", 1fr)"

    for (let i = 0; i < tilesetSize; i++){
        var div = document.createElement("div");
        div.className = "tile";
        gridContainer.appendChild(div);
    }
}

