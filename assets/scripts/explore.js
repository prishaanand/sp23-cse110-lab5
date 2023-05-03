// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  // set up variables 
  const synth = window.speechSynthesis; 
  const inputText = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const voiceSelect = document.getElementById('voice-select');
  const faceImg = document.querySelector('img[alt="Smiling face"]');

  // load all available synth languages in drop down
  
  function populateVoiceList() {
    const voices = synth.getVoices();
    console.log(voices);
    for (let i  = 0; i < voices.length; i++){

      // create new dropdown option for each lang
      let option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('value', i);
      
      voiceSelect.appendChild(option);

    }
  }
  populateVoiceList(); 

  // update current voice 
  const textToSpeak = new SpeechSynthesisUtterance();
  voiceSelect.addEventListener('change', () => {
    const element = voiceSelect.value;
    const voices = synth.getVoices();
    const selectecVoice = voices[element];
    textToSpeak.voice = selectecVoice;
  });

  // speak in selected lang
  speakButton.addEventListener('click', () => {
    textToSpeak.text = inputText.value;
    const voices = synth.getVoices();
    const selectedVoice = voices[voiceSelect.value];
    textToSpeak.voice = selectedVoice;
    synth.speak(textToSpeak);
    // swap face to open mouth only when speaking
    faceImg.src = 'assets/images/smiling-open.png';
  });

  // change face back to closed 
  textToSpeak.addEventListener('end', () => {
    faceImg.src = 'assets/images/smiling.png';
  });

}