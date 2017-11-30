var p1Turn = true;
var ttt = [0,0,0,
          0,0,0,
          0,0,0];

var turn = 0;
var p1Win = 0;
var p2Win = 0;
var gameCount = 0;

function win(i){
  return (ttt[0]==i && ttt[1]==i && ttt[2]==i) ||
    (ttt[3]==i && ttt[4]==i && ttt[5]==i) ||
    (ttt[6]==i && ttt[7]==i && ttt[8]==i) ||
    (ttt[0]==i && ttt[3]==i && ttt[6]==i) ||
    (ttt[1]==i && ttt[4]==i && ttt[7]==i) ||
    (ttt[2]==i && ttt[5]==i && ttt[8]==i) ||
    (ttt[0]==i && ttt[4]==i && ttt[8]==i) ||
    (ttt[2]==i && ttt[4]==i && ttt[6]==i);
}
function findWinner(){
  if(win(1)) return 1;
  else if(win(2)) return 2;
  return 0;
}
function playerTurn(){
  var i = this.getAttribute('id');
  var t = "X";
  var tt = 1;
  if(!p1Turn){
    t = "O";
    tt = 2;
  }
  document.getElementById(i).innerText = t;
  this.removeEventListener("click", playerTurn);
  p1Turn = !p1Turn;
  i = parseInt(i);
  ttt[i] = tt;
  turn++;
  var p = findWinner();
  if(p > 0){
   gameCount++;
    turn = 0;
    if(p == 1){
      p1Win++;
      document.getElementById('p1Win').innerText = p1Win;
      document.getElementById('p2Lost').innerText = p1Win;
    }else {
      p2Win++;
      document.getElementById('p2Win').innerText = p2Win;
      document.getElementById('p1Lost').innerText = p2Win;
    }
    ttt = [0,0,0, 0,0,0, 0,0,0];
    setTimeout(function(){alert('Player '+p+' won!');}, 200);
    return;
  }
  if(turn >= 9){
    setTimeout(function(){alert('Draw!')}, 200);
  }
}

function restart(){
  tds = document.getElementsByTagName('td');
  for(var i = 0; i<tds.length; i++){
    tds[i].innerText = "";
    tds[i].addEventListener("click", playerTurn);
  }
}

function addHandles(){
  tds = document.getElementsByTagName('td');
  for(var i = 0; i<tds.length; i++){
    tds[i].addEventListener("click", playerTurn);
  }
}

addHandles();
