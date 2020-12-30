class DustBin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;

      this.image=loadImage("trash-can.png");
      this.image.addScale=9.2;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("violet");
      imageMode(CENTER);
      image(this.image,570,390,220,220);
      
      rect(pos.x, pos.y, this.width, this.height);
    }
  };