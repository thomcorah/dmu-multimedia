setup = () => {
  createCanvas(600, 600);
};

let counter = 0;
let dir = 1;

draw = () => {
  counter += dir;
  if (counter >= 360) {
    dir = -1;
  } else if (counter <= 0) {
    dir = 1;
  }

  let y = 250 * Math.sin(counter) * (mouseY / 600);
  let x = 250 * Math.cos(counter) * (mouseX / 600);
  fill(counter, counter, Math.floor(Math.random() * 255));
  noStroke();
  ellipse(300 + x, 300 + y, 500, 500);
  stroke(0);
  fill(counter, 255 - counter, Math.floor(Math.random() * 255));
  ellipse(300 + x, 300 + y, 80, 80);
};
