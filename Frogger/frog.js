var direction={
    UP: 0,
    RIGHT: 1,
    DOWN: 2,
    LEFT: 3,
};

function Frog(x, y, size)
{   
    // setup basic frog member variables
    this.x=x;
    this.y=y;
    this.size=size;
    this.direction=direction.UP;

    // member functions
    this.draw=function()
    {
        fill(255, 0, 0);
        // body
        rect(this.x+this.size*3/10, this.y+this.size*2/5, this.size*2/5, this.size/5);
        ellipse(this.x+this.size/2, this.y+this.size*2/5, this.size*2/5, this.size*3/5);
        ellipse(this.x+this.size/2, this.y+this.size*3/5, this.size*2/5, this.size/5);
        // legs
        drawRectangle(this.x+this.size/2, this.y+this.size/2, this.x+this.size/2, this.y+this.size/2+10, this.x+10, this.y+this.size-10);
        drawRectangle(this.x+this.size/2, this.y+this.size/2, this.x+this.size/2, this.y+this.size/2+10, this.x+this.size-10, this.y+this.size-10);
        drawRectangle(this.x+10, this.y+15, this.x+13, this.y+this.size-15, this.x+10, this.y+this.size-10);
        drawRectangle(this.x+this.size-10, this.y+15, this.x+this.size-13, this.y+this.size-15, this.x+this.size-10, this.y+this.size-10);
        // eyes
        fill(0);
        ellipse(this.x+21, this.y+17, 3);
        ellipse(this.x+29, this.y+17, 3);
    }

    this.intersect=function(object)
    {
        if(this.x+this.size/2>object.x && this.x+this.size/2<object.x+object.width &&
           this.y+this.size/2>object.y && this.y+this.size/2<object.y+object.height)
        {
            return true;
        }

        return false;
    }

    this.intersectCoord=function(x, y, width, height)
    {
        if(this.x+this.size/2>x && this.x+this.size/2<x+width &&
           this.y+this.size/2>y && this.y+this.size/2<y+height)
        {
            return true;
        }

        return false;
    }

    this.moveUp=function()
    {
        this.y-=this.size;
        this.direction=direction.UP;
    }

    this.moveRight=function()
    {
        this.x+=this.size;
        this.direction=direction.RIGHT;        
    }

    this.moveDown=function()
    {
        this.y+=this.size;
        this.direction=direction.DOWN;
    }

    this.moveLeft=function()
    {
        this.x-=this.size;
        this.direction=direction.LEFT;
    }    
}

function drawRectangle(x1, y1, x2, y2, x3, y3)
{
    triangle(x1, y1, x2, y2, x3, y3);
    triangle(x1, y1, x3, y3, x1-x2+x3, y1+y3-y2)
}
