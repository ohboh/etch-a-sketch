document.addEventListener("DOMContentLoaded", function(){
    var tilesetSize = 24 * 16;
    for (let i = 0; i < tilesetSize; i++){
        var div = document.createElement("div");
        div.className = "tile";
        document.getElementById("grid-container").appendChild(div);
    }
}, false)

function hoverShade(e){
    if (e.target.className == "tile"){
        e.target.classList.add("tile-hovered");
    };
}


const gridContainer = document.querySelector("#grid-container");
gridContainer.addEventListener("mouseover", hoverShade);