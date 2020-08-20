const main = document.querySelector('main');
const voiceSelect = document.getElementById('voices');
const textArea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
    {
        image: './assets/baby.jpg',
        text: 'I want to sleep more'
    },
    {
        image: './assets/butterfly.jpg',
        text: 'I want to fly high'
    },
    {
        image: './assets/dog.jpg',
        text: 'I need some fresh air'
    },
    {
        image: './assets/squirrel.jpg',
        text: 'I am starving'
    },
    {
        image: './assets/baby.jpg',
        text: 'I want to sleep more'
    },
    {
        image: './assets/butterfly.jpg',
        text: 'I want to fly high'
    },
    {
        image: './assets/dog.jpg',
        text: 'I need some fresh air'
    },
    {
        image: './assets/squirrel.jpg',
        text: 'I am starving'
    },  
    {
        image: './assets/baby.jpg',
        text: 'I want to sleep more'
    },
    {
        image: './assets/butterfly.jpg',
        text: 'I want to fly high'
    },
    {
        image: './assets/dog.jpg',
        text: 'I need some fresh air'
    },
    {
        image: './assets/squirrel.jpg',
        text: 'I am starving'
    },
]

data.forEach(createBox);

// create speech box
function createBox(data) {
    const box = document.createElement('div');
    console.log(data)
    const {image, text} = data;
    box.classList.add('box'); 
    box.innerHTML = `<img src="${image}" /><p class="info"> ${text}</p>`

    // @todo- speak event
    box.addEventListener('click', () => {
        setTextMessage(text);
        speakText;
        // add active effect
        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 800)
    })

    main.appendChild(box)
}

// initi speech
const message = new SpeechSynthesisUtterance();
// Store voices
let voices = [];

function getVoices() {
    voices = speechSynthesis.getVoices();
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;

        voiceSelect.appendChild(option)
    } )
}

// Set text
function setTextMessage(text) {
    message.text = text
}

// speak text
function speakText() {
    speechSynthesis.speak(message)
}

// Voices changes 
speechSynthesis.addEventListener('voiceschanged', getVoices )
// Toggle text box
toggleBtn.addEventListener('click', () => 
    document.getElementById('text-box').classList.toggle('show')
)

// close btn 
closeBtn.addEventListener('click', () => 
    document.getElementById('text-box').classList.remove('show')
)

getVoices();