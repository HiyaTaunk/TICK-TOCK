var hr,mn,sc;
var hrangle, mnangle, scangle;

function setup(){
  createCanvas(400,400);
angleMode (DEGREES);
}

function draw(){
  background(0);
translate (200,200);
rotate (-90);
hr = hour();
mn = minute();
sc = second();
mnangle = map(mn,0,60,0,360);
scangle = map(sc,0,60,0,360);
hrangle = map(hr%12,0,12,0,360);
push();
rotate(scangle); //rotate the hand based on angle calculated
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop()

//drawing mins hand
push();
rotate(mnangle);
stroke(0,255,0);
strokeWeight(7);
line(0,0,75,0);
pop()

//drawing hr hand
push();
rotate(hrangle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,50,0);
pop()

stroke(0);
point(0,0)

//drawing the arcs
strokeWeight(10);
noFill();
//Seconds
stroke("white");
arc(0,0,300,300,0,scangle);
//Minutes
stroke("white");
arc(0,0,280,280,0,mnangle);
//Hour
stroke("white");
arc(0,0,260,260,0,hrangle);
}
