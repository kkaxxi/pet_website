document.addEventListener("DOMContentLoaded", () => {
  //  елементи з підказками
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const questionInput = document.getElementById("question");

  nameInput.setAttribute("placeholder", "Введіть ім'я");
  emailInput.setAttribute("placeholder", "Введіть email");
  questionInput.setAttribute("placeholder", "Введіть ваше питання");

  // Анімація банера
  const bannerText = "Ми завжди відкриті до ваших питань";
  const banner = document.createElement("div");
  banner.classList.add("moving-banner");
  banner.textContent = bannerText;
  document.body.prepend(banner);

  function animateBanner() {
    let position = 0;
    setInterval(() => {
      position += 1;
      banner.style.transform = `translateX(${position}px)`;
      if (position > window.innerWidth) {
        position = -banner.offsetWidth;
      }
    }, 20);
  }

  animateBanner();
});

document.addEventListener("DOMContentLoaded", () => {
  const questionInput = document.getElementById("question");

  questionInput.addEventListener("mouseenter", () => {
    const tooltip = document.createElement("div");
    tooltip.textContent = "Ваша думка для нас важлива!";
    tooltip.classList.add("tooltip");
    questionInput.parentElement.appendChild(tooltip);

    tooltip.style.position = "absolute";
    tooltip.style.top = `${
      questionInput.offsetTop + questionInput.offsetHeight + 5
    }px`; // Відступ вниз на 5px
    tooltip.style.left = `${questionInput.offsetLeft}px`;
  });

  questionInput.addEventListener("mouseleave", () => {
    const tooltip = questionInput.parentElement.querySelector(".tooltip");
    if (tooltip) {
      tooltip.remove();
    }
  });
});
