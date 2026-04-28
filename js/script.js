function showSection(sectionId, element) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((sec) => {
    sec.classList.remove("active");
  });

  const buttons = document.querySelectorAll(".nav-botao-active");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  document.getElementById(sectionId).classList.add("active");

  element.classList.add("active");
}

function showGalleryText(textId, button) {
  const texts = document.querySelectorAll(".galeria-text");
  const buttons = document.querySelectorAll(".gallery-button");
  const textToShow = document.getElementById(`galeria-text-${textId}`);
  const isActive = button.classList.contains("active");

  texts.forEach((text) => text.classList.remove("active"));
  buttons.forEach((btn) => btn.classList.remove("active"));

  if (!isActive) {
    textToShow.classList.add("active");
    button.classList.add("active");
  }
}
