var box = document.querySelectorAll(".box")
var playerTurn ="A"
var turnsArray = [0,0,0,0,0,0,0,0,0]


box.forEach(function(elem){
  elem.addEventListener('click',addMark)
})


function addMark(event){

  if (playerTurn==='A'){  
    event.target.classList.add("nought")
    playerTurn='B'
    document.querySelector("h2").textContent= "Player 2's turn"
    turnsArray[event.target.getAttribute('data-cell')]=1 
    console.log(turnsArray)
  }  

  else if (playerTurn==='B'){
    event.target.classList.add("cross");
    playerTurn='A'
    document.querySelector("h2").textContent="Player 1's turn" 
    turnsArray[event.target.getAttribute('data-cell')]=2
    console.log(turnsArray)
  }

  //left column of noughts
  if (turnsArray[0]===1 && turnsArray[1]===1 && turnsArray[2]===1){
    document.querySelector(".winnerbox").textContent="Player 1 wins!"
  }
   //middle column of noughts
   if (turnsArray[3]===1 && turnsArray[4]===1 && turnsArray[5]===1){
    document.querySelector(".winnerbox").textContent="Player 1 wins!"
  }
  //right column of noughts
   if (turnsArray[6]===1 && turnsArray[7]===1 && turnsArray[8]===1){
  document.querySelector(".winnerbox").textContent="Player 1 wins!"
  }
  //left column of crosses
  if (turnsArray[0]===2 && turnsArray[1]===2 && turnsArray[2]===2){
    document.querySelector(".winnerbox").textContent="Player 2 wins!"
  }
   //middle column of crosses 
  if (turnsArray[3]===2 && turnsArray[4]===2 && turnsArray[5]===2){
    document.querySelector(".winnerbox").textContent="Player 2 wins!"
  }
  //right column of crosses
   if (turnsArray[6]===2 && turnsArray[7]===2 && turnsArray[8]===2){
  document.querySelector(".winnerbox").textContent="Player 2 wins!"
  }

  //top row of noughts
  if (turnsArray[0]===1 && turnsArray[3]===1 && turnsArray[6]===1){
   document.querySelector(".winnerbox").textContent="Player 1 wins!" 
  }
}

