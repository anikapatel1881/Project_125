var noseX = 0;
var noseY = 0;

var distance = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(150, 100);

    canvas = createCanvas(500, 350);
    canvas.position(700, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    fill("#FFA500")

    square(nosex, noseY, distance);
}

function modelLoaded(){
    console.log("poseNet is AMAZING! Keep trying your best!");
}

function gotPoses(){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWristX = results[0].pose.leftWristX.x;
        rightWristX = results[0].pose.rightWristX.x;

        distance = floor(leftWristX - rightWristX);
    }
}