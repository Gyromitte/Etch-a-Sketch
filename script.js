let gridSize = 16;

const container = document.querySelector('#container');
const clearButton = document.querySelector('#clearButton');

function createGrid(gridSize){
    gridArea = gridSize * gridSize;
    for(i=0; i < gridArea; i++){
        const content = document.createElement('div');
        content.classList.add('square');
        container.appendChild(content);
    }
}
createGrid(gridSize);

const square = document.querySelectorAll('.square').forEach(square =>{
    square.addEventListener('mouseover', e=>{
        square.style.background = "black";
    });
});

clearButton.addEventListener('click', e=>{
    const square = document.querySelectorAll('.square').forEach(square =>{
            square.style.background = "white";
    });
    var gridSize= prompt("Write the pixels of the new grid: ");
    createGrid(gridSize);
});



