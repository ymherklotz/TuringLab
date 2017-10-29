const SPEED = 8

function Ball(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.colour = color("red");

    this.speed = {x: randomSign()*random(3, 8), y: 0};
    this.speed.y = randomSign()*sqrt(SPEED*SPEED - this.speed.x*this.speed.x);
    
    this.draw = function() {
        fill(this.colour)
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    this.move = function() {
        this.x += this.speed.x;
        this.y += this.speed.y;

        if(this.y + this.diameter/2 > width || this.y - this.diameter/2 < 0) {
            this.speed.y = -this.speed.y;
        }
    }

    this.intersects = function(paddle) {
        if(this.x + this.diameter/2 > paddle.x &&
           this.x - this.diameter/2 < paddle.x + paddle.width &&
           this.y + this.diameter/2 > paddle.y &&
           this.y - this.diameter/2 < paddle.y + paddle.height) {
            speedSign = -this.speed.x/abs(this.speed.x);
            this.speed.y = ((ball.y - paddle.y) / paddle.height - 0.5) * 8;
            this.speed.x = speedSign*sqrt(SPEED*SPEED - this.speed.y*this.speed.y);
        }
    }
}

function Paddle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colour = color("blue");
    this.speed = 10;

    this.draw = function() {
        fill(this.colour)
        rect(this.x, this.y, this.width, this.height);
    }

    this.moveUp = function() {
        this.y -= this.speed;
    }

    this.moveDown = function() {
        this.y += this.speed;
    }
}

var ball;

function setup() {
    createCanvas(800, 800);
    ball = new Ball(width/2, height/2, 30);
    paddle1 = new Paddle(25, 0, 15, 125);
    paddle2 = new Paddle(width - 35, 0, 15, 125);
}

function draw() {
    background(47);
    ball.move();

    if(keyIsDown(UP_ARROW)) {
        paddle2.moveUp();
    } else if(keyIsDown(DOWN_ARROW)) {
        paddle2.moveDown();
    }
    if(keyIsDown(87)) {
        paddle1.moveUp();
    } else if(keyIsDown(83)) {
        paddle1.moveDown();
    }

    ball.intersects(paddle1);
    ball.intersects(paddle2);
    
    drawAll();
}

function drawAll() {
    ball.draw();
    paddle1.draw();
    paddle2.draw();
}

function randomSign() {
    return round(random(0, 1))*2-1;
}
