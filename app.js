const container = document.getElementById('container');
const text = document.querySelector('#text');
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 2;

breatheAnimation()

function breatheAnimation() {
  text.innerHTML = 'Breathe In!';
  container.className = 'container grow';
  setTimeout(() => {
    text.innerText = 'Hold';
    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'Container Shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breatheAnimation, totalTime)