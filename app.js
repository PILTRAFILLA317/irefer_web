const reguetona = () => {
  const texts = document.querySelectorAll(".gradient-text");
  texts.forEach((text) => {
    const letters = text.textContent.split("");

    text.innerHTML = "";
    letters.forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.backgroundImage = "linear-gradient(to right, #76468e, #af3161)";
      span.style.webkitBackgroundClip = "text";
      span.style.webkitTextFillColor = "transparent";
      text.appendChild(span);
    });
  });
};

window.onload = () => {
  reguetona();
};
