let blink = 1; // 1: 눈 열림, 0: 감김
let hairColor;
let smile = false; // 키보드로 표정 바꾸기

function setup() {
  createCanvas(600, 400);     // 
  noCursor();
  frameRate(400);              // 
  hairColor = color(0);       // 기본 머리색: 검정
}

function draw() {
  background(210, 235, 255);
  translate(width / 2, height / 2);
  fill(255);
  noStroke();

  // -----------------------------
  // 구름 
  fill(1000);
  ellipse(-200,100,80,50);
  ellipse(-230,100,90,50);
  ellipse(200,100,100,60);
  ellipse(-300,-50,100,60);
  ellipse(230,100,100,60);
  ellipse(-250,-50,100,60);
  ellipse(200,-50,100,60);
  ellipse(150,-50,100,60);
  ellipse(-300,-200,100,60);
  ellipse(-280,-200,100,60);

  // -----------------------------
  // 머리
  fill(hairColor);
  arc(0, 165, 370, 700, PI, 0);
  
  let faceColor = color(255, 205, 170);
  drawFaceShape(0, 0, 220, 280, faceColor);

  fill(hairColor);
  arc(0, -30, 225, 300, PI, 0);

  strokeWeight(3);
  stroke(255, 205, 170);
  line(-80, -80, -90, -30);
  line(-40, -80, -50, -31);
  line(0, -80, -10, -31);
  line(20, -80, 10, -31);
  line(40, -80, 30, -31);
  line(80, -80, 70, -31);
  
  stroke(hairColor);
  strokeWeight(10);
  line(-85, -30, -23, -24);
  line(85, -30, 23, -24);

  drawEar(-120, 10, 56, 90, faceColor);
  drawEar(120, 10, 56, 90, faceColor);
}

function drawFaceShape(x, y, w, h, skinColor) {
  push();
  translate(x, y);
  noStroke();
  fill(skinColor);
  ellipse(0, 0, w, h);

  beginShape();
  vertex(-w * 0.28, h * 0.35);
  vertex(0, h * 0.55);
  vertex(w * 0.28, h * 0.35);
  vertex(w * 0.28, h * 0.2);
  vertex(-w * 0.28, h * 0.2);
  endShape(CLOSE);

  rect(-35, 100, 70);
  fill(100);
  rect(-100, 150, 200, 100);
  ellipse(90, 224, 150);
  ellipse(-90, 224, 150);
  fill(255, 205, 170);
  arc(0, 150, 100, 70, 0, PI);
  fill(255, 182, 160);
  ellipse(70, 50, 50, 25);
  ellipse(-70, 50, 50, 25);

  // --- 눈 (blink 반영) ---
  fill(1000);
  strokeWeight(1)
  arc(-50, 0, 50, 25 * blink, PI, 0);
  arc(-50, 0, 50, 30 * blink, 0, PI);
  arc(50, 0, 50, 25 * blink, PI, 0);
  arc(50, 0, 50, 30 * blink, 0, PI);

  noFill();
  stroke(0);
  arc(-50, 0, 50, 25 * blink, PI, 0);
  arc(50, 0, 50, 25 * blink, PI, 0);

  
  // 눈동자 시선 추적 (마우스 방향 따라 이동)
  let maxOffset = 8; // 눈동자가 눈 안에서 움직일 최대 거리
  let centerL = createVector(width / 2 - 45, height / 2 + 2); // 왼쪽 눈 중심(절대좌표)
  let centerR = createVector(width / 2 + 45, height / 2 + 2); // 오른쪽 눈 중심

  // 마우스 벡터 방향 계산
  let dirL = createVector(mouseX - centerL.x, mouseY - centerL.y);
  let dirR = createVector(mouseX - centerR.x, mouseY - centerR.y);

  dirL.limit(maxOffset);
  dirR.limit(maxOffset);

  fill(0);
  ellipse(-45 + dirL.x * 0.5, 2 + dirL.y * 0.5, 20, 25);
  ellipse(45 + dirR.x * 0.5, 2 + dirR.y * 0.5, 20, 25);

  // 빛 반사점 고정
  fill(255);
  ellipse(-50 + dirL.x * 0.5, 0 + dirL.y * 0.5, 7);
  ellipse(-42 + dirL.x * 0.5, 10 + dirL.y * 0.5, 7);
  ellipse(39 + dirR.x * 0.5, 0 + dirR.y * 0.5, 7);
  ellipse(47 + dirR.x * 0.5, 10 + dirR.y * 0.5, 7);

  fill(0);
  triangle(-80, -20, -70, -8, -65, -10);
  triangle(80, -20, 70, -8, 65, -10);
  triangle(-70, -20, -65, -10, -60, -12);
  triangle(70, -20, 65, -10, 60, -12);
  fill(0);
  triangle(-80, -20, -70, -8, -65, -10);
  triangle(80, -20, 70, -8, 65, -10);
  triangle(-70, -20, -65, -10, -60, -12);
  triangle(70, -20, 65, -10, 60, -12);

  //(smile 변수로 표정 제어)
  noFill();
  stroke(0);
  strokeWeight(2);

  if (smile) {
  // 웃는 입
  arc(0, 75,90,30,0, PI);
  } else {
  // 찡그린 입
  arc(0, 100, 90, 30, PI, 0);
  }

  strokeWeight(1);
  arc(0, 95, 10, 5, 170, 160);

  stroke(192);
  strokeWeight(3);
  arc(0, 150, 70, 80, 0, PI);
  fill(192);
  ellipse(0, 190, 10);
  

  fill(skinColor)
  stroke(192, 192, 192);
  strokeWeight(3);
  arc(0, 150, 70, 80, 0, PI);
  
  fill(192, 192, 192);
  ellipse(0, 190, 10);

  let inner = color(
    red(skinColor) - 12,
    green(skinColor) - 6,
    blue(skinColor) - 6,
    220
  );
  fill(inner);

  noStroke();
  strokeWeight(2);
  triangle(0, 12, -15, 60, 10, 60);
  stroke(0);
  strokeWeight(1);
  line(0, 12, -15, 60);
  line(-15, 60, 10, 60);
  strokeWeight(1.5);
  line(-5, 50, -5, 50);
  pop();
}

/* 귀 (그대로) */
function drawEar(cx, cy, w, h, skinColor) {
  push();
  translate(cx, cy);
  noStroke();
  if (cx < 0) rotate(radians(-8)); else rotate(radians(8));
  fill(skinColor);
  ellipse(0, 0, w, h);
  fill(red(skinColor) - 12, green(skinColor) - 6, blue(skinColor) - 6);
  ellipse(0, -6, w * 0.55, h * 0.5);
  pop();
}

function drawEar(cx, cy, w, h, skinColor) {
  push();
  translate(cx, cy);
  noStroke();
  if (cx < 0) rotate(radians(-8)); else rotate(radians(8));
  fill(skinColor);
  ellipse(0, 0, w, h);
  fill(red(skinColor) - 12, green(skinColor) - 6, blue(skinColor) - 6);
  ellipse(0, -6, w * 0.55, h * 0.5);
  pop();
}

// ▼▼ 키보드 조작 ▼▼
function keyPressed() {
  if (key === 'm' || key === 'M') {
    smile = !smile; // M 키로 표정 전환
  } 
  else if (key === 'h' || key === 'H') {
    // 머리색 토글
    if (red(hairColor) === 0) hairColor = color(120, 60, 30);
    else hairColor = color(0);
  } 
  else if (key === 's' || key === 'S') {
    // 💾 S 키로 GIF 저장 (2초간)
    saveGif('my_face_gif', 2, {quality:15});
  }
}
