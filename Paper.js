class Paper
{
     constructor(x,y,width,height)
     {
         var options = 
         {
              isStatic:false,
              restitution:0.3,
              //friction:0.2,
              density:1.2
         }
         this.body = Bodies.rectangle(x,y,width,height,options);
         this.image = loadImage("paper.png");
         this.w = width
         this.h = height
         World.add(world,this.body);
     }

     display()
     {
          imageMode(CENTER);
          image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
          
     }
}