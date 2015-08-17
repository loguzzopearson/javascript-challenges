// WIP to randomise ball colour

var fillColors = ["purple", "turquoise", "teal", "skyblue", "seagreen", "mediumorchid", "linen", "lightcyan", "lightcoral"];
var pickColor = fillColors[Math.floor(Math.random() * fillColors.length)];

  
// Function to create the ball
function ball(x, y) 
{
  moveTo(x, y);
  color(pickColor);
  circle(0, 0, 50);
}


// Function to create the box
function boxed()
{
  color("black");
  box(-250, 200, 500, 500);
}


// Function to make the ball bounce within square and change colors
function drawing() 
{
  // Draw ten frames per second 
  setInterval(frame, 10);
  var p1x = -190;
  var p1y = -190;
  var p2x = 150;
  var p2y = 150;
  var ballx = p1x;
  var bally = p1y; 
  var dirx = 1;
  var diry = 1;
  
  function frame() 
  {
    // Clear the screen
    clear();
    // the box
    boxed();
    // purple bouncing ball
    ball(ballx, bally);
    ballx +=dirx;
    bally +=diry; 
    console.log (ballx ==p1x, bally == p1y,ballx == p2x,bally == p2y)
    if ((ballx == p1x && bally == p1y) || (ballx == p2x && bally == p2y)) 
    {
      dirx = dirx * -1;
      diry = diry * -1;
      pickColor = fillColors[Math.floor(Math.random() * fillColors.length)]
     }
   }
}  
