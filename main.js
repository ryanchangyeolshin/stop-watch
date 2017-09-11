/* eslint-disable no-unused-vars */

var timer = {
  seconds: 0,
  id: null
}
var $time = document.querySelector('#time')
var $start = document.querySelector('#start')

var pressedStart = false

function start() {
  timer.id = setInterval(function() {
    timer.seconds++
    renderTime()
  }, 1000)
}

function stop() {
  clearInterval(timer.id)
}

function renderTime() {
  $time.textContent = timer.seconds
}

$start.addEventListener('click', function(e) {
  if (!pressedStart) {
    start()
  }
  pressedStart = true

  $start.setAttribute('id', 'stop')
  var $stop = document.querySelector('#stop')
  $stop.addEventListener('click', stop)
})
