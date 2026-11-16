let para
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");

para = createP('this test is on the webpage, made with p5')
  para.position(0,50)
  para.style('background-color:blue')
}
function draw() {
  background(220);
  text("this is on the canvas", 20, 60)

  push()
translate(400,300);
  rotate(frameCount *0.03);
  fill('red')
  eclipse(0, 0, 100, 100)
  pop()
}
