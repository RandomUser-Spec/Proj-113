function preload()
{

}

function setup()
{
    canvas = createCanvas(600, 600);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function take_snapshot(){
    save('birthday gift');
}

function draw()
{
    image(video, 200, 150, 200, 200);
    fill("cyan");
    stroke("black");
    circle(30, 30, 50);
    circle(565, 30 , 50)
    circle(565, 565, 50)
    circle(31, 565, 50)
    rect(52, 20, 490, 20)
    rect(20, 54, 20, 490)
    rect(555, 54, 20, 490)
    rect(52, 555, 490, 20)
}