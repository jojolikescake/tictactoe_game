var box = document.querySelectorAll(".box")
var player1Input= ""
var player2Input= ""
var playerNameSubmit=document.querySelector("#submit")
var playerNameSubmitBox = document.querySelector(".playerInput")
var turnsBoxElement = document.querySelector('.turnsBox h2')
var player1Element = document.querySelector('input[name="player1name"]');
var player2Element = document.querySelector('input[name="player2name"]');
var player1ScoreBoxElement=document.querySelector('.scoreBox1 h4')
var player2ScoreBoxElement=document.querySelector('.scoreBox2 h4')
var playerTurn ="A"
var turnsArray = [0,0,0,0,0,0,0,0,0]
var winnerBoxElementh2 = document.querySelector(".winnerbox h2")
var winnerBoxElement = document.querySelector(".winnerbox")
var player1Score = 0
var player2Score = 0
var player1ScoreElement = document.querySelector(".player1Score h3")
var player2ScoreElement = document.querySelector(".player2Score h3")
var allBoxes = document.querySelectorAll(".box")
var boxArray = document.querySelectorAll('main .box')


var box1 = document


playerNameSubmit.addEventListener('click', storeNames)

box.forEach(function(elem){
  elem.addEventListener('click',addMark)
  elem.classList.add('animated')
})





function storeNames (event){
  player1Input = player1Element.value
  player2Input = player2Element.value
  playerNameSubmitBox.classList.add("hidePlayerInput")
  turnsBoxElement.classList.add("turnsBoxShow")
  player1ScoreElement.textContent = player1Input+" score"
  player2ScoreElement.textContent = player2Input+" score"
  turnsBoxElement.textContent = player1Input+" start playing"
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
    boxArray[0].classList.add('zoomIn')
    setTimeout(function(){boxArray[0].classList.remove("zoomIn") }, 2000);
    boxArray[1].classList.add('zoomIn')
    setTimeout(function(){boxArray[1].classList.remove("zoomIn") }, 2000);
    boxArray[2].classList.add('zoomIn')
    setTimeout(function(){boxArray[2].classList.remove("zoomIn") }, 2000);
    playerWins(1)
    clearAllBoxes()
    clearBoardArray()


  }
   //middle column of noughts
   else if (turnsArray[3]===1 && turnsArray[4]===1 && turnsArray[5]===1){
    boxArray[3].classList.add('zoomIn')
    setTimeout(function(){boxArray[3].classList.remove("zoomIn") }, 2000);
    boxArray[4].classList.add('zoomIn')
    setTimeout(function(){boxArray[4].classList.remove("zoomIn") }, 2000);
    boxArray[5].classList.add('zoomIn')
    setTimeout(function(){boxArray[5].classList.remove("zoomIn") }, 2000);
    playerWins(1)
    clearAllBoxes()
    clearBoardArray()
  }
  //right column of noughts
   else if (turnsArray[6]===1 && turnsArray[7]===1 && turnsArray[8]===1){
    boxArray[6].classList.add('zoomIn')
    setTimeout(function(){boxArray[6].classList.remove("zoomIn") }, 2000);
    boxArray[7].classList.add('zoomIn')
    setTimeout(function(){boxArray[7].classList.remove("zoomIn") }, 2000);
    boxArray[8].classList.add('zoomIn')
    setTimeout(function(){boxArray[8].classList.remove("zoomIn") }, 2000);
    playerWins(1)
    clearAllBoxes()
    clearBoardArray()
  }
  //left column of crosses
  else if (turnsArray[0]===2 && turnsArray[1]===2 && turnsArray[2]===2){
    boxArray[0].classList.add('zoomIn')
    setTimeout(function(){boxArray[0].classList.remove("zoomIn") }, 2000);
    boxArray[1].classList.add('zoomIn')
    setTimeout(function(){boxArray[1].classList.remove("zoomIn") }, 2000);
    boxArray[2].classList.add('zoomIn')
    setTimeout(function(){boxArray[2].classList.remove("zoomIn") }, 2000);
    playerWins(2)
    clearAllBoxes()
    clearBoardArray()
  }
   //middle column of crosses 
  else if (turnsArray[3]===2 && turnsArray[4]===2 && turnsArray[5]===2){
    boxArray[3].classList.add('zoomIn')
    setTimeout(function(){boxArray[3].classList.remove("zoomIn") }, 2000);
    boxArray[4].classList.add('zoomIn')
    setTimeout(function(){boxArray[4].classList.remove("zoomIn") }, 2000);
    boxArray[5].classList.add('zoomIn')
    setTimeout(function(){boxArray[5].classList.remove("zoomIn") }, 2000);
    playerWins(2)
    clearAllBoxes()
    clearBoardArray()
  }
  //right column of crosses
   else if (turnsArray[6]===2 && turnsArray[7]===2 && turnsArray[8]===2){
    boxArray[6].classList.add('zoomIn')
    setTimeout(function(){boxArray[6].classList.remove("zoomIn") }, 2000);
    boxArray[7].classList.add('zoomIn')
    setTimeout(function(){boxArray[7].classList.remove("zoomIn") }, 2000);
    boxArray[8].classList.add('zoomIn')
    setTimeout(function(){boxArray[8].classList.remove("zoomIn") }, 2000);
    playerWins(2)
    clearAllBoxes()
    clearBoardArray()
  }

  //top row of noughts
  else if (turnsArray[0]===1 && turnsArray[3]===1 && turnsArray[6]===1){
    boxArray[0].classList.add('zoomIn')
    setTimeout(function(){boxArray[0].classList.remove("zoomIn") }, 2000);
    boxArray[3].classList.add('zoomIn')
    setTimeout(function(){boxArray[3].classList.remove("zoomIn") }, 2000);
    boxArray[6].classList.add('zoomIn')
    setTimeout(function(){boxArray[6].classList.remove("zoomIn") }, 2000);
    playerWins(1)
    clearAllBoxes()
    clearBoardArray()
  }
  //middle row of noughts
  else if (turnsArray[1]===1 && turnsArray[4]===1 && turnsArray[7]===1){
    boxArray[1].classList.add('zoomIn')
    setTimeout(function(){boxArray[1].classList.remove("zoomIn") }, 2000);
    boxArray[4].classList.add('zoomIn')
    setTimeout(function(){boxArray[4].classList.remove("zoomIn") }, 2000);
    boxArray[7].classList.add('zoomIn')
    setTimeout(function(){boxArray[7].classList.remove("zoomIn") }, 2000);
    playerWins(1)
    clearAllBoxes()
    clearBoardArray()
  }
  //bottom row of noughts
  else if (turnsArray[2]===1 && turnsArray[5]===1 && turnsArray[8]===1){
    boxArray[2].classList.add('zoomIn')
    setTimeout(function(){boxArray[2].classList.remove("zoomIn") }, 2000);
    boxArray[5].classList.add('zoomIn')
    setTimeout(function(){boxArray[5].classList.remove("zoomIn") }, 2000);
    boxArray[8].classList.add('zoomIn')
    setTimeout(function(){boxArray[8].classList.remove("zoomIn") }, 2000);
    playerWins(1)
    clearAllBoxes()
    clearBoardArray()
  }
  //top row of crosses
  else if (turnsArray[0]===2 && turnsArray[3]===2 && turnsArray[6]===2){
    boxArray[0].classList.add('zoomIn')
    setTimeout(function(){boxArray[0].classList.remove("zoomIn") }, 2000);
    boxArray[3].classList.add('zoomIn')
    setTimeout(function(){boxArray[3].classList.remove("zoomIn") }, 2000);
    boxArray[6].classList.add('zoomIn')
    setTimeout(function(){boxArray[6].classList.remove("zoomIn") }, 2000);
    playerWins(2)
    clearAllBoxes()
    clearBoardArray()
  }
  //middle row of crosses
  else if (turnsArray[1]===2 && turnsArray[4]===2 && turnsArray[7]===2){
    boxArray[1].classList.add('zoomIn')
    setTimeout(function(){boxArray[1].classList.remove("zoomIn") }, 2000);
    boxArray[4].classList.add('zoomIn')
    setTimeout(function(){boxArray[4].classList.remove("zoomIn") }, 2000);
    boxArray[7].classList.add('zoomIn')
    setTimeout(function(){boxArray[7].classList.remove("zoomIn") }, 2000);
    playerWins(2)
    clearAllBoxes()
    clearBoardArray()
  }
  //bottom row of crosses
  else if (turnsArray[2]===2 && turnsArray[5]===2 && turnsArray[8]===2){
    boxArray[2].classList.add('zoomIn')
    setTimeout(function(){boxArray[2].classList.remove("zoomIn") }, 2000);
    boxArray[5].classList.add('zoomIn')
    setTimeout(function(){boxArray[5].classList.remove("zoomIn") }, 2000);
    boxArray[8].classList.add('zoomIn')
    setTimeout(function(){boxArray[8].classList.remove("zoomIn") }, 2000);
    playerWins(2)
    clearAllBoxes()
    clearBoardArray()
  }
  // diagonal left down of noughts
  else if (turnsArray[0]===1 && turnsArray[4]===1 && turnsArray[8]===1){
    boxArray[0].classList.add('zoomIn')
    setTimeout(function(){boxArray[0].classList.remove("zoomIn") }, 2000);
    boxArray[4].classList.add('zoomIn')
    setTimeout(function(){boxArray[4].classList.remove("zoomIn") }, 2000);
    boxArray[8].classList.add('zoomIn')
    setTimeout(function(){boxArray[8].classList.remove("zoomIn") }, 2000);
    playerWins(1)
    clearAllBoxes()
    clearBoardArray()
  }
  //diagonal left up of noughts
  else if (turnsArray[0]===1 && turnsArray[4]===1 && turnsArray[8]===1){
    boxArray[0].classList.add('zoomIn')
    setTimeout(function(){boxArray[0].classList.remove("zoomIn") }, 2000);
    boxArray[4].classList.add('zoomIn')
    setTimeout(function(){boxArray[4].classList.remove("zoomIn") }, 2000);
    boxArray[8].classList.add('zoomIn')
    setTimeout(function(){boxArray[8].classList.remove("zoomIn") }, 2000);
    playerWins(1)
    clearAllBoxes()
    clearBoardArray()
  }
  // diagonal left down of crosses
  else if (turnsArray[0]===2 && turnsArray[4]===2 && turnsArray[8]===2){
    boxArray[0].classList.add('zoomIn')
    setTimeout(function(){boxArray[0].classList.remove("zoomIn") }, 2000);
    boxArray[4].classList.add('zoomIn')
    setTimeout(function(){boxArray[4].classList.remove("zoomIn") }, 2000);
    boxArray[8].classList.add('zoomIn')
    setTimeout(function(){boxArray[8].classList.remove("zoomIn") }, 2000);
    playerWins(2)
    clearAllBoxes()
    clearBoardArray()
  }
  //diagonal left up of crosses
  else if (turnsArray[0]===2 && turnsArray[4]===2 && turnsArray[8]===2){
    boxArray[0].classList.add('zoomIn')
    setTimeout(function(){boxArray[0].classList.remove("zoomIn") }, 2000);
    boxArray[4].classList.add('zoomIn')
    setTimeout(function(){boxArray[4].classList.remove("zoomIn") }, 2000);
    boxArray[8].classList.add('zoomIn')
    setTimeout(function(){boxArray[8].classList.remove("zoomIn") }, 2000);
    playerWins(2)
    clearAllBoxes()
    clearBoardArray()
  }
  //if its a draw
  else if(turnsArray.reduce(function getSum(total, num) {return total + num})===13){
    winnerBoxElement.textContent="It's a draw" 
    winnerBoxElement.classList.add("winnerBoxShow")
    clearAllBoxes()
    clearBoardArray() 
  
  }


}

function clearAllBoxes(){
  allBoxes.forEach(function(elem){
  setTimeout(function(){elem.style.backgroundImage = "" }, 2000);
   setTimeout(function(){elem.style.backgroundImage = ""}, 2000);
  })
}

function clearBoardArray(){ turnsArray=[] 
  turnsArray.length=9
  turnsArray.fill(0)
  //turnsArray.forEach(function(i){turnsArray= })
}

function playerWins(player){
  if (player === 1){
   player1ScoreElement.classList.add("flash")
   setTimeout(function(){player1ScoreElement.classList.remove("flash") }, 2000);
   winnerBoxElementh2.classList.add("rubberBand")
   setTimeout(function(){player1ScoreElement.classList.remove("rubberBand") }, 2000);
   winnerBoxElementh2.textContent=player1Input+" wins!"
   player1Score+=1
   player1ScoreBoxElement.textContent= player1Score
  }
  else {
    player2ScoreElement.classList.add("flash")
   setTimeout(function(){player2ScoreElement.classList.remove("flash") }, 2000);
   winnerBoxElementh2.classList.add("rubberBand")
   setTimeout(function(){player1ScoreElement.classList.remove("rubberBand") }, 2000);
    winnerBoxElementh2.textContent=player2Input+" wins!"
    player2Score+=1
    player2ScoreBoxElement.textContent= player2Score

  }

  winnerBoxElement.classList.add("winnerBoxShow") 


}

//function preventOverwrite(){
  //if (event.target.classList==="box nought"|| event.target.classList==="box cross"){
    //event.target.removeEventListener('click')
//  }
//}

