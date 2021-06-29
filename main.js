Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 110
});
camera = document.getElementById("camera");
Webcam.attach(camera); 

function takeSnap() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="img_captured" src="'+ data_uri +'"/>';
    });
}  
console.log("ml5 Version : ", ml5.version);
ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ze3cOaLLm/model.json",model_loaded);

function model_loaded() {
    console.log("Model loaded successfully !!")
}