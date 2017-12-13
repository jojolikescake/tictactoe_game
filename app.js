var box = document.querySelectorAll(".box")
var player1Input= ""
var player2Input= ""
var playerNameSubmit=document.querySelector("#submit")
var playerNameSubmitBox = document.querySelector(".playerInput")
var player1Element = document.querySelector('input[name="player1name"]');
var player2Element = document.querySelector('input[name="player2name"]');
var turnsBoxElement = document.querySelector('.turnsBox')
var playerTurn ="A"
var turnsArray = [0,0,0,0,0,0,0,0,0]

playerNameSubmit.addEventListener('click', storeNames)

box.forEach(function(elem){
  elem.addEventListener('click',addMark)
})

function storeNames (event){
  player1Input = player1Element.value
  player2Input = player2Element.value
  playerNameSubmitBox.classList.add("hidePlayerInput")
  turnsBoxElement.classList.add("turnsBoxShow")

}


function addMark(event){

  if (playerTurn==='A'){  
    event.target.classList.add("nought")
    playerTurn='B'
    document.querySelector("h2").textContent= player2Input+" \'s turn"
    turnsArray[event.target.getAttribute('data-cell')]=1 
    console.log(turnsArray)
  }  

  else if (playerTurn==='B'){
    event.target.classList.add("cross");
    playerTurn='A'
    document.querySelector("h2").textContent=player1Input+" \'s turn"
    turnsArray[event.target.getAttribute('data-cell')]=2
    console.log(turnsArray)
  }

  gameLogic()
}



function gameLogic(){
  
  //winning logic

  //left column of noughts
   if (turnsArray[0]===1 && turnsArray[1]===1 && turnsArray[2]===1){
    document.querySelector(".winnerbox").textContent=player1Input+" wins!"
  }
   //middle column of noughts
   else if (turnsArray[3]===1 && turnsArray[4]===1 && turnsArray[5]===1){
    document.querySelector(".winnerbox").textContent=player1Input+" wins!"
  }
  //right column of noughts
   else if (turnsArray[6]===1 && turnsArray[7]===1 && turnsArray[8]===1){
  document.querySelector(".winnerbox").textContent=player1Input+" wins!"
  }
  //left column of crosses
  else if (turnsArray[0]===2 && turnsArray[1]===2 && turnsArray[2]===2){
    document.querySelector(".winnerbox").textContent="Player 2 wins!"
  }
   //middle column of crosses 
  else if (turnsArray[3]===2 && turnsArray[4]===2 && turnsArray[5]===2){
    document.querySelector(".winnerbox").textContent="Player 2 wins!"
  }
  //right column of crosses
   else if (turnsArray[6]===2 && turnsArray[7]===2 && turnsArray[8]===2){
  document.querySelector(".winnerbox").textContent="Player 2 wins!"
  }

  //top row of noughts
  else if (turnsArray[0]===1 && turnsArray[3]===1 && turnsArray[6]===1){
   document.querySelector(".winnerbox").textContent=player1Input+" wins!" 
  }
  //middle row of noughts
  else if (turnsArray[1]===1 && turnsArray[4]===1 && turnsArray[7]===1){
    document.querySelector(".winnerbox").textContent=player1Input+" wins!" 
  }
  //bottom row of noughts
  else if (turnsArray[2]===1 && turnsArray[5]===1 && turnsArray[8]===1){
    document.querySelector(".winnerbox").textContent=player1Input+" wins!" 
  }
  //top row of crosses
  else if (turnsArray[0]===2 && turnsArray[3]===2 && turnsArray[6]===2){
    document.querySelector(".winnerbox").textContent="Player 2 wins!"
  }
  //middle row of crosses
  else if (turnsArray[1]===2 && turnsArray[4]===2 && turnsArray[7]===2){
    document.querySelector(".winnerbox").textContent="Player 2 wins!" 
  }
  //bottom row of crosses
  else if (turnsArray[2]===2 && turnsArray[5]===2 && turnsArray[8]===2){
    document.querySelector(".winnerbox").textContent="Player 2 wins!" 
  }
  // diagonal left down of noughts
  else if (turnsArray[0]===1 && turnsArray[4]===1 && turnsArray[8]===1){
   document.querySelector(".winnerbox").textContent=player1Input+" wins!" 
  }
  //diagonal left up of noughts
  else if (turnsArray[0]===1 && turnsArray[4]===1 && turnsArray[8]===1){
   document.querySelector(".winnerbox").textContent=player1Input+" wins!" 
  }
  // diagonal left down of crosses
  else if (turnsArray[0]===2 && turnsArray[4]===2 && turnsArray[8]===2){
   document.querySelector(".winnerbox").textContent="Player 2 wins!" 
  }
  //diagonal left up of crosses
  else if (turnsArray[0]===2 && turnsArray[4]===2 && turnsArray[8]===2){
   document.querySelector(".winnerbox").textContent="Player 2 wins!" 
  }
  //if its a draw
  else if(turnsArray.reduce(function getSum(total, num) {return total + num})===13){
    document.querySelector(".winnerbox").textContent="It's a draw" 
  }
}