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
var winnerBoxElement = document.querySelector(".winnerbox")
var player1Score = 0
var player2Score = 0
var player1ScoreElement = document.querySelector(".scoreBox1")
var player2ScoreElement = document.querySelector(".scoreBox2")
var allBoxes = document.querySelectorAll(".box")


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
  if (player1Input!==""&& player2Input!==""){
    if (playerTurn==='A'&& event.target.style.backgroundImage ===""){  
     event.target.style.backgroundImage = "url('images/o2.gif')"
      playerTurn='B'
      document.querySelector("h2").textContent= player2Input+" \'s turn"
      turnsArray[event.target.getAttribute('data-cell')]=1 
      console.log(turnsArray)
    }  

    else if (playerTurn==='B'&& event.target.style.backgroundImage ===""){
     
      event.target.style.backgroundImage = "url('images/x2.gif')"
      playerTurn='A'
      document.querySelector("h2").textContent=player1Input+" \'s turn"
      turnsArray[event.target.getAttribute('data-cell')]=2
      console.log(turnsArray)
    }
  
  gameLogic()
  }
}



function gameLogic(){
  
  //winning logic

  //left column of noughts
   if (turnsArray[0]===1 && turnsArray[1]===1 && turnsArray[2]===1){
    document.querySelector(".winnerbox").textContent=player1Input+" wins!" 
    winnerBoxElement.classList.add("winnerBoxShow")
    player1Score+=1
    player1ScoreElement.textContent= player1Score
    clearAllBoxes()
    clearBoardArray()


  }
   //middle column of noughts
   else if (turnsArray[3]===1 && turnsArray[4]===1 && turnsArray[5]===1){
    document.querySelector(".winnerbox").textContent=player1Input+" wins!" 
    winnerBoxElement.classList.add("winnerBoxShow")
    player1Score+=1
    player1ScoreElement.textContent= player1Score
    clearAllBoxes()
    clearBoardArray()
  }
  //right column of noughts
   else if (turnsArray[6]===1 && turnsArray[7]===1 && turnsArray[8]===1){
  document.querySelector(".winnerbox").textContent=player1Input+" wins!" 
  winnerBoxElement.classList.add("winnerBoxShow")
  player1Score+=1
  player1ScoreElement.textContent= player1Score
  clearAllBoxes()
  clearBoardArray()
  }
  //left column of crosses
  else if (turnsArray[0]===2 && turnsArray[1]===2 && turnsArray[2]===2){
    document.querySelector(".winnerbox").textContent=player2Input+" wins!"
    winnerBoxElement.classList.add("winnerBoxShow")
    player2Score+=1
    player2ScoreElement.textContent= player2Score
    clearAllBoxes()
    clearBoardArray()
  }
   //middle column of crosses 
  else if (turnsArray[3]===2 && turnsArray[4]===2 && turnsArray[5]===2){
    document.querySelector(".winnerbox").textContent=player2Input+" wins!"
    winnerBoxElement.classList.add("winnerBoxShow")
    player2Score+=1
    player2ScoreElement.textContent= player2Score
    clearAllBoxes()
    clearBoardArray()
  }
  //right column of crosses
   else if (turnsArray[6]===2 && turnsArray[7]===2 && turnsArray[8]===2){
  document.querySelector(".winnerbox").textContent=player2Input+" wins!"
  winnerBoxElement.classList.add("winnerBoxShow")
  player2Score+=1
  player2ScoreElement.textContent= player2Score
  clearAllBoxes()
  clearBoardArray()
  }

  //top row of noughts
  else if (turnsArray[0]===1 && turnsArray[3]===1 && turnsArray[6]===1){
   document.querySelector(".winnerbox").textContent=player1Input+" wins!" 
   winnerBoxElement.classList.add("winnerBoxShow") 
  player1Score+=1
  player1ScoreElement.textContent= player1Score
  clearAllBoxes()
  clearBoardArray()
  }
  //middle row of noughts
  else if (turnsArray[1]===1 && turnsArray[4]===1 && turnsArray[7]===1){
    document.querySelector(".winnerbox").textContent=player1Input+" wins!" 
    winnerBoxElement.classList.add("winnerBoxShow") 
    player1Score+=1
    player1ScoreElement.textContent= player1Score
    clearAllBoxes()
    clearBoardArray()
  }
  //bottom row of noughts
  else if (turnsArray[2]===1 && turnsArray[5]===1 && turnsArray[8]===1){
    document.querySelector(".winnerbox").textContent=player1Input+" wins!" 
    winnerBoxElement.classList.add("winnerBoxShow") 
    winnerBoxElement.classList.add("winnerBoxShow") 
    player1Score+=1
    player1ScoreElement.textContent= player1Score
    clearAllBoxes()
    clearBoardArray()
  }
  //top row of crosses
  else if (turnsArray[0]===2 && turnsArray[3]===2 && turnsArray[6]===2){
    document.querySelector(".winnerbox").textContent=player2Input+" wins!"
    winnerBoxElement.classList.add("winnerBoxShow")
    player2Score+=1
    player2ScoreElement.textContent= player2Score
    clearAllBoxes()
    clearBoardArray()
  }
  //middle row of crosses
  else if (turnsArray[1]===2 && turnsArray[4]===2 && turnsArray[7]===2){
    document.querySelector(".winnerbox").textContent=player2Input+" wins!"
    winnerBoxElement.classList.add("winnerBoxShow") 
    player2Score+=1
    player2ScoreElement.textContent= player2Score
    clearAllBoxes()
    clearBoardArray()
  }
  //bottom row of crosses
  else if (turnsArray[2]===2 && turnsArray[5]===2 && turnsArray[8]===2){
    document.querySelector(".winnerbox").textContent=player2Input+" wins!"
    winnerBoxElement.classList.add("winnerBoxShow") 
    player2Score+=1
    player2ScoreElement.textContent= player2Score
    clearAllBoxes()
    clearBoardArray()
  }
  // diagonal left down of noughts
  else if (turnsArray[0]===1 && turnsArray[4]===1 && turnsArray[8]===1){
   document.querySelector(".winnerbox").textContent=player1Input+" wins!" 
   winnerBoxElement.classList.add("winnerBoxShow") 
   player1Score+=1
   player1ScoreElement.textContent= player1Score
   clearAllBoxes()
   clearBoardArray()
  }
  //diagonal left up of noughts
  else if (turnsArray[0]===1 && turnsArray[4]===1 && turnsArray[8]===1){
   document.querySelector(".winnerbox").textContent=player1Input+" wins!" 
   winnerBoxElement.classList.add("winnerBoxShow") 
   player1Score+=1
   player1ScoreElement.textContent= player1Score
   clearAllBoxes()
   clearBoardArray()
  }
  // diagonal left down of crosses
  else if (turnsArray[0]===2 && turnsArray[4]===2 && turnsArray[8]===2){
   document.querySelector(".winnerbox").textContent=player2Input+" wins!"
   winnerBoxElement.classList.add("winnerBoxShow") 
   player2Score+=1
   player2ScoreElement.textContent= player2Score
   clearAllBoxes()
   clearBoardArray()
  }
  //diagonal left up of crosses
  else if (turnsArray[0]===2 && turnsArray[4]===2 && turnsArray[8]===2){
   document.querySelector(".winnerbox").textContent=player2Input+" wins!"
   winnerBoxElement.classList.add("winnerBoxShow") 
   player2Score+=1
   player2ScoreElement.textContent= player2Score
   clearAllBoxes()
   clearBoardArray()
  }
  //if its a draw
  else if(turnsArray.reduce(function getSum(total, num) {return total + num})===13){
    document.querySelector(".winnerbox").textContent="It's a draw" 
    winnerBoxElement.classList.add("winnerBoxShow")
    clearAllBoxes()
    clearBoardArray() 
  
  }


}

function clearAllBoxes(){
  allBoxes.forEach(function(elem){
  setTimeout(function(){elem.style.backgroundImage = "" }, 1000);
   setTimeout(function(){elem.style.backgroundImage = ""}, 1000);
  })
}

function clearBoardArray(){ turnsArray=[] 
  turnsArray.length=9
  turnsArray.fill(0)
  //turnsArray.forEach(function(i){turnsArray= })
}

//function preventOverwrite(){
  //if (event.target.classList==="box nought"|| event.target.classList==="box cross"){
    //event.target.removeEventListener('click')
//  }
//}