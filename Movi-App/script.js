const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');


// select movie
const moviSelected = document.getElementById('movie');

// movie price
const ticketPrice = +moviSelected.value;


// add event listener
container.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log(e.target.classList.contains('seat'))
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    const seat = e.target;
    // seat.className = 'seat occupied';
    e.target.classList.toggle('selected');
  }
})