console.clear();


//to begin the game we will make a board and then fill the board
const fillPiece = "-";
const gameBoard = new Array(64);
function fillGameBoard () {
    for (let i = 0; i < 64; i++) gameBoard[i] = fillPiece;
}
fillGameBoard();
//here we have the player and enemy
const Player = {
    icon: "A",
    lazer: "^",
    isShooting: false,
    position: 60,
    //lazerPosition: () => {return this.position-8;}, thisone didn't work, and i assume its becaus of the "THIS" keyword
    lazerPosition: function() {return this.position-8;},  
    lazerSpeed: 8,
    furthestLeftPosition: 56,
    furthestRightPosition: 63
};
const Enemy = {
    icon: "H",
    explodingIcon: "O",
    moveSpeed: 1,
    isExploding: false,
    position: 3,
    furthestLeftPosition: 0,
    furthestRightPosition: 7,
    enemyMovingRight: true
};
//now we need to be able to read input so heres some of that code:
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = () => {readline.question("Press A or D to move and W to shoot! (then press Enter) \n",
                    action => {
                        if(action[0] == "a" && Player.position != Player.furthestLeftPosition){
                            gameBoard[Player.position] = fillPiece;
                            Player.position = Player.position-1
                        }else if (action[0] == "d" && Player.position != Player.furthestRightPosition){
                            gameBoard[Player.position] = fillPiece;
                            Player.position = Player.position+1
                        }else if (action[0] == "w" && Player.position != Player.furthestRightPosition){
                            Player.isShooting = true;
                        }
                        drawBoard();
                    });}
//reference that code was found here: https://www.codecademy.com/articles/getting-user-input-in-node-js

//now that we have a gameboard, objects and input we can now start to draw our objects onto the gameboard!
//this will take both the player and enemy
const drawObject = (object) =>{
    //if exploding
    if(object.icon == object.explodingIcon){
        object.icon = fillPiece;
    }
    if (object.isExploding){
        object.icon = object.explodingIcon;
    }
    //maybe make a score? or a new game? nah, too much work
    gameBoard[object.position] = object.icon;
    if(object.icon == Enemy.icon) moveLazers();
    if(object.isShooting){
        object.isShooting = false;
        gameBoard[object.lazerPosition()] = object.lazer;
    }
}
//this will move the enemy across the board
const moveEnemy = () => {
    if(!Enemy.isExploding){
        if(Enemy.position == Enemy.furthestRightPosition){
            Enemy.enemyMovingRight = false;
        }else if(Enemy.position == Enemy.furthestLeftPosition){
            Enemy.enemyMovingRight = true;
        }
        gameBoard[Enemy.position] = fillPiece;
        Enemy.position = (Enemy.enemyMovingRight) ? Enemy.position+Enemy.moveSpeed : Enemy.position-Enemy.moveSpeed;
    }
}
//this will move lazers across the board
const moveLazers = () => {
    for (let i = 0; i <= 63; i++){
        if(gameBoard[i] == Player.lazer){
            if(gameBoard[i-Player.lazerSpeed] == Enemy.icon) {
                Enemy.isExploding = true;
            }else{
                gameBoard[i-Player.lazerSpeed] = Player.lazer;
            }
            gameBoard[i] = fillPiece;
        }
    }
}

//this is what we call after the "input section" to refresh the console.
const drawBoard = () => {
    console.clear(); //to make room for the new board
    //draw the player
    moveEnemy();
    drawObject(Player);
    drawObject(Enemy);
    

    for(let i = 0; i<64 ; i+=8){ //convoluded but it works
        console.log(gameBoard[i],gameBoard[i+1],gameBoard[i+2],gameBoard[i+3],gameBoard[i+4],gameBoard[i+5],gameBoard[i+6],gameBoard[i+7]);
    }
    input();
} 
//and this is where we begin the game
drawBoard();
