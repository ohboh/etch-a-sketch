

function hoverShade(e){
    if (e.target.className == "tile"){
        e.target.classList.add("tile-hovered");
    };
}


const gridContainer = document.getElementById("grid-container");
gridContainer.addEventListener("mouseover", hoverShade);

var slider = document.getElementById("myRange");
var denominatorHTML = document.getElementById("denominator");
var numeratorHTML = document.getElementById("numerator");
var denominatorValue = slider.value;
var numeratorValue = (denominatorValue * 1.5);

denominatorHTML.innerHTML = denominatorValue;
numeratorHTML.innerHTML = numeratorValue;

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