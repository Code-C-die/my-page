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
//---Modal 기능추가---
document.addEventListener("DOMContentLoaded", () => {
  const Modal = doucument.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalClose = document.getElementById("modalClose");

  // 모든 카드에 클릭 이벤트 연결
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img");
      const title = card.querySelector("h2");

      // 카드의 이미지/제목을 모달에 채우기
      if (img) modalImg.src = img.src;
      if (title) modalTitle.textContent = title.textContent;

      // 모달 열기
      modal.classList.remove("hidden");
    });
  });

  // 닫기(X) 버튼으로 닫기
  modal.addEventListener("click", (e) => {
    // 바깥(검은 배경) 클릭 또는 X 클릭 시 닫기
    if (e.target === modal || e.target === modalClose) {
      modal.classList.add("hidden");
      // ESC로 재오픈 시 이전 상태 남지 않게 포커스/transition 안정화
      modalImg.blur();
    }
  });

  // ESC 키로 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
    }
  });
});
