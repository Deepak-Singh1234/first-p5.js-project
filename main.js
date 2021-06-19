

function setup(){
    canvas=createCanvas(600,480);
    canvas.position(200,100);
    video=createCapture();
    video.hide();
 
}


function draw(){
    image(video,0,0,500,380);
    r = random(255);
    g = random(255);
    b = random(255);
    fill(r,g,b);
    stroke(r,g,b);
    circle(550,37,70);
    circle(550,190,70);
    circle(550,360,70);
    circle(475,440,70);
    circle(310,440,70);
    circle(135,440,70);

    fill(r,g,b);
    stroke(r,g,b);
    rect(520,80,70,70);
    rect(520,240,70,70);
    rect(520,405,70,70);
    rect(360,405,70,70);
    rect(190,405,70,70);
    rect(7,405,70,70);
  
}

function take_snapshot(){
    save('my_image.png'); 
}
