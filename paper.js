class Paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
            density:1.2	,
            friction:0,
            restitution:0.3,
			
        }
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
        this.paper = loadImage("paper.png")
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.paper,0,0,this.w, this.h);
			pop()
			
	}

}