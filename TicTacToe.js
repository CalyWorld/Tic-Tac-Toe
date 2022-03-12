const Container = document.getElementById('grid-container');
const marker = [];

const playGame = (player, marker) =>{
    const getName = () => player;
    const getMarker = () => marker;
    

const gameboard = () =>{   
        for(var i =1; i<10; i++){
            let box = document.createElement('div');
            box.classList.add('cell');
            Container.append(box);
            box.setAttribute("id", i);
            
        }
    };
    gameboard();

const placeMarker = () =>{
        cells.forEach(cell => {
            cell.addEventListener('click', event=>{
                index = event.target.id
               if(index){
                    cell.textContent = 'x';
                    marker.splice(index, 1);
               }
               
              
            });
        });
    };
    return {getName, getMarker, placeMarker};
}

const player = playGame('Obi', 'x');

marker.push(player);
        