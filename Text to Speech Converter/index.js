let btn= document.querySelector("button");
let text=document.querySelector("textarea");

//logic for text to voice
let speech= new SpeechSynthesisUtterance(); //ye ek instance of object return karega 

function listen(){
    speech.text=text.value;
    window.speechSynthesis.speak(speech);
}

//logic for options for voices
let voicesselect=document.getElementById("select");
let voices=[];

window.speechSynthesis.onvoiceschanged=()=>{
voices= window.speechSynthesis.getVoices(); //it will all the voices avaliable on the device
speech.voice=voices[0]; //by default it will speak into first voice available on device

voices.forEach((voice,i)=>{
    voicesselect.options[i]=new Option(voice.name,i);  //this will set new voice on voice change
});
};

voicesselect.addEventListener("change",()=>{
    speech.voice=voices[voicesselect.value];
});

