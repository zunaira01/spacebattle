const attackButton = document.getElementById("attackButton");
const quitButton = document.getElementById("quitbutton");
const battleAgaiButton = document.getElementById("battleAgainButton");

const NUM_ALIEN_SHIPS=[];
const alienShipHull = document.getElementById("alienShipHull");
const aliens = document.querySelector("#aliens > img");
const backgroundMusic = document.getElementById("backgroundMucis")
const playerShip=document.querySelector("#playerShip > img");
const playerShipHull=document.getElementById("playerShipHull");
// backgroundMusic.volume=0.1;

class Ship {
    constructor(hull, firepower, accuracy){
        this.hull=hull
        this.firepower=firepower
        this.accuracy=accuracy

    }
    attack(enemy){
         if (Math.random() < this.accuracy){
           enemy.hull-=this.firepower;
            let laserSound = new Audio("audio/8-bit-laser.wav");
            laserSound.play();
            }
    }

recharge() {
if (Math.random() < this.rechargeProbability) {
    this.hull += getRandomIntInclusive(1, 5);
}
}

}
let maverick = new Ship (20, 5, 0.7, 0.5);
maverick = new Ship (25, 5, 0.7, 0.8);
console.log(maverick);
maverick.attacking = true;


// creating a anotherr class with the parameters but different values
class Aliens {
    constructor () {
        this.ships = []
    }
    addAliens (){
        this.hull = Math.round(Math.random()*(6-3) + 3) // enemy hull is between 3 and 6
        this.firepower = Math.round(Math.random()*(4-2) + 2) // enemy firepower is between 2 and 4
        this.accuracy = (Math.random()*(.6 - .8) + .8).toFixed(1)// enemy accuracy is between .6 and .8
        // this.accuracy = Math.round((Math.random()*(.81 - .6) + .6) * 10) / 10
        this.rechargeProbability = (Math.random()*(.6 - .8) + .8).toFixed(1)
        this.ships.push (new Ship (this.shiphull, this.firepower, this.accuracy));
    }
}

let enemyAliens= new Aliens();
for (let i =0; i< 6;i++ ){
    enemyAliens.addAliens(); 
}
// const enemyAliens = new Aliens();

// enemyAliens.addAliens();
// enemyAliens.addAliens();
// enemyAliens.addAliens();
// enemyAliens.addAliens();
// enemyAliens.addAliens();

// console.log(enemyAliens);

// generate the array of alien ships
// let Enemy = new enemy();
// for (let i = 1; i <= NUM_ALIEN_SHIPS; i++) {
//   aliens.addAlienShip();
//   aliens.innerHTML += `
//         <div id="alien" class="alien-ship">
//             <img id="alienImg" src="../images/enemy_ship.png" alt="alien ship">
//             <h3 class="alien-ship-title">Alien</h3>
//             <h4>Hull: <span class="alien-ship-hull">0</span></h4>
//         </div>
//     `;
// }

// gives access to the array of alien ships
// const aliens = aliens.alienShips;

// update alien fleet hull values
// for (let i = 0; i < NUM_ALIEN_SHIPS; i++) {
//     alienShiPng[i].innerHTML = aliens.alienShips[i].png;
// }
// Attack
// const attackAliens = () =>{
    function attackAliens() {
let enemyFleet = enemyAliens.ships;
    for (let i=0; i<enemyAliens.ships.length; i++){
        // need to check our ship is destroyed, if destroyed then game over, if not keep fighting
        if(maverick.hull <=0){
            playerShip.setAttribute("src","images/explosion2.png");
            playerShipHull.innerHTML=maverick.hull;
            break;

        }
        while (maverick.hull > 0 || enemyFleet[i].hull > 0) {
            if(Math.random() < maverick.accuracy){
                enemyAliens.ships[i].hull = enemyAliens.hull - maverick.firepower
            }
            // need to check if enemy alien ship is destroyed, if yes then break and go to the next ship and restart battle
            if(enemyAliens.ships[i].shiphull <=0){
            console.log('hoorayy Enemy Aliens has been destroyed');
            playerShipHull.innerHTML=maverick.hull;
            break;
            }
            if(Math.random() < enemyAliens.ships[i].accuracy){
                maverick.hull = maverick.hull - enemyAliens.ships[i].firepower
            }
            if (maverick.hull <=0) {
                console.log('game over, your ship has been destroyed');
                playerShip.setAttribute("src","images/explosion2.png");
                playerShipHull.innerHTML=maverick.hull;
                break;
            }
        }
    }
    if (maverick.hull>0){
        aliens.setAttribute("src","images/enemy_ship_dead.png");
        playerShipHull.innerHTML=maverick.hull;
    }
}

let press=false;
attackButton.addEventListener("click",function(){
    if (press===false){
        attackAliens();
        press=true;}
    else{
        press=false;
        window.location.reload();
    } 

});
// attackAliens()
// console.log(maverick);
// console.log(attackAliens);
// console.log(rechargeMaverick);



// attackButton.addEventListener("click", attackAliens);
// rechargeButton.addEventListener("click", rechargeMaverick);
// quitButton.addEventListener("click", quitGame);






//restart the game
// cons restartGame = () => {
    // restartButton.addEventListener("click", () => {
    //   window.location.reload();
    // });
//   };
  
//   // if player clicks the attack! button:
  
  
      // fight one ship until either player or alien destroyed
//       fightOneAlien();
//       // check for a winner; timeout is necessary due to the timeout used earlier to remove alien ships from the array
//       setTimeout(() => {
//           checkWinner();
//       }, 1500);
//   });
//   // if player clicks the recharge button:
//   rechargeButton.addEventListener("click", () => {
//       // only recharge if hull is less than starting amount
//       if (USS_Ship.png < 20) {
//           // attempt to recharge player hull by a random amount
//           USS_Ship.recharge();
//           // update USS_HelloWorld hull in HTML page
//           playerShipPng.innerHTML = USS_Ship.png;
//           // allow an alien attack
//           attackAliens[0].attack(USS_Ship);
//       } else {
//           alert("Your ship is already at max!");
//       }
//   });


  
//   function resetGame() {
//     alienScore = 0;
//     shipScore = 0;
//     countdown = 99;
//     playerScoreElem.innerHTML = `${playerName}: ${playerScore}`;
//     computerScoreElem.innerHTML = 'Computer: 0';
//     resultElem.innerHTML = 'Choose Your ship';
//     countdownElem.innerHTML = '99';
//     resultElem.style.color = '#5805a0bc';
//     computerChoiceElem.innerHTML = '';
//     enableOptions();
//     startTimer();
//   }
  



//   function disableOptions() {
//     choices.forEach((choice) => {
//       choice.style.pointerEvents = 'none';
//     });
//   }

//   function enableOptions() {
//     choices.forEach((choice) => {
//       choice.style.pointerEvents = 'auto';
//     });
//   }
  

//   choices.forEach((choice) => choice.addEventListener('click', selectShip));
// battleAgainButton.addEventListener('click', battleAgain);
// battleAgainButton.style.fontFamily ='Impact, Haettenschweiler, Arial Narrow Bold, sans-serif';
  



  // // start screen and writer
// let div = document.createElement("div");
// let welcomeContainer = document.getElementById("welcomeMessage");
// welcomeContainer.appendChild(div);
// typeText(div, "Welcome, Captain.\n\nEarth is being attacked by a horde of aliens.\n\nWill you help save the Earth?", 0);
// // commence battle!
// startBtn.addEventListener("click", () => {
//     // redirect to game.html
//     window.location.href = "./html/game.html";
// });