'use strict';

//sabse pehle score 0 karte hai
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
let playing = true;
score0El.textContent = 0;
score1El.textContent = 0;

//dice htaate hai ab
const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
//dice ko roll karna hai ab
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    //button roll hone laga ab jo button no. aaeha wo show karana hai
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //current score show karana hai
    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;

      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
});
const scores = [0, 0];
const btnHold = document.querySelector('.btn--hold');
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 30) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
});
/*btnNew.addEventListener('click', function () {
  playing = true;
  diceEl.classList.add('hidden');
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
});
*/
