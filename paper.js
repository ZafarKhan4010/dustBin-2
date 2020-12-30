class Paper {
  constructor(x, y,r) {
    var options = {
      
        'restitution':0.5,
        'friction':0.5,
        'density':1.12
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r/2,options);
    var options={
      isStatic:true
     
      
    }

    this.image=loadImage("paper.png");
    
    World.add(world, this.body);
  }
  display(){
    var paperPos =this.body.position;
    
     
       
   
    var paperPos = this.body.position;
    push();
    translate(paperPos.x, paperPos.y);
    rectMode(CENTER);
   
    imageMode(CENTER);
    image(this.image,0,0,60,60);
   
    pop();       
  
  
  }
};
