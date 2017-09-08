/* eslint-disable no-unused-vars */

// Inititalize the seconds to zero and other variables here
var seconds = 0;
var $time = document.querySelector('#time')
var $start = document.querySelector('#start')

function up() {
  seconds++
  console.log(seconds)
}

function changeSeconds() {
  $time.textContent = seconds
}

$start.addEventListener('click', function() {
  setInterval(up, 1000)
  setInterval(changeSeconds, 1000)
})
