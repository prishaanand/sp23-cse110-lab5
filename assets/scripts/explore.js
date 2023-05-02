// explore.js

//ISSUE: the voices are not loading! 

window.addEventListener('DOMContentLoaded', init);

function init() {

  // set up variables 
  const inputText = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const voiceSelect = document.getElementById('voice-select');
  const faceImg = document.querySelector('img[alt="Smiling face"]');

  // load all available synth languages in drop down
  const synth = window.speechSynthesis; 
  function populateVoiceList() {
    const voices = synth.getVoices();
    for (let i  = 0; i < voices.length(); i++){

      // create new dropdown option for each lang
      let option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('value', i);

      // if (voices[i].default) {
      //   option.textContent += " — DEFAULT";
      // }
  
      // option.setAttribute("data-lang", voices[i].lang);
      // option.setAttribute("data-name", voices[i].name);
      
      voiceSelect.appendChild(option);

    }
  }
  populateVoiceList(); 

  // update current voice 
  // const textVoice = new speechSynthesisUtterance();
  // voiceSelect.addEventListener('change', () => {
  //   const element = voiceSelect.value;
  //   const voices = synth.getVoices();
  //   const selectecVoice = voices[element];
  //   textToSpeack.voice = selectecVoice;
  // });

  // speak in selected lang
  // speakButton.addEventListener('click', () => {
  //   textVoice.text = inputText.value;
  //   const voices = synth.getVoices();
  //   const selectedVoice = voices[voiceSelect.value];
  //   textVoice.voice = voiceSelect;
  //  synth.speak(textVoice);
  //   // swap face to open mouth only when speaking
  //   faceImg.src = 'assets/images/smiling-open.png';
  // });

  // // change face back to closed 
  // textVoice.addEventListener('done', () => {
  //   emoji.src = 'assets/images/smiling.png';
  // });

}