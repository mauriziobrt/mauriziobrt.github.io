function setup() {
    createCanvas(screen.width, screen.height);
    colorMode(HSB);
  
    // Set angle mode so that atan2() returns angles in degrees
    angleMode(DEGREES);
  
    describe('Two eyes that follow the cursor.');
  }
  
  function draw() {
    background(265);
  
    // Draw left eye
  
    let leftX = windowWidth - 80;
    let leftY = 70;
  
    // Calculate angle between left eye and mouse
    let leftAngle = atan2(mouseY - leftY, mouseX - leftX);
  
    push();
    translate(leftX, leftY);
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(leftAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25);
    pop();
  
    // Draw right eye
  
    let rightX = windowWidth - 140;
    let rightY = 70;
  
    // Calculate angle between right eye and angle
    let rightAngle = atan2(mouseY - rightY, mouseX - rightX);
  
    push();
    translate(rightX, rightY);
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(rightAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25);
    pop();
  }