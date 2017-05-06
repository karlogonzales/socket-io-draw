var socket;

function setup() {
    createCanvas(600, 400);
    background(51);
    socket = io.connect(server);
    socket.on('mouse', newDrawing);
}

function draw() {
    mouseDragged();
    noStroke();
    fill(255);
  ellipse(mouseX, mouseY, 36, 36);

}

function mouseDragged() {
    console.log('Sending: ' + mouseX + ', ' + mouseY);

    var data={
        x: mouseX,
        y: mouseY
    }

    socket.emit('mouse', data)
}

function newDrawing(data) {
    noStroke();
    fill(255, 0, 100);
    ellipse(data.x, data.y, 36, 36);
}