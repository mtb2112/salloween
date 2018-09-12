var deadline = new Date(2018, 9, 27)
deadline.setHours(19)

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date())
  var seconds = Math.floor((t / 1000) % 60)
  var minutes = Math.floor((t / 1000 / 60) % 60)
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24)
  var days = Math.floor(t / (1000 * 60 * 60 * 24))
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id)
  var daysSpan = clock.querySelector('.days')
  var hoursSpan = clock.querySelector('.hours')
  var minutesSpan = clock.querySelector('.minutes')
  var secondsSpan = clock.querySelector('.seconds')
  var timeRemaining
  var timeinterval

  function updateClock() {
    timeRemaining = getTimeRemaining(endtime)

    daysSpan.innerHTML = timeRemaining.days
    hoursSpan.innerHTML = ('0' + timeRemaining.hours).slice(-2)
    minutesSpan.innerHTML = ('0' + timeRemaining.minutes).slice(-2)
    secondsSpan.innerHTML = ('0' + timeRemaining.seconds).slice(-2)

    if (timeRemaining.total <= 0) {
      clearInterval(timeinterval)
    }
  }

  updateClock()
  timeinterval = setInterval(updateClock, 1000)
}

document.addEventListener('DOMContentLoaded', function() {
  initializeClock('clockdiv', deadline)
})