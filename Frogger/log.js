function Log(x, y, width, height, speed)
{
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.speed=speed;

    this.move=function(screen_width)
    {
        if(this.speed>0 && this.x>screen_width)
        {
            this.x=-this.width;
        }
        else if(this.speed<0 && this.x<-this.width)
        {
            this.x=this.width+screen_width;
        }
        else
        {
            this.x+=this.speed;
        }
    }

    this.draw=function()
    {
        fill("#5a2a27")
        rect(this.x, this.y+5, this.width, this.height-10);
        ellipse(this.x, this.y+this.height/2, 30, this.height-10);
        ellipse(this.x+this.width, this.y+this.height/2, 30, this.height-10);        
    }
}
