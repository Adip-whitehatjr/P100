var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition(); 
function start() { 
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start(); }

recognition.onresult = function(event) { 
    console.log(event); 
    var Content = event.results[0][0].transcript; 
    document.getElementById("textbox").innerHTML = Content; 
    console.log(Content);
    if ( Content == "can you take my selfie") {
        console.log("taking selfie--");
        Speak();
    }
}

function Speak() {
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.Speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function (){
        take_snapshot();
        Save();
    } , 5000 );
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_img" src="'+ data_uri +'">';
    });
}
function Save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();
}