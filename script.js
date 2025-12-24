// Countdown
const targetDate = new Date("2026-04-30T00:00:00-06:00").getTime(); 
const countdown = document.getElementById("countdown");

function updateCountdown(){
  const now = new Date().getTime();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  countdown.innerHTML = `
    <div class="time-box"><h2>${days}</h2><p>Días</p></div>
    <div class="time-box"><h2>${hours}</h2><p>Horas</p></div>
    <div class="time-box"><h2>${mins}</h2><p>Min</p></div>
    <div class="time-box"><h2>${secs}</h2><p>Seg</p></div>
  `;
}

/* 🔥 render immediately */
updateCountdown();

/* then keep it live */
setInterval(updateCountdown, 1000);



