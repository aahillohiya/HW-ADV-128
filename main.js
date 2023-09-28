song = "";
song1 = "";
right_wrist_X = "";
left_wrist_X = "";
right_wrist_Y = "";
left_wrist_Y = "";

function preload() {
    song = loadSound("music.mp3");
    song1 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(500,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}


function draw() {
  image(video,0,0,500,500);
}

function SONG_NAME() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded() {
    console.log("Model is Loaded");    
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        right_wrist_X = results[0].pose.rightWrist.x ; 
        right_wrist_Y = results[0].pose.rightWrist.y ;
        left_wrist_X = results[0].pose.leftWrist.x ;
        left_wrist_Y = results[0].pose.leftWrist.y ;

        console.log("Right Wrist X",right_wrist_X,"Right Wrist Y",right_wrist_Y,"Left Wrist X",left_wrist_X,"Left Wrist Y",left_wrist_Y);
}
}
