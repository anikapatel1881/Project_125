//Variables to set the nose position
var noseX = 0;
var noseY = 0;

//Variables to change the size of the square
var difference = 0;
var rightWristX = 0;
var leftWristX = 0;

function setup(){
    //Add code for accessing the webcam
    video = createCapture(VIDEO);
    //Give the size to the webcam
    video.size(500, 500);
    video.position(150, 100);

    //Add code for creating the canvas
    canvas = createCanvas(500, 350);
    canvas.position(700, 150);

    //Add code for initilizing posenet
    poseNet = ml5.poseNet(video, modelLoaded);
    //Add code for executing posenet
    poseNet.on("pose", gotPoses);
}

function draw(){
    //Color for rectangle
    fill("#FFA500")

    //Code for rectangle
    square(noseX, noseY, difference);
}

//Define modelLoaded
function modelLoaded(){
    console.log("poseNet is AMAZING! Keep trying your best!");
}

//Define gotPoses
function gotPoses(results){
    if(results.length > 0){

        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        difference = floor(leftWristX - rightWristX);
    }
}