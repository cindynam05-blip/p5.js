let c1, c2, c3;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100);
  noStroke();

//랜덤 컬러 3
  c1 = color(random(360), 80, 100);
  c2 = color(random(360), 80, 100);
  c3 = color(random(360), 80, 100);
}

function draw() {
  background(0);

  let t = frameCount * 0.02;

  let ccA = lerpColor(c1, c2, (sin(t) + 1) / 2);
  let ccB = lerpColor(c2, c3, (cos(t * 0.7) + 1) / 2);

//원(크기 변화)

  // 1. 큰 원 1
  fill(ccA);
  let r1 = 180 + sin(t * 2) * 20;
  ellipse(150 + sin(t) * 20, 200 + cos(t) * 15, r1, r1);

  // 2. 큰 원 2
  fill(ccB);
  let r2 = 160 + cos(t * 1.5) * 25;
  ellipse(450 + sin(t * 0.7) * 20, 200 + sin(t * 1.2) * 15, r2, r2);

  // 3. 작은 원
  fill(255, 80, 100);
  let r3 = 100 + sin(t * 3) * 10;
  ellipse(300 + cos(t) * 10, 120 + sin(t * 0.5) * 5, r3, r3);

//사각형
  push();
  translate(300, 200);
  rotate(sin(t) * 0.3);
  fill(255, 120, 200, 80);
  rect(-100, -60, 200, 120);
  pop();

  push();
  translate(300, 200);
  rotate(cos(t * 0.8) * 0.4);
  fill(100, 255, 180, 100);
  rect(-60, -100, 120, 200);
  pop();

//삼각형
  fill(255, 255, 255);
  triangle(
    300, 40 + sin(t * 2) * 10,
    260, 110,
    340, 110
  );

  fill(ccA);
  triangle(
    100, 300,
    60 + sin(t * 1.5) * 10, 360,
    140, 360
  );

//작은원
  fill(255);
  ellipse(520 + sin(t * 2) * 10, 80, 20, 20);

  fill(200);
  ellipse(80, 90 + cos(t * 3) * 10, 25, 25);
}

// GIF 저장
function keyPressed() {
  if (key === 's') {
    // 10초 길이 GIF 저장
    saveGif("myAnimation.gif", 10);
  }
}
