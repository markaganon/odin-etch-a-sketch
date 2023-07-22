const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "black";
const DEFAULT_TOOL = "pen"

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentTool = DEFAULT_TOOL
createGrid(currentSize);


// grid size  input
function setCurrentSize(number) {
    currentSize = number;
}

let slider = document.getElementById('gridSlider');
slider.addEventListener("change", function(e) {
    setCurrentSize(slider.value);
    console.log(slider.value);
    document.getElementById('grid').innerHTML = ''
    createGrid(currentSize);
});

// create grid

function createGrid(currentSize) {
    const gridContainer = document.getElementById('grid');
    let gridSize = currentSize * currentSize;
    for (let i = 0; i < gridSize; i++) {
        let square = document.createElement('div');
        square.classList.add("square");
        square.addEventListener("mouseover", changeColor);
        square.addEventListener("click", changeColor);
        gridContainer.appendChild(square);
    }

    let squareSize = 100/currentSize;
    gridContainer.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`
}

// drawing mechanics

    let mouseDown;

    document.body.addEventListener("mousedown", () => {
        mouseDown = true;
      });
      
      document.body.addEventListener("mouseup", () => {
        mouseDown = false;
      });



function changeColor(event) {
    if (!(mouseDown))  {
        return;
    }
    const square = event.target;
    if ((event.type === 'mouseover' && (mouseDown)) || event.type === 'click') {
        if (currentTool == "eraser") {
            console.log("erasing");
            square.style.backgroundColor = "white";
        } else {
            square.style.backgroundColor =  currentColor;
        }
    } 
}

// clear button
document.getElementById('clear').addEventListener("click", function(event) {
    document.getElementById('grid').innerHTML = ''
    createGrid(currentSize);
});

// eraser button
function setCurrentTool(tool) {
    currentTool = tool
}

document.getElementById('eraser').addEventListener("click", function(event) {
    if (currentTool == "pen") {
        console.log("enabling eraser");
        setCurrentTool("eraser")
    } else {
        console.log("enabling pen");
        setCurrentTool("pen");
    }
});

// color button
