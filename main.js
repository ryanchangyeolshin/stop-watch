/* eslint-disable no-unused-vars */

// Inititalize the seconds to zero and other variables here
var seconds = 0;
var $time = document.querySelector('#time')
var $start = document.querySelector('#start')

// This variable is a boolean to see if the addEventListener for the start
// button has been pressed
var pressedStart = false

function start() {
  setInterval(function() {
    seconds++
    renderTime()
  }, 1000)
}

function renderTime() {
  $time.textContent = seconds
}

$start.addEventListener('click', function(e) {
  if (!pressedStart) {
    start()
  }
  pressedStart = true
})
