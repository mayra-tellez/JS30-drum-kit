window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const keyElement = document.querySelector(`.key[data-key="${e.key}"]`);

  // stops function from running
  if (!audio) return; 

  // starts audio over so that it plays on every key press
  audio.currentTime = 0;
  audio.play();
  keyElement.classList.add("playing");
})
