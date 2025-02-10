function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed === true) {
    fill(random(255/2,255));
  } else {
    fill(random(0,255/2))
  }

  circle(mouseX,mouseY,100)
}

