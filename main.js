
noseX=0;
noseY=0;
function preload(){
    nose=loadImage("https://i.postimg.cc/FKv41qTg/clipart-mustache-brown-8-removebg-preview.png")
    
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide()
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes)
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }
    
    
    }
    function modelloaded(){
            console.log("model has been initialized")}
function draw(){
    image(video,0,0,500,500)
    image(nose,noseX-69,noseY-30,150,100)
}
function take_snapshot(){
    save ("my_snapshot.jpg")
}