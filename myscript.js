"use strict";

  const TIMES = "&times;";
  const OMICRON = "&Omicron;";
  var turn=1, score1=0, score2=0;

  var board = new Array(3); //Declaration of board

  for(var i=0;i<3;i++){
    board[i]=new Array(3);
    for(var j=0;j<3;j++){
      board[i][j] = ' ';
    }
  }

  function evaluate(){
    // Checking for Rows for X or O victory.
      for (var row = 0; row<3; row++)
      {
          if (board[row][0]==board[row][1] &&
              board[row][1]==board[row][2])
          {
              if (board[row][0]=='X')
                  return +10;
              else if (board[row][0]=='O')
                  return -10;
          }
      }

      // Checking for Columns for X or O victory.
      for (var col = 0; col<3; col++)
      {
          if (board[0][col]==board[1][col] &&
              board[1][col]==board[2][col])
          {
              if (board[0][col]=='X')
                  return +10;

              else if (board[0][col]=='O')
                  return -10;
          }
      }

      // Checking for Diagonals for X or O victory.
      if (board[0][0]==board[1][1] && board[1][1]==board[2][2])
      {
          if (board[0][0]=='X')
              return +10;
          else if (board[0][0]=='O')
              return -10;
      }

      if (board[0][2]==board[1][1] && board[1][1]==board[2][0])
      {
          if (board[0][2]=='X')
              return +10;
          else if (board[0][2]=='O')
              return -10;
      }

      // Else if none of them have won then return 0
      return 0;
  }

  function winner(state){
    if(state==-10){
      score1++;
      alert("PLAYER \'O\' WON!");
    }
    else if(state==10){
      alert("PLAYER \'X\' WON!");
      score2++;
    }
    else alert("TIE!");
    document.getElementById('sc').innerHTML="O:   "+score1+" |  X:   "+score2;
    startGame();
    return;
  }

  function isEmpty(){
    for(var i=0;i<3;i++)
      for(var j=0;j<3;j++) if(board[i][j]==' ') return true;
    return false;
  }

  function startGame(){
    turn = 1;
    for(var i=0;i<3;i++)
      for(var j=0;j<3;j++){
         document.getElementById((i*3+j+1).toString()).innerHTML= "";
         board[i][j]=' ';
      }
    document.getElementById('status').innerHTML = "ENJOY";
  }

  function two(row, col){
    if(turn){
      board[row][col] = 'O';
      document.getElementById((row*3+col+1).toString()).innerHTML=OMICRON;
      document.getElementById('status').innerHTML="Player " + TIMES +"\'s turn";
    }
    else{
      board[row][col] = 'X';
      document.getElementById((row*3+col+1).toString()).innerHTML=TIMES;
      document.getElementById('status').innerHTML="Player " + OMICRON + "\'s turn";
    }
    turn=(turn+1)%2;
    if(evaluate()==10){
      winner(10);
      return;
    }
    else if(evaluate()==-10){
      winner(-10);
      return;
    }
    if(!isEmpty()){
      winner(0);
      return;
    }
  }

  function fun(row, col){
    if(board[row][col]!=' '){
      alert("Please make a valid move!");
      return;
    }
    two(row, col);
  }

  function reset(){
    score1=0;
    score2=0;
    startGame();
    show();
  }
  function show(){
    document.getElementById('sc').innerHTML="O:   0 | X:   0";
  }
  
  function check(){
	  for(let i=0;i<3;i++){
		  for(let j=0;j<3;j++){
			  if(board[i][j]!=' ') return true;
		  }
	  }
	  return false;
  }
  
