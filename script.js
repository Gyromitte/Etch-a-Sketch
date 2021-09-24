let gridSize = 16;

const container = document.querySelector('#container');

gridArea = gridSize * gridSize;
function createGrid(gridSize){

    //Make horizontal divs
    for(i=0; i < gridArea; i++){
        const content = document.createElement('div');
        content.classList.add('square', 'horizontal-line');
        container.appendChild(content);
    }
   
}
createGrid(gridSize);