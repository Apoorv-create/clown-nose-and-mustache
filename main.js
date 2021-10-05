NoseX =  0;
NoseY =  0;
NosemX = 0;
NosemY = 0;

function preload(){
  clown_nose = loadImage('https://i.postimg.cc/g25GhzPZ/clown-nose.png');
  mustache = loadImage('https://i.postimg.cc/yYhHdmL2/mustache.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modalLoaded)
    poseNet.on('pose', gotPoses)
  }

function modalLoaded(){
    console.log("Modal has been loaded")
  }

function take_snapshot()
{
  save("MyClownnoseimage.png")
}

function gotPoses(results)
{
  if (results.length > 0){
    console.log(results)
    NoseX = results[0].pose.nose.x;
    NoseY = results[0].pose.nose.y;
    NosemX = NoseX - 10;
    NosemY = NoseY + 20;
    console.log("nose x = " + results[0].pose.nose.x)
    console.log("nose y = " + results[0].pose.nose.y)
  }
}

function draw()
{
  image(video, 0, 0, 300, 300);
  image(clown_nose, NoseX, NoseY, 30, 30)
  image(mustache, NosemX, NosemY, 30, 30)
}