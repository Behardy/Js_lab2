"use strict";

let userHealth = 40;
let grantHealth = 10;
let userwins = 0;
let grantwins = 0;
let user = undefined;

function startGame() {

    let play = prompt("  Do you want to play? Yes or No?");
    if (play === "Yes") {

        user = prompt(" please input user name.");
        startCombat();
    } else {
        console.log("We can play later");

    }
}

function startCombat() {
    let move = prompt(`Do you wich to Attack or Quit`)
    while (startGame) {
        if (move === "Attack") {
            getDamage()

            if (grantHealth <= 0) {
                userwins++;
                grantHealth = 10;

                console.log(`${user} wins.`);

            } if (userHealth <= 0) {
                console.log(`The Almighty Grant wins`);
                break;

            } if (userwins === 3) {
                console.log(`Finish him! ${user} wins.`);
                break;
            }
        } else {
            move ==="Quit";
            console.log(`Game Over!`);
            return startGame();


        }

    }


    function getDamage() {

        console.log(`${user} has ${userHealth = userHealth - (Math.floor(Math.random() * 5) + 1)} health left.`);
        console.log(`The Almighty Grant has ${grantHealth = grantHealth - (Math.floor(Math.random() * 5) + 1)} health left.`);
    }
}
startGame()


