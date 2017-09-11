/* eslint-disable no-unused-vars */

var timer = {
  seconds: 0,
  id: null
}
var $time = document.querySelector('#time')
var $buttons = document.querySelector('.buttons')
var $start = document.querySelector('#start')
var $stop = null

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
  $time.textContent = timer.seconds + ' second(s)'
}

$start.addEventListener('click', function(e) {
  if (!pressedStart) {
    start()
  }
  pressedStart = true

  $start.style.display = 'none';

  $stop = document.createElement('button')
  $stop.setAttribute('id', 'stop')
  $stop.textContent = 'Stop'
  $buttons.appendChild($stop)

  $stop.addEventListener('click', function(e) {
    stop()
    $stop.style.display = 'none';
    $start.style.display = 'inline';
    pressedStart = false;
  })
})
