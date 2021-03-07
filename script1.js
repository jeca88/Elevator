let elevator = document.getElementById("elevator");
let floors = document.getElementById("floors");
let buttons = document.getElementById("buttons");

let liftCurrentFloor = 0;
let position = 0;
let inMovment = false;


function createFloors(numOfFloors) {
    for(let i=numOfFloors; i>=0; i--) {
        let floor = `<div class=" floor" id="${i}">
        <div class="floor-name" id="${i}" > ${i == 0? "Ground": "Floor" + i}</div>
        <div class = "buttons" id="buttonPanel${i}"> 
        </div>
        </div>`;

        let buttonsDisplayUp = `<button class="btn up" onclick ="callElevatorClick(${i})"><i class="fas fa-chevron-circle-up"></i></button>`;
        let buttonsDisplayDown = `<button class="btn down" onclick ="callElevatorClick(${i})"><i class="fas fa-chevron-circle-down"></i></button>`;

        floors.insertAdjacentHTML('beforeend', floor);
        let buttonPanel = document.getElementById(`buttonPanel${i}`);

        if(i !== numOfFloors) {
            buttonPanel.insertAdjacentHTML('beforeend', buttonsDisplayUp); 
        }

        if(i !== 0) {
            buttonPanel.insertAdjacentHTML('beforeend', buttonsDisplayDown); 
        }
    }
                
}
createFloors(5);

function createDisplayButtons(numOfButtons) {
    for(let i=numOfButtons; i>=0; i--) {
        let button = ` <button class="display-btn" onclick ="clickDisplay(${i})">${i == 0? "G":  i}</button>`;

      buttons.insertAdjacentHTML('beforeend', button);
    }
                
}
createDisplayButtons(5);

function callElevatorClick(floor) {

    if (!inMovment && floor !== liftCurrentFloor) {
        if(floor<liftCurrentFloor) {
            getFloorDown(floor);
        } else {
            getFloorUp(floor);
        }
    }
 }

 function getFloorUp(floor) {  
    inMovment = true;
    const newFloorHeight = 100 * liftCurrentFloor;
    let animateMaxPosition = 100*floor;
    liftCurrentFloor = floor; 
    position = newFloorHeight;

    let animate = setInterval(change, 10)
    function change() {  
        if (position == animateMaxPosition){
           clearInterval(animate);
           inMovment = false;
           play();
        } 
        else {      
           position++;        
           elevator.style.marginBottom = position + 'px';      
        }  
       }
    }
 

 function getFloorDown(floor) { 
    inMovment = true;
    const newFloorHeight = 100 * liftCurrentFloor;
    let animateMaxPosition = 100*floor;
    liftCurrentFloor = floor; 
    position = newFloorHeight;

    
    let animate = setInterval(change, 10)
    function change() { 
        if (position == animateMaxPosition){
           clearInterval(animate);
           inMovment = false;
           play();
        } 
        else {      
           position--;        
           elevator.style.marginBottom = position + 'px';      
        }  
      }

    }
    
 function clickDisplay(floor) { 
    if(floor==liftCurrentFloor || inMovment) {
        return    
    }
    else if(floor > liftCurrentFloor) {
        getFloorUp(floor);
    }
    else { 
        getFloorDown(floor);
    }   
}


function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }

    

    