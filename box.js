
class Box {
  constructor(x, y,width,height) {
    var options = {
     isStatic:true
    }
    this.body = Bodies.rectangle(x, y, 20,120, options);
    this.width = 20
    this.height = 120
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill('violet');
    strokeWeight(4)
    stroke("blue")
    rect(0, 0, this.width, this.height);
    pop();
  }
};




















zzzz
    