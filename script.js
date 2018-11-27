var capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();
  frameRate(29);
  noStroke();
  
    
}

function draw() {
  background(255);
  
  fill(random(255), random(255), random(255));    
    
    capture.loadPixels();
  	var stepSize = round(constrain(mouseY / 4, 10, 28));
  	for (var y=0; y<height; y+=stepSize) {
    for (var x=0; x<width; x+=stepSize) {
      var i = y * width + x;
      var darkness = (255 - capture.pixels[i*4]) / 230;
      var radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
}
