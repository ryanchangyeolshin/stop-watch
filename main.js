/* eslint-disable no-unused-vars */

var timer = {
  seconds: 0,
  limit: 0,
  id: null
}
var $time = document.querySelector('#time')
var $buttons = document.querySelector('.buttons')
var $start = document.querySelector('#start')
var $stop = document.querySelector('#stop')
var $reset = document.querySelector('#reset')
var $timeLimit = document.querySelector('#time-limit-input')

function start() {
  if(!timer.id) {
    timer.id = setInterval(function() {
      if (timer.limit === timer.seconds) {
        stop()
        alert('BEEP!')
        toggleButtons()
      }
      else {
        console.log(timer.limit, timer.seconds)
        timer.seconds++
        renderTime()
      }
    }, 1000)
  }
}

function stop() {
  clearInterval(timer.id)
  timer.id = null
}

function reset() {
  timer.seconds = 0
  renderTime()
}

function renderTime() {
  setInterval(function() {
    $time.textContent = timer.seconds + ' second(s)'
  }, 16)
}

function toggleButtons() {
  var $active = document.querySelector('.active')
  var $hidden = document.querySelector('.hidden')

  $active.classList.toggle('active')
  $active.classList.toggle('hidden')
  $hidden.classList.toggle('hidden')
  $hidden.classList.toggle('active')
}

$start.addEventListener('click', function(e) {
  timer.limit = Number($timeLimit.value)
  $timeLimit.value = ''
  start()
  toggleButtons()
})

$stop.addEventListener('click', function(e) {
  stop()
  toggleButtons()
})

$reset.addEventListener('click', reset)
