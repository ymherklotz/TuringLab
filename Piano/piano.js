var MouseX=null
var osc
var frequencies =[
261.63,293.66,329.63,349.23,392,440,493.88,523.25
]
function setup() {
  createCanvas(400, 400);
	osc = new p5.Oscillator()
	osc.setType("sine")
	osc.amp(0)
	osc.freq(440)
	osc.start()
}

function draw() {
  background(220);
	for(i=0;i<8;i=i+1){
		if(mouseIsPressed){
			osc.amp(0.5,0.05)
			if(mouseX>i*400/8 && mouseX<i*400/8+400/8){
		fill(255,0,255)
				osc.freq(frequencies[i])
				}
			else{
			fill(255)
			}
		}
			else{
				osc.amp(0,0.05)
			fill(255)
		}
	rect(i*400/8,0,400/8,400)
	}
	
}

function mousePressed(){
	MouseX = mouseX
}
