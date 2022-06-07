var countDownDate = new Date("June 7, 2023").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = `
  <div class="timer-container">
    <div class="timer-flex">
      <div class="timer-box">${days}d</div>
      <div class="timer-box">${hours}h </div>
      <div class="timer-box">${minutes}m </div>
      <div class="timer-box">${seconds}s </div>
    </div>
    <div style="font-family:OswaldHeadings;">until Graduation</div>
  </div>
    `;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "CONGRATS!!!";
  }
}, 1000);
