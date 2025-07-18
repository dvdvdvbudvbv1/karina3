function openBox() {
  document.querySelector('.lid').style.transform = 'rotateX(-120deg)';
  document.querySelector('.ring').style.opacity = '1';
  document.getElementById('proposalText').style.opacity = '1';
  document.getElementById('yesBtn').style.opacity = '1';
}

function yesClicked() {
  const btn = document.getElementById('yesBtn');
  btn.textContent = '❤️ Спасибо! 💖';
  btn.classList.add('clicked');
}