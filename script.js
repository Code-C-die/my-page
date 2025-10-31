function changeText() {
  const msg = document.getElementById("message");
  msg.textContent = "버튼을 눌렀네요! 🎉";
}
function changeColor() {
  // 랜덤 색상 생성 (RGB)
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // body 배경색 변경 (부드럽게 변함)
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
