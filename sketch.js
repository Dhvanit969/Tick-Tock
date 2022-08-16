
  var hr,mn,sc;
  var hrAngle , mnAngle, scAngle;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw(){
  background(0);

  //Translation and rotation
  translate(200,200)
  rotate(-90)

  //calculating time using predefined func from p5.js
    hr = hour();
    mn = minute();
    sc = second();

    //To create ab interative rotation 
    scAngle = map(sc,0,60,0,360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

    //drawing second hand
    push();
    rotate(scAngle)
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    //drawing mins hand
    push();
    rotate(mnAngle)
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    //drawing hour hand
    push();
    rotate(hrAngle)
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(10);
    noFill();
    //Seconds
    stroke(255,0,0);
    arc(0,0,300,300,0,scAngle);
    //minutes
    stroke(0,255,0)
    arc(0,0,280,280,0,mnAngle);
    //hour
    stroke(0,0,255)
    arc(0,0,260,260,0,hrAngle)
}