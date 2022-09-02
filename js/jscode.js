let playerscore = 0;
let computerscore = 0;
let drawscore = 0;

function getComputerChoice(){
    let result = Math.floor(Math.random()*3);
    if(result === 0){
        cmptchoice.textContent = 'ROCK';
        return 'rock';
    }else if(result === 1){
        cmptchoice.textContent = 'PAPPER';
        return 'papper';
    }else if(result === 2){
        cmptchoice.textContent = 'SCISSORS';
        return 'scissors';
    }
    resetGame();
}

function playerChoice(){
    rckbtn.addEventListener('click', ()=>{
        plyrchoice.textContent = 'ROCK';
        winnercondition('rock');
    });
    
    pprbtn.addEventListener('click', ()=>{
        plyrchoice.textContent = 'PAPPER';
        winnercondition('papper');
    });
    
    scissorsbtn.addEventListener('click', ()=>{
        plyrchoice.textContent = 'SCISSORS';
        winnercondition('scissors');
    });
}

function playRound(){
    const player = playerChoice();
    const winner = winnercondition(player);
    const rst = resetGame();
    return winner;
}

let rckbtn = document.querySelector('#rockbtn');
let pprbtn = document.querySelector('#papperbtn');
let scissorsbtn = document.querySelector('#scissorsbtn');
let rstbtn = document.querySelector('#resetbtn');
let plyrchoice = document.querySelector('#plyremote');
let cmptchoice = document.querySelector('#cmptemote');
let plyrscore = document.querySelector('#plyrscore');
let cmptscore = document.querySelector('#cmptscore');
let drwscore = document.querySelector('#rstscore');

function winnercondition(playerSelection){
    const computerSelection = getComputerChoice();

    if(playerSelection === 'rock' && computerSelection === 'scissors' || 
        playerSelection === 'papper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'papper'){
        playerscore = ++playerscore;
        plyrscore.textContent = playerscore;
        roundGame();
    }else if(computerSelection === 'rock' && playerSelection === 'scissors' ||
        computerSelection === 'papper' && playerSelection === 'rock' ||
        computerSelection === 'scissors' && playerSelection === 'papper'){
        computerscore = ++computerscore;
        cmptscore.textContent = computerscore;
        roundGame();
    }else{
        console.log('Draw');
        drawscore = ++drawscore;
        drwscore.textContent = drawscore;
        roundGame();
    }
}

function roundGame(){
    if(playerscore === 5 || computerscore === 5){
        rckbtn.disabled = true;
        pprbtn.disabled = true;
        scissorsbtn.disabled = true;
    }
}

function resetGame(){
    playerscore = 0;
    computerscore = 0;
    drawscore = 0;
    rckbtn.disabled = false;
    pprbtn.disabled = false;
    scissorsbtn.disabled = false;
    plyrscore.textContent = 0;
    computerscore.textContent = 0;
    rstbtn.addEventListener('click', ()=>{
        resetGame();
    });
}

console.log(playRound());