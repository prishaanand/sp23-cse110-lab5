// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  //set default horn, image and audio values 
  let currHorn = document.getElementById("horn-select");
  let currImage = document.querySelector('img[src="assets/images/no-image.png"]');
  let currAudio = document.querySelector('audio[class="hidden"]'); 

  //change image & audio based on selected value 
  currHorn.addEventListener('change', switchHorn);

  function switchHorn(event) {
    
    //air horn
    if (event.target.value == "air-horn"){
      currImage.src = "assets/images/air-horn.svg";
      currAudio.src = "assets/audio/air-horn.mp3";
    } 

    //car horn
    else if (event.target.value == "car-horn") {
      currImage.src = "assets/images/car-horn.svg";
      currAudio.src = "assets/audio/car-horn.mp3";
    } 
    
    //party horn
    else if (event.target.value == "party-horn") {
      currImage.src = "assets/images/party-horn.svg";
      currAudio.src = "assets/audio/party-horn.mp3";
    } 
    
    //nothing selected -- default
    else {
      currImage.src = "assets/images/no-image.png"
    }

  }
  
  //changing volume (set icon & audio)
  let volControl= document.getElementById('volume-controls');
  let volImage = document.querySelector('img[src="assets/icons/volume-level-2.svg"]');
  volControl.addEventListener('input', changeVol);

  function changeVol(event) {

    // - zero volume = show mute icon, level 0
    if (event.target.value == 0) {
      volImage.src = "assets/icons/volume-level-0.svg";
    } 
    // - 1 to <33 volume = first volume level 
    else if (event.target.value >= 1 &&  event.target.value < 33) {
      volImage.src = "assets/icons/volume-level-1.svg";
    } 
    // - 33 to < 67 = second volume level 
    else if (event.target.value >= 33 && event.target.value < 67) {
      volImage.src = "assets/icons/volume-level-2.svg";
    } 

    // - 67+ = thrid volume level
    else if (event.target.value >= 67) {
      volImage.src = "assets/icons/volume-level-3.svg";
    } 

    //note: volume default is not out of 100
    currAudio.volume = event.target.value / 100;

  }

  //play sound button 
  // -- want correct sound to play 
  // -- shoot out confetti for party horn 



}