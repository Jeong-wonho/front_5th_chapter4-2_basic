// 예시: 페이지 로드 되자마자 바로 보여주기
function showTopBar(country = "France", vat = 20) {
  const barEl = document.querySelector("section.country-bar");
  if (!barEl) return;

  const p = document.createElement("p");
  p.append(
    document.createTextNode("Orders to "),
    Object.assign(document.createElement("b"), { textContent: country }),
    document.createTextNode(" are subject to "),
    Object.assign(document.createElement("b"), { textContent: `${vat}%` }),
    document.createTextNode(" VAT")
  );
  barEl.appendChild(p);
  barEl.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  showTopBar(); // 로드되면 즉시 표시
});
