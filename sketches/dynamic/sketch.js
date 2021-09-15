function setup() {
  // Create the canvas
  createCanvas(720, 400);
  background(200);
}
function draw() {
  colorMode(RGB);
  stroke(255);
  background(51);
  let from = color(218, 165, 32);
  let to = color(72, 61, 139);
  colorMode(HSB); // Try changing to HSB.
  let interA = lerpColor(from, to, 0.33);
  let interB = lerpColor(from, to, 0.66);
  let interC = lerpColor(from, to, 0.9);
  fill(from);
  rect(10, 20, 20, 60);
  fill(interA);
  rect(30, 20, 20, 60);
  fill(interB);
  rect(50, 20, 20, 60);
  fill(interC);
  rect(70, 20, 20, 60);
  fill(to);
  rect(90, 20, 20, 60);
}
