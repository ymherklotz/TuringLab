// global variables

// tile size for the game
var tile_size;

// player
var frog;

// lanes
var road;
var river;

// score
var score;

// check game over
var game_over;

// functions

function setup()
{
    noStroke();

    // initialize variables
    tile_size=50;
    road=[];
    river=[];
    game_over=false;
    score=0;

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
    background("#2f2f2f");

    // draws the road
    fill(127);
    rect(0, 7*tile_size, width, 5*tile_size);
    
    // draw the river
    fill("#3498dc");
    rect(0, tile_size, width, 5*tile_size);

    for(var i=0; i<road.length; i++)
    {
        if(frog.intersect(road[i]))
        {
            game_over=true;
        }
        
        road[i].move(width);
        road[i].draw();
    }

    var touch_log=false;

    for(var i=0; i<river.length; i++)
    {
        if(frog.intersect(river[i]))
        {
            frog.x+=river[i].speed;
            touch_log=true;
        }
        
        river[i].move(width);
        river[i].draw();
    }

    if(!touch_log && frog.intersectCoord(0, tile_size, width, 5*tile_size))
    {
        game_over=true;
    }

    if(frog.intersectCoord(0, 0, width, tile_size))
    {
        frog.resetPosition();
        score+=100;
    }

    // draw score
    fill("#8f8f8f");
    textSize(30);
    textAlign(LEFT, CENTER);
//    text("Score: "+score, 0, 14*tile_size);

    frog.draw();

    if(game_over)
    {
        fill(255, 0, 0);
        textSize(75);
        textAlign(CENTER, CENTER);
        textStyle(BOLD);
        text("Game Over!", width/2, height/2);
        noLoop();
    }
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
