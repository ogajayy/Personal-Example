

 var bubbles = [];

function setup() {
  createCanvas(1366,768);
  for (var i = 0; i< 500; i++) {
    bubbles[i] = new Bubble();
      /*contructor function naming conventionally...start with a capital as in
      "Bubble"...
      "new" operator invokes the constructor function
      return is unspoken*/
    }
  }

  function draw() {
    //background(255);
    for (var i = 0; i < bubbles.length; i++) {
      bubbles[i].move();
      bubbles[i].display();
    }
  }


function Bubble() {
  this.x = random(0, width);
  this.y = random(0,height);

  this.display = function (){
    stroke(255);
    noFill();
    ellipse(this.x,this.y, 25,25);
  }

  this.move = function(){
    this.x = this.x + random (-2,2);
    this.y = this.y + random (-2,2);
  }
}
