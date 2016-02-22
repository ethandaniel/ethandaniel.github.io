var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var keys = [];
document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});

//variables
var aY = 150
var bY = 150
var ballColor = '#' + Math.floor((Math.random()*16581375)).toString(16)
var ballX = canvas.width/2
var ballY = canvas.height/2
var bs = 5
var z = Math.random()*2*Math.PI
var vX = Math.cos(z)*bs
var vY = Math.sin(z)*bs
var aD = 0 //angle decision 
var player1 = 0
var player2 = 0

//How it's done
function draw(){

ctx.fillStyle = "#0099e1"
ctx.fillRect(0,0,700,400)

ctx.strokeStyle = "#b90000"
ctx.lineWidth = 10
ctx.strokeRect(0,0,700,400)
ctx.lineWidth = 5

ctx.fillStyle = "purple"
ctx.beginPath();
ctx.arc(canvas.width/2,canvas.height/2,50,0,2*Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.moveTo(canvas.width/2,0);
ctx.lineTo(canvas.width/2,canvas.height/2 - 25);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width/2, canvas.height/2 + 25);
ctx.lineTo(canvas.width/2, canvas.height);
ctx.stroke();

ctx.beginPath();
ctx.arc(canvas.width/2,canvas.height/2,25,0,2*Math.PI);
ctx.stroke();

  
//player 1
  ctx.fillStyle = "purple"
  ctx.fillRect(5,aY,10,100)
  
 if(keys[87] && aY > 5){ //W
   aY -= 5
 }
  if(keys[83] && aY < 295){ //S
   aY += 5
 }

//player 2
  ctx.fillStyle = "purple"
  ctx.fillRect(685,bY,10,100)
  if(bY >= 295){
    bY = 295
  }
  if(bY <= 5){
    bY = 5
  }
  
 if(keys[38]){ //up arrow
   bY -= 5
 }
  if(keys[40]){ //down arrow
   bY += 5
 }
  
  //score board
  ctx.fillStyle = "black"
  ctx.font = "30px Arial";
  ctx.fillText(player1,150,100);
  ctx.fillText(player2,525,100);
  ctx.fillText("Player 1 Score",75,50);
  ctx.fillText("Player 2 Score",425,50);
  
//ball
  ctx.fillStyle = ballColor;
  ctx.strokeStyle = "#ffffff"
  ctx.beginPath();
  ctx.arc(ballX,ballY,25,0,2*Math.PI);
  ctx.fill();
  ctx.stroke();
  
  ballX += vX
  ballY += vY
  
  if(ballY >= 370 | ballY <= 30){
    vY = -vY
  }

  if(ballX <= 50){
    
    if(ballY >= aY && ballY <= (aY + 100) ){
    ballColor = '#' + Math.floor((Math.random()*16581375)).toString(16)
    bs += 1
    aD = Math.random();
    if(aD >= .5){
      z = Math.random() * (((7*Math.PI)/18)-0) + 0
      vX = Math.cos(z)*bs
      vY = Math.sin(z)*bs
    }else{
      z = Math.random() * (((29*Math.PI)/18)-(2*Math.PI)) + 0
      vX = Math.cos(z)*bs
      vY = Math.sin(z)*bs

  }
     }else{
       if(ballX <= -25){
       player2 += 1
       bs = 5
       z = Math.random()*2*Math.PI
       vX = Math.cos(z)*bs
       vY = Math.sin(z)*bs
       ballX = canvas.width/2
       ballY = canvas.height/2
       }
     }
  }
  
    if(ballX >= 650){
    
    if(ballY >= bY && ballY <= (bY + 100) ){
    ballColor = '#' + Math.floor((Math.random()*16581375)).toString(16)
    bs += 1
    z = Math.random() * (((25*Math.PI)/18)-((11*Math.PI)/18)) + ((11*Math.PI)/18)
    vX = Math.cos(z)*bs
    vY = Math.sin(z)*bs
     }else{
       if(ballX >= 725){
       player1 += 1
       bs = 5
       z = Math.random()*2*Math.PI
       vX = Math.cos(z)*bs
       vY = Math.sin(z)*bs
       ballX = canvas.width/2
       ballY = canvas.height/2
       }
     }    
}
 
  if(player1 < 5 && player2 < 5){
  requestAnimationFrame(draw)
  }else{
      ctx.fillStyle = "#0099e1"
      ctx.fillRect(0,0,700,400)

      ctx.strokeStyle = "#b90000"
      ctx.lineWidth = 10
      ctx.strokeRect(0,0,700,400)
      ctx.lineWidth = 5

      ctx.fillStyle = "purple"
      ctx.beginPath();
      ctx.arc(canvas.width/2,canvas.height/2,50,0,2*Math.PI);
      ctx.stroke();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(canvas.width/2,0);
      ctx.lineTo(canvas.width/2,canvas.height/2 - 25);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(canvas.width/2, canvas.height/2 + 25);
      ctx.lineTo(canvas.width/2, canvas.height);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(canvas.width/2,canvas.height/2,25,0,2*Math.PI);
      ctx.stroke();

 if(player1 === 5){
    ctx.font = "30px Arial";
    ctx.fillText("Player 1 Won!",200,300);

      }

 if(player2 === 5){
     ctx.font = "30px Arial";
     ctx.fillText("Player 2 Won!",200,300);
      }


  }
}
requestAnimationFrame(draw)