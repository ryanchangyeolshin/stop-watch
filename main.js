/* eslint-disable no-unused-vars */

// Inititalize the seconds to zero and other variables here
var timer = {
  seconds: 0,
  id: null
}
var $time = document.querySelector('#time')
var $start = document.querySelector('#start')

var pressedStart = false

function start() {
  timer.id = setInterval(function() {
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
