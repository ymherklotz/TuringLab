function Car(x, y, width, height, speed)
{
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.speed=speed;
    this.color=getColour(random(3));

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
            fill("#9bbEe8");
            rectangle(this.x+this.width-30, this.y+this.height/2-15, this.x+this.width-30, this.y+this.height/2+15, this.x+this.width-20, this.y+this.height/2-7, this.x+this.width-20, this.y+this.height/2+7);
        }
        else
        {
            rect(this.x+front_size/2, this.y+5, this.width-front_size/2, this.height-10);
            arc(this.x+front_size/2, this.y+this.height/2, front_size, this.height-10, HALF_PI, -HALF_PI);
            fill("#9bbEe8");
            rectangle(this.x+30, this.y+this.height/2-15, this.x+30, this.y+this.height/2+15, this.x+20, this.y+this.height/2-7, this.x+20, this.y+this.height/2+7);
        }
    }
}

function rectangle(x1, y1, x2, y2, x3, y3, x4, y4)
{
    triangle(x1, y1, x2, y2, x3, y3);
    triangle(x2, y2, x3, y3, x4, y4);
}

function getColour(number)
{
    if(int(number)===0)
    {
        return color("#ff6868");
    }
    else if(int(number)===1)
    {
        return color("#688dff");
    }

    return color("#529e37");
}
