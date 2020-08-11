const main = document.querySelector('main');
const voiceSelect = document.getElementById('voices');
const textArea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
    {
        image: './assets/baby.jpg',
        text: 'I want to more sleep'
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
        text: 'I want to more sleep'
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
    },  {
        image: './assets/baby.jpg',
        text: 'I want to more sleep'
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

    main.appendChild(box)
}

// Toggle text box
toggleBtn.addEventListener('click', () => 
    document.getElementById('text-box').classList.toggle('show')
)

// close btn 
closeBtn.addEventListener('click', () => 
    document.getElementById('text-box').classList.remove('show')
)