const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const keyElement = document.querySelector(`.key[data-key="${e.key}"]`);

  // stops function from running
  if (!audio) return; 

  // starts audio over so that it plays on every key press
  audio.currentTime = 0;
  audio.play();
  keyElement.classList.add("playing")
}

const removeTransition = (e) => {
  const keys = document.querySelectorAll(".key");

  // skip it if it's not a transform
  if (e.propertyName !== "transform") return;

  for (let key of keys) {
    key.classList.remove("playing");
  }
}

window.addEventListener("keydown", playSound);
window.addEventListener("transitionend", removeTransition);
