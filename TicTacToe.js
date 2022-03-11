const Container = document.getElementById('grid-container');
const Board = ["x", "o","x", "o","x", "o","x", "o", "x"];

const gameboard = () =>{   
        for(var i =0; i<9; i++){
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
               if(event.target){

               }
               
              
            });
        });
        // return{getMarker,placeMarker};
    };


        


// const player1 = Player('x');
// const player2 = Player('o');

// player1.placeMarker();
// player2.placeMarker();