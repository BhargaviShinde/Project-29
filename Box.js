class Box {
  constructor(x, y, width, height,color){
    
    //this.x = x;
    //this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,{isStatic: false, friction:10, density: 2.5});
    this.color = color;
    World.add(world,this.body);

  }

  display(){
    var pos = this.body.position;
    var color = this.color;
    rectMode(CENTER);
    fill(color);
    rect(pos.x,pos.y,this.width,this.height);
  }

}
