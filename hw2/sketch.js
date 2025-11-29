function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
// p5.js: 얼굴형(살구색) + 귀만 그리기

function setup() {
  createCanvas(600, 400);
  noLoop();
}


function draw() {
  background(210, 235, 255); // 연한 하늘색 배경
  translate(width / 2, height / 2); // 중앙 기준
  
  fill(1000)
  noStroke()

  ellipse(-200,100,80,50)
  ellipse(-230,100,90,50)
  ellipse(200,100,100,60)
  ellipse(-300,-50,100,60)
  ellipse(230,100,100,60)
  ellipse(-250,-50,100,60)
 
  ellipse(200,-50,100,60)
  ellipse(150,-50,100,60)
  
  ellipse(-300,-200,100,60)
  ellipse(-280,-200,100,60)
  //머리
 fill(0);
 arc(-00, 165, 370, 700, PI, 0);

  
  // 얼굴(살구색)
  let faceColor = color(255, 205, 170); // 살구색 톤
  drawFaceShape(0, 0, 220, 280, faceColor);
//앞머리
  fill(0)
  arc(0,-30,225,300,PI,0)
  
  strokeWeight(3)
  stroke(255, 205, 170)
  line(-80,-80,-90,-30)
 
  line(-40,-80,-50,-31)
  
  line(0,-80,-10,-31)
  line(20,-80,10,-31)
  line(40,-80,30,-31)

  line(80,-80,70,-31)
  
  stroke(20)
  strokeWeight(10)
  line(-85,-30,-23,-24)
  strokeWeight(10)
  line(85,-30,23,-24)
  
  // 좌우 귀
  drawEar(-120, 10, 56, 90, faceColor); // 왼쪽 귀
  drawEar(120, 10, 56, 90, faceColor);  // 오른쪽 귀
}

/* 얼굴형 그리기: 타원 + 약간의 턱(하단) 조정으로 자연스러운 얼굴형 */
function drawFaceShape(x, y, w, h, skinColor) {
  push();
  translate(x, y);
  noStroke();
  fill(skinColor);

  // 기본 타원형 얼굴
  ellipse(0, 0, w, h);

  
  // 아래 턱을 약간 각지게 만들기 위해 삼각형형 음영으로 모양 수정
  // 투명한 같은 색으로 덧그려 자연스럽게 보정
  beginShape();
  // 왼쪽 아래
  vertex(-w * 0.28, h * 0.35);
  // 아래 중앙(턱 끝)
  vertex(0, h * 0.55);
  // 오른쪽 아래
  vertex(w * 0.28, h * 0.35);
  // 위로 올라가며 얼굴과 이어짐
  vertex(w * 0.28, h * 0.2);
  vertex(-w * 0.28, h * 0.2);
  endShape(CLOSE);
  
  rect(-35,100,70)
  
  fill(100)
  rect(-100,150,200,100)
  ellipse(90,224,150)
  ellipse(-90,224,150)
  
  fill(255, 205, 170)
  arc(0,150,100,70,0,PI)
  
  fill(255, 182, 160)
  ellipse(70,50,50,25)
  ellipse(-70,50,50,25)
  
  //눈
  fill(1000)
  arc(-50,0,50,25,PI,0)
  arc(-50,0,50,30,0,PI)
  
  arc(50,0,50,25,PI,0)
  arc(50,0,50,30,0,PI)

  noFill()
  stroke(0)
  arc(-50,0,50,25,PI,0)
  arc(50,0,50,25,PI,0)
  
  fill(0)
  ellipse(-45,2,20,25)
  ellipse(45,2,20,25)
  
  
  strokeWeight(1)
  fill(1000)
  ellipse(-50,0,7)
  ellipse(-42,10,7)
  ellipse(39,0,7)
  ellipse(47,10,7)

  fill(0)
  triangle(-80,-20,-70,-8,-65,-10);
  triangle(80,-20,70,-8,65,-10);
  triangle(-70,-20,-65,-10,-60,-12);
  triangle(70,-20,65,-10,60,-12);
  
  //입
  noFill()
  stroke(0)
  strokeWeight(2)
  arc(0,80,70,20,0,PI)
  
  strokeWeight(1)
  arc(0,95,10,5,170,160)


  stroke(192, 192, 192)
  strokeWeight(3)
  arc(0,150,70,80,0,PI)
  
  fill(192,192,192)
  ellipse(0,190,10)
  //코
  let inner = color(
    red(skinColor) - 12,
    green(skinColor) - 6,
    blue(skinColor) - 6,
    220
  );
  fill(inner);

noStroke()
strokeWeight(2);
triangle(0,12,-15,60,10,60);
  stroke(0)
  strokeWeight(1)
  line(0,12,-15,60)
  line(-15,60,10,60)
  
  strokeWeight(1.5)
  line(-5,50,-5,50)
  

  

  pop();
}


/* 귀 그리기: 얼굴에 자연스럽게 붙도록 내부 플랩(귀구멍) 포함 */
function drawEar(cx, cy, w, h, skinColor) {
  push();
  translate(cx, cy);
  noStroke();

  // 바깥 귀 윤곽 (약간 타원 뒤틀림)
  fill(skinColor);
  push();
  // 귀의 기울기 효과를 위해 rotate 사용
  if (cx < 0) rotate(radians(-8)); else rotate(radians(8));
  ellipse(0, 0, w, h);
  pop();

  // 귀 안쪽 음영 (조금 더 어두운 색으로 깊이감)
  let inner = color(
    red(skinColor) - 12,
    green(skinColor) - 6,
    blue(skinColor) - 6,
    220
  );
  fill(inner);

  push();
  if (cx < 0) rotate(radians(-8)); else rotate(radians(8));
  // 귀 안쪽 타원 (작게, 약간 아래쪽에 위치)
  ellipse(0, -6, w * 0.55, h * 0.5);
  pop();

  // 귀곽선 강조 (연한 선)
  stroke(180, 130, 110);
  strokeWeight(1.4);
  noFill();
  push();
  if (cx < 0) rotate(radians(-8)); else rotate(radians(8));
  // 바깥 곡선 따라 반 투명한 선
  beginShape();
  


  endShape();
  pop();

  noStroke();
  pop();
}

