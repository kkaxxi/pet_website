window.addEventListener("scroll", function () {
  const title = document.querySelector(".main-title");

  if (window.scrollY > 100) {
    title.classList.add("animate-title");
  } else {
    title.classList.remove("animate-title");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const greetingText = "Ласкаво просимо до Meowspet!";
  const targetElement = document.querySelector(".main-title");
  targetElement.style.color = "white";
  targetElement.style.fontSize = "1.5em"; 

  targetElement.textContent = ""; 

  let index = 0;
  function typeText() {
    if (index < greetingText.length) {
      targetElement.textContent += greetingText[index];
      index++;
      setTimeout(typeText, 100); 
    }
  }
  typeText();
});

document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "./images/animals/stella.jpg",
    "./images/animals/milka.jpg",
    "./images/animals/steffani.jpg",
    "./images/animals/meri.jfif",
  ];

  const carousel = document.createElement("div");
  carousel.classList.add("carousel");

  const mainContainer = document.querySelector(".home-section");
  mainContainer.parentNode.insertBefore(carousel, mainContainer);

  let index = 0;

  function updateCarousel() {
    carousel.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
  }

  setInterval(updateCarousel, 3000); 
  updateCarousel();
});


document.addEventListener("DOMContentLoaded", () => {
  // Перше випадаюче вікно "Хто ми і чим займаємося"
  const toggleAboutButton = document.getElementById("toggle-we-about");
  const aboutContent = document.getElementById("we-about-content");

  toggleAboutButton.addEventListener("click", () => {
    aboutContent.style.display =
      aboutContent.style.display === "none" || aboutContent.style.display === ""
        ? "block"
        : "none";
  });

  // Друге випадаюче вікно "Нинішня проблема"
  const toggleProblemButton = document.getElementById("toggle-we-problem");
  const problemContent = document.getElementById("we-problem-content");

  toggleProblemButton.addEventListener("click", () => {
    problemContent.style.display =
      problemContent.style.display === "none" ||
      problemContent.style.display === ""
        ? "block"
        : "none";
  });

  // Третє випадаюче вікно "Як ми вирішуємо цю проблему?"
  const toggleSolutionButton = document.getElementById("toggle-we-solution");
  const solutionContent = document.getElementById("we-solution-content");

  toggleSolutionButton.addEventListener("click", () => {
    solutionContent.style.display =
      solutionContent.style.display === "none" ||
      solutionContent.style.display === ""
        ? "block"
        : "none";
  });
});
