
function setup() {
        var cnv = createCanvas(500, 500);
        var x = (windowWidth - width) / 2;
        var y = (windowHeight - height) / 2;
        cnv.position(x, y);
        background(255, 0, 200);
      }
function draw(){
    noStroke();
    fill(150); 
    ellipse(mouseX, mouseY, 60, 60);
}