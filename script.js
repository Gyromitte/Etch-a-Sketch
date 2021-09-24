let gridSize = 16;

const container = document.querySelector('#container');


gridArea = gridSize * gridSize;

function createGrid(gridSize){
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



