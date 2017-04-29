function Car(x, y, width, height, speed)
{
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.speed=speed;
    this.color=color(random(127, 255), random(127, 255), random(127, 255));

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
        var front_size=70;
        fill(this.color);

        if(speed>0)
        {
            rect(this.x, this.y+5, this.width-front_size/2, this.height-10);
            arc(this.x+this.width-front_size/2, this.y+this.height/2, front_size, this.height-10, -HALF_PI, HALF_PI);
        }
        else
        {
            rect(this.x+front_size/2, this.y+5, this.width-front_size/2, this.height-10);
            arc(this.x+front_size/2, this.y+this.height/2, front_size, this.height-10, HALF_PI, -HALF_PI);
        }
    }
}
