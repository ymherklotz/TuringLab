// global variables

// tile size for the game
var tile_size;

// player
var frog;

// lanes
var road;
var river;

// functions

function setup()
{
    noStroke();

    // initialize variables
    tile_size=50;
    road=[];
    river=[];

    // create the canvas with the right dimensions
    createCanvas(16*tile_size, 15*tile_size);

    frog=new Frog(width/2-tile_size/2, height-3*tile_size, tile_size, tile_size);

    for(var i=0; i<2; i++)
    {
        road.push(new Car(width+tile_size*i*random(5, 12), 11*tile_size, 3*tile_size, tile_size, -5));
        road.push(new Car(width+tile_size*i*random(3, 14), 10*tile_size, 2*tile_size, tile_size, -3));
        road.push(new Car(-tile_size*i*random(5, 18), 9*tile_size, 1*tile_size, tile_size, 3));
        road.push(new Car(-tile_size*i*random(5, 12), 8*tile_size, 3*tile_size, tile_size, 4));
        road.push(new Car(width+tile_size*i*random(5, 12), 7*tile_size, 4*tile_size, tile_size, -4));
    }

    for(var i=0; i<2; i++)
    {
        river.push(new Log(-tile_size*i*random(7, 15), 5*tile_size, 6*tile_size, tile_size, 2));
        river.push(new Log(-tile_size*i*random(8, 15), 4*tile_size, 7*tile_size, tile_size, 3));
        river.push(new Log(width+tile_size*i*random(5, 15), 3*tile_size, 4*tile_size, tile_size, -2));
        river.push(new Log(-tile_size*i*random(4, 15), 2*tile_size, 3*tile_size, tile_size, 1));
        river.push(new Log(width+tile_size*i*random(6, 15), tile_size, 5*tile_size, tile_size, -3));
    }
}

function draw()
{
    background(0);

    // draws the road
    fill(127);
    rect(0, 7*tile_size, width, 5*tile_size);
    
    // draw the river
    fill(0, 0, 255);
    rect(0, tile_size, width, 5*tile_size);

    for(var i=0; i<road.length; i++)
    {
        if(frog.intersect(road[i]))
        {
            gameOver();
        }
        
        road[i].move(width);
        road[i].draw();
    }

    for(var i=0; i<river.length; i++)
    {
        if(frog.intersect(river[i]))
        {
            frog.x+=river[i].speed;
        }
        
        river[i].move(width);
        river[i].draw();
    }
    
    frog.draw();
}

function gameOver()
{
    noLoop();
}

function keyPressed()
{
    if(keyCode===UP_ARROW)
    {
        frog.moveUp();
    }
    else if(keyCode===RIGHT_ARROW)
    {
        frog.moveRight();
    }
    else if(keyCode===DOWN_ARROW)
    {
        frog.moveDown();
    }
    else if(keyCode===LEFT_ARROW)
    {
        frog.moveLeft();
    }
}
