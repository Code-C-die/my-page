function changeText() {
  const msg = document.getElementById("message");
  msg.textContent = "버튼을 눌렀네요! 🎉";
}

function changeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
