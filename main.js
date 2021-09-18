var speechrecognition = window.webkitspeechrecognition;

var recognition = new speechrecognition();

function start()

{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresults = function run (Event){
console.log(Event);

var content = Event.results[0] [0].transcript;
console.log(content);

document.getElementById("textbox").innerHTML = content;
console.log(content);
  speak();
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").value;

    var utterthis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis);
    Webcam.attach(camera)
}
 
Webcam.set({
width:360
height:250,
image_format : 'png',
png_quality:90
})
camera = document.getElementById("camera");