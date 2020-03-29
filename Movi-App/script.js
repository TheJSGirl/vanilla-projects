const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');

// select movie
const moviSelected = document.getElementById('movie');

// movie price
let ticketPrice = +moviSelected.value;

// update total count and total price
const updateCountAndTicket = () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  count.innerHTML = selectedSeats.length;
  total.innerHTML = ticketPrice * selectedSeats.length;
}

//add event listener on change
moviSelected.addEventListener('change', () => {
  ticketPrice = +moviSelected.value;
  updateCountAndTicket();
})
// add event listener
container.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log(e.target.classList.contains('seat'))
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    const seat = e.target;
    // seat.className = 'seat occupied';
    e.target.classList.toggle('selected');
    updateCountAndTicket();
  }
})