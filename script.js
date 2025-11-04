function changeText() {
  const msg = document.getElementById("message");
  // 바꿔가며 보여줄 문장들
  const lines = [
    "첫 페이드 효과 성공! 🎉",
    "지금 진짜 개발자 같다 😎",
    "버튼 한 번에 업로드도 끝! 🚀",
    "천천히, 꾸준히. 그게 정답 💪",
  ];

  // 1) 서서히 사라짐
  msg.classList.add("hidden");

  // 2) 사라진 뒤 텍스트 교체 후 다시 나타나기
  setTimeout(() => {
    const rand = Math.floor(Math.random() * lines.length);
    msg.textContent = lines[rand];

    // 서서히 나타남
    msg.classList.remove("hidden");
  }, 300);
}
function changeColor() {
  // 랜덤 색상 생성 (RGB)
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // body 배경색 변경 (부드럽게 변함)
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
