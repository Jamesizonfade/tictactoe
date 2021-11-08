

var turn= 1;
var gameBoxes = ['#box1', '#box2', '#box3', '#box4', '#box5', '#box6', '#box7', '#box8', '#box9'];

function startGame() {
  let gameSequence=[];

}

startGame()


// 1 player vs computer mode

function onePlayer() {

  playerTurn();
  
// $(".boxes").click(function () {
//   userClickedBox= this.id;
//   let randomNumber= Math.floor(Math.random()*(gameBoxes.length-1));
// // user should click to start

// if (turn<8){
//   $("#" + userClickedBox ).addClass("x-press");
//   $("#" + userClickedBox).off('click');
//   gameBoxes.splice((gameBoxes.indexOf("#" + userClickedBox)),1);
//   checkResult();
//   turn++;
//   setTimeout(function(){ $(gameBoxes[randomNumber]).addClass("circle"); 
//   gameBoxes.splice((gameBoxes.indexOf(gameBoxes[randomNumber])),1);
//   }, 500);
//   $(gameBoxes[randomNumber]).off('click');
//   checkResult()

// }
  
// else {
//   alert("draw")
// }
 
// turn++;
// })
}


function playerTurn(){
  $(".boxes").click(function () {
    userClickedBox= this.id;
  $("#" + userClickedBox ).addClass("x-press");
  $("#" + userClickedBox).off('click');
  gameBoxes.splice((gameBoxes.indexOf("#" + userClickedBox)),1);
  checkResult();
  gameTurn();
  })
}


function gameTurn() {
  let randomNumber= Math.floor(Math.random()*(gameBoxes.length-1));
  setTimeout(function(){ $(gameBoxes[randomNumber]).addClass("circle"); 
  gameBoxes.splice((gameBoxes.indexOf(gameBoxes[randomNumber])),1);
  checkResult();
  }, 500);
  $(gameBoxes[randomNumber]).off('click');
}



// two players game mode

function twoPlayers() {
  $(".boxes").click(function(){
    console.log(this.id)
    userClickedBox= this.id;
    if (turn%2!==0) {
      $("#" + userClickedBox ).addClass("x-press");
      $("#" + userClickedBox).off('click');
  
    }
    else if (turn>8) {
      alert ("draw")
      $("#" + userClickedBox).off('click');
    }
    else {
     
      $("#" + userClickedBox ).addClass("circle");
      $("#" + userClickedBox).off('click');
    }
  checkResult()
  })

}




function checkResult() {
  if ($("#box1").hasClass("x-press") && $("#box2").hasClass("x-press") && $("#box3").hasClass("x-press") || 
  $("#box1").hasClass("circle") && $("#box2").hasClass("circle") && $("#box3").hasClass("circle") ) {
    winner() ;}

  else if ($("#box4").hasClass("x-press") && $("#box5").hasClass("x-press") && $("#box6").hasClass("x-press") || 
  $("#box4").hasClass("circle") && $("#box5").hasClass("circle") && $("#box6").hasClass("circle")) {
    winner() ;} 

  else if ($("#box7").hasClass("x-press") && $("#box8").hasClass("x-press") && $("#box9").hasClass("x-press") ||
   $("#box7").hasClass("circle") && $("#box8").hasClass("circle") && $("#box9").hasClass("circle")) {
    winner() ;}

  else if ($("#box1").hasClass("x-press") && $("#box4").hasClass("x-press") && $("#box7").hasClass("x-press") ||
   $("#box1").hasClass("circle") && $("#box4").hasClass("circle") && $("#box7").hasClass("circle")) {
    winner() ;} 

  else if ($("#box2").hasClass("x-press") && $("#box5").hasClass("x-press") && $("#box8").hasClass("x-press") ||
   $("#box2").hasClass("circle") && $("#box5").hasClass("circle") && $("#box8").hasClass("circle")) {
    winner() ;} 

  else if ($("#box3").hasClass("x-press") && $("#box6").hasClass("x-press") && $("#box9").hasClass("x-press") ||
   $("#box3").hasClass("circle") && $("#box6").hasClass("circle") && $("#box9").hasClass("circle")) {
    winner() ;} 

  else if ($("#box1").hasClass("x-press") && $("#box5").hasClass("x-press") && $("#box9").hasClass("x-press") ||
   $("#box1").hasClass("circle") && $("#box5").hasClass("circle") && $("#box9").hasClass("circle")) {
    winner() ;} 

  else if ($("#box3").hasClass("x-press") && $("#box5").hasClass("x-press") && $("#box7").hasClass("x-press") ||
   $("#box3").hasClass("circle") && $("#box5").hasClass("circle") && $("#box9").hasClass("circle")) {
    winner() ;} 


  else {
    turn++
  }
}


function winner() {
  $("body").addClass("game-over");
  $(".game-reset").css(`visibility`,`visible`)
  if (turn%2!==0){
    $(".play").text("Game Over. X wins!!");
  }
  else {
   $(".play").text("Game Over. O wins!!");
  }
  $('.boxes').click(function () {
    location.reload(true);
});
  return;
}

// reset game after ther is a winner

$(".reset-button").click(function(){
  location.reload(true);
})


$("#two-players").click(function(){
  twoPlayers();
  fadeModeButtons();

})

$("#one-player").click(function(){
  onePlayer();
  fadeModeButtons();

})

function fadeModeButtons() {
  $("#players-option").css("opacity", "0.2");
   $("#two-players").off('click');
   $("#one-player").off('click');
}
