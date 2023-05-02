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
  // - zero volume = show mute icon, level 0
  // - 1 to <33 volume = first volume level 
  // - 33 to < 67 = second volume level 
  // - 67+ = thrid volume level
  // note: volume is not out of 100 

  //play sound button 
  // -- want correct sound to play 
  // -- shoot out confetti for party horn 



}