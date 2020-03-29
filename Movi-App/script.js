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

  // loop over selectedSeats and check the index with existing seats
  const seatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  // set seatIndex in the localstorage
  localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));

  count.innerHTML = selectedSeats.length;
  total.innerHTML = ticketPrice * selectedSeats.length;
}

// save selected movie and price
const setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Get data from local storage and display
const populateUI = () => {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if(selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if(selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    })
  }
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if(selectedMovieIndex !== null) {
    moviSelected.selectedIndex = selectedMovieIndex;
  }
}

// call populated ui for local storage item
populateUI();

//add event listener on change
moviSelected.addEventListener('change', (e) => {
  ticketPrice = +moviSelected.value;
  setMovieData(e.target.value, e.target.selectedIndex);
  updateCountAndTicket();
})
// add event listener
container.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log(e.target.classList.contains('seat'))
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    const seat = e.target;
    // seat.className = 'seat occupied';
    console.log(e.target.classList.toggle('selected'))

    updateCountAndTicket();
  }
})

// intial count and total set

updateCountAndTicket();