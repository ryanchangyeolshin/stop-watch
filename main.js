/* eslint-disable no-unused-vars */

// Inititalize the seconds to zero and other variables here
var timer = {
  hours: 0,
  minutes: 0,
  seconds: 50,
  id: null
}
var $time = document.querySelector('#time')
var $start = document.querySelector('#start')
var $stop = document.querySelector('#stop')

function start() {
  timer.id = setInterval(function() {
    if (timer.seconds === 60) {
      timer.seconds = 0
      timer.minutes++

      if(timer.minutes === 60) {
        timer.hours++
      }
    }

    timer.seconds++
    renderSeconds()
    console.log(timer.seconds)
  }, 1000)
}

function renderSeconds() {

  $time.textContent = timer.hours + ' hours ' + timer.minutes + ' minutes ' + timer.seconds + ' seconds'
}

function stop() {
  clearInterval(timer.id)
}

$start.addEventListener('click', start)
$stop.addEventListener('click', stop)
