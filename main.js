Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach(' #camera ');
function take_snapshot(){
Webcam.snap(function(datamurli){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+ datamurli+'"/>';
});
}
console.log("ml5 version",ml5.version);
smashifier=ml5.imageClassifier("https://storage.googleapis.com/tm-model/G924tnGJF/model.json",modelmoaded);
function modelmoaded(){
    console.log("mmmodelnodednonono");
}
punchcrunch=""
punchmunch=""
function speak(){
    var kukookukoo=window.speechSynthesis;
    speak_data1="my prediction is that you are"+punchcrunch;
    speak_data2="my prediction is that you are"+punchmunch;
     var huhuhu=new SpeechSynthesisUtterance(speak_data1+speak_data2);
kukookukoo.speak(huhuhu);
}
function check(){
    img=document.getElementById("captured_image");
    smashifier.classify(img,gottesult);
}
function gottesult(error,results){
if (error) {
    console.error(error);
}else{
    console.log(results);
document.getElementById("result_emotion_name").innerHTML=results[0].label;
document.getElementById("result_emotion_name2").innerHTML=results[1].label;
speak();
punchcrunch=results[0].label;
punchmunch=results[1].label;
if (results[0].label=="happy") {
   document.getElementById("update_emoji").innerHTML="&#128518;";
}
if (results[0].label=="sad") {
    document.getElementById("update_emoji").innerHTML="&#128546;";
}
if (results[0].label=="angry") {
    document.getElementById("update_emoji").innerHTML="&#129324;";
}
if (results[1].label=="happy") {
    document.getElementById("update_emoji2").innerHTML=" &#128518;";
}
if (results[1].label=="sad") {
    document.getElementById("update_emoji2").innerHTML="&#128546;";
}
if (results[1].label=="angry") {
    document.getElementById("update_emoji2").innerHTML="&#129324;";
}
}
}