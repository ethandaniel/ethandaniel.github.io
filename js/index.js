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
var ballColor = '#' + Math.floor((Math.random() * 16581375)).toString(16)
var ballX = canvas.width / 2
var ballY = canvas.height / 2
var bs = 5
var aD = Math.random //angle decision
var aD1 = Math.random
var z = 0 //angle
if (aD >= .5) {
  z = Math.random() * (((25 * Math.PI) / 18) - ((11 * Math.PI) / 18)) + ((11 * Math.PI) / 18)
} else {
  if (aD1 >= .5) {
    z = Math.random() * (((7 * Math.PI) / 18) - 0)
  } else {
    z = Math.random() * (((29 * Math.PI) / 18) - (2 * Math.PI))
  }
}
var vX = Math.cos(z) * bs
var vY = Math.sin(z) * bs
var player1 = 0
var player2 = 0
var cubes = [];
var maxCubes = 500;
var speed = 20;
var maxPoints = 2

//How it's done
function draw() {

  ctx.fillStyle = "#0099e1"
  ctx.fillRect(0, 0, 700, 400)

  ctx.strokeStyle = "#b90000"
  ctx.lineWidth = 10
  ctx.strokeRect(0, 0, 700, 400)
  ctx.lineWidth = 5

  ctx.fillStyle = "purple"
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height / 2 - 25);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2 + 25);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 25, 0, 2 * Math.PI);
  ctx.stroke();

  //player 1
  ctx.fillStyle = "purple"
  ctx.fillRect(5, aY, 10, 100)

  if (keys[87] && aY > 5) { //W
    aY -= 5
  }
  if (keys[83] && aY < 295) { //S
    aY += 5
  }

  //player 2
  ctx.fillStyle = "purple"
  ctx.fillRect(685, bY, 10, 100)
  if (bY >= 295) {
    bY = 295
  }
  if (bY <= 5) {
    bY = 5
  }

  if (keys[38]) { //up arrow
    bY -= 5
  }
  if (keys[40]) { //down arrow
    bY += 5
  }

  //score board
  ctx.fillStyle = "black"
  ctx.font = "30px Arial";
  ctx.fillText(player1, 150, 100);
  ctx.fillText(player2, 525, 100);
  ctx.fillText("Player 1 Score", 75, 50);
  ctx.fillText("Player 2 Score", 425, 50);

  //ball
  ctx.fillStyle = ballColor;
  ctx.strokeStyle = "#ffffff"
  ctx.beginPath();
  ctx.arc(ballX, ballY, 25, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  ballX += vX
  ballY += vY

  if (ballY >= 370 | ballY <= 30) {
    vY = -vY
  }

  if (ballX <= 50) {

    if (ballY >= aY && ballY <= (aY + 100)) {
      ballColor = '#' + Math.floor((Math.random() * 16581375)).toString(16)
      bs += 1
      aD = Math.random();
      if (aD >= .5) {
        z = Math.random() * (((7 * Math.PI) / 18) - 0) + 0
        vX = Math.cos(z) * bs
        vY = Math.sin(z) * bs
      } else {
        z = Math.random() * (((29 * Math.PI) / 18) - (2 * Math.PI)) + 0
        vX = Math.cos(z) * bs
        vY = Math.sin(z) * bs

      }
    } else {
      if (ballX <= -25) {
        player2 += 1
        bs = 5
        aD = Math.random()
        aD1 = Math.random()
        if (aD >= .5) {
          z = Math.random() * (((25 * Math.PI) / 18) - ((11 * Math.PI) / 18)) + ((11 * Math.PI) / 18)
        } else {
          if (aD1 >= .5) {
            z = Math.random() * (((7 * Math.PI) / 18) - 0)
          } else {
            z = Math.random() * (((29 * Math.PI) / 18) - (2 * Math.PI))
          }
        }
        vX = Math.cos(z) * bs
        vY = Math.sin(z) * bs
        ballX = canvas.width / 2
        ballY = canvas.height / 2
      }
    }
  }

  if (ballX >= 650) {

    if (ballY >= bY && ballY <= (bY + 100)) {
      ballColor = '#' + Math.floor((Math.random() * 16581375)).toString(16)
      bs += 1
      z = Math.random() * (((25 * Math.PI) / 18) - ((11 * Math.PI) / 18)) + ((11 * Math.PI) / 18)
      vX = Math.cos(z) * bs
      vY = Math.sin(z) * bs
    } else {
      if (ballX >= 725) {
        player1 += 1
        bs = 5
        aD = Math.random()
        aD1 = Math.random()
        if (aD >= .5) {
          z = Math.random() * (((25 * Math.PI) / 18) - ((11 * Math.PI) / 18)) + ((11 * Math.PI) / 18)
        } else {
          if (aD1 >= .5) {
            z = Math.random() * (((7 * Math.PI) / 18) - 0)
          } else {
            z = Math.random() * (((29 * Math.PI) / 18) - (2 * Math.PI))
          }
        }
        vX = Math.cos(z) * bs
        vY = Math.sin(z) * bs
        ballX = canvas.width / 2
        ballY = canvas.height / 2
      }
    }
  }

  if (player1 < maxPoints && player2 < maxPoints) {
    requestAnimationFrame(draw)
  } else {

    var container = {
      x: 0,
      y: 0,
      width: canvas.width,
      height: canvas.height,
    }

    var num = 0
    var interval = setInterval(function() {
      cubes[num] = new Object();
      cubes[num]["x"] = container.width / 2
      cubes[num]["y"] = container.height / 2;
      cubes[num]["vX"] = speed * (Math.random() - .5)
      cubes[num]["vY"] = speed * (Math.random() - .5)
      num++
      if (num > maxCubes) {
        window.clearInterval(interval);
      }
    }, 1);

    function draw1() {

      ctx.globalAlpha = .9;
      ctx.fillStyle = "#000000"
      ctx.fillStyle = "#0099e1"
      ctx.fillRect(0, 0, 700, 400)

      ctx.strokeStyle = "#b90000"
      ctx.lineWidth = 10
      ctx.strokeRect(0, 0, 700, 400)
      ctx.lineWidth = 5

      ctx.fillStyle = "purple"
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height / 2 - 25);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height / 2 + 25);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 25, 0, 2 * Math.PI);
      ctx.stroke();

      if (player1 === maxPoints) {
        ctx.textAlign = "center";
        ctx.font = "30px Arial";
        ctx.fillText("Player", 175, canvas.height / 2 + 12);
        ctx.fillStyle = "#b90000"
        ctx.fillText("1", canvas.width / 2, canvas.height / 2 + 12)
        ctx.fillStyle = "purple"
        ctx.fillText("Won", 525, canvas.height / 2 + 12)
      }

      if (player2 === maxPoints) {
        ctx.textAlign = "center";
        ctx.font = "30px Arial";
        ctx.fillText("Player", 175, canvas.height / 2 + 12);
        ctx.fillStyle = "#b90000";
        ctx.fillText("2", canvas.width / 2, canvas.height / 2 + 12);
        ctx.fillStyle = "purple";
        ctx.fillText("Won", 525, canvas.height / 2 + 12);
      }

      ctx.globalAlpha = 1;
      var grd = ctx.createRadialGradient(container.width / 2, container.height / 2, 0, container.width / 2, container.height / 2, container.width);
      grd.addColorStop(0, "purple");
      grd.addColorStop(1, "red");
      ctx.fillStyle = grd

      for (var i = 0; i < cubes.length; i++) {

        ctx.beginPath();
        ctx.arc(cubes[i].x, cubes[i].y, 6, 0, 2 * Math.PI);
        ctx.fill();

        if (cubes[i].x > container.width || cubes[i].x < 0) {
          cubes[i].vX = -cubes[i].vX
        }

        if (cubes[i].y > container.height || cubes[i].y < 0) {
          cubes[i].vY = -cubes[i].vY
        }

        cubes[i].x += cubes[i].vX;

        cubes[i].y += cubes[i].vY;

      }

      requestAnimationFrame(draw1)
    }
    requestAnimationFrame(draw1)

  }
}
requestAnimationFrame(draw)