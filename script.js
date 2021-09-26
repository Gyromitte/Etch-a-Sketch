var gridSize=16;
var gridArea;

const container = document.querySelector('#container');
const clearButton = document.querySelector('#clearButton');

function createGrid(gridSize){
     gridArea = gridSize * gridSize;
    for(i=0; i < gridArea; i++){
        const content = document.createElement('div');
        content.classList.add('square');
        container.appendChild(content);
    }
    let resizeGrid = (16/gridSize) * 10;
    console.log("resizeGrid: "+resizeGrid);
    var square = document.querySelectorAll('.square').forEach(square=>{
            square.style.padding = resizeGrid+"px";
            console.log("changed the padding");
    });
}

createGrid(gridSize);

var square = document.querySelectorAll('.square').forEach(square =>{
    square.addEventListener('mouseover', e=>{
        square.style.background = "black";
    });
});


function deleteGrid(){
    square = document.querySelectorAll('.square').forEach(square =>{
        square.remove();
    });
}

function resize(){
        square = document.querySelectorAll('square').forEach(square =>{
        square.style.padding = "10px";
    });
}

clearButton.addEventListener('click', e=>{
    //Remove the previous grid so the container doesnt overflow
    deleteGrid();
   square = document.querySelectorAll('.square').forEach(square =>{
            square.style.background = "white";
    });
    gridSize = prompt("Write the pixels of the new grid: ");

    if(gridSize < 65){
        gridArea = gridSize * gridSize;
        createGrid(gridSize);
        //add event listener to the squares
        var square = document.querySelectorAll('.square').forEach(square =>{
            square.addEventListener('mouseover', e=>{
                square.style.background = "black";
            });
        });
    }
    if(gridSize > 64){
        prompt("You can only enter a maximum of 64");
    }
});





