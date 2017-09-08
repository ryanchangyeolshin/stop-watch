/* eslint-disable no-unused-vars */

// Inititalize the seconds to zero and other variables here
var timer = {
  seconds: 0,
  id: null
}
var $time = document.querySelector('#time')
var $start = document.querySelector('#start')
var $stop = document.querySelector('#stop')

function start() {
  timer.id = setInterval(function() {
    timer.seconds++
    renderSeconds()
    console.log(timer.seconds)
  }, 1000)
}

function renderSeconds() {
  $time.textContent = timer.seconds
}

function stop() {
  clearInterval(timer.id)
}

$start.addEventListener('click', start)
$stop.addEventListener('click', stop)
