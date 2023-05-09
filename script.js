let button = document.getElementById('speak');
let keycode = 13;
button.addEventListener('click', (event) => {
    // if (event.keyCode === 13) {
    console.log("it works");
    let msg = document.getElementById('myText').value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = msg;
    speech.rate = .9;
    speech.pitch = 1;
    
    if (msg == "") {
        speech.text = "Please Type Some Text";
        window.speechSynthesis.speak(speech);
    }
    else {
        window.speechSynthesis.speak(speech);
    }
    // }
})

