function Frog(x, y, size)
{
    // setup basic frog member variables
    this.x=x;
    this.y=y;
    this.size=size

    // member functions
    this.draw=function()
    {
        fill(255, 0, 0);
        rect(this.x+10, this.y+10, this.size-20, this.size-20);
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
    }

    this.moveRight=function()
    {
        this.x+=this.size;
    }

    this.moveDown=function()
    {
        this.y+=this.size;
    }

    this.moveLeft=function()
    {
        this.x-=this.size;
    }    
}
