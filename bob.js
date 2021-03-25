class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1.1,
			friction:0.2,
			density:0.6

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		this.image = loadImage("paper.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		
			
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()

			
		
			
	}

}