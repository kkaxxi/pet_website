// Змінні для роботи з елементами форми
const filterForm = document.querySelector(".filter-form");
const resultsSection = document.querySelector(".results-list");
const filterClearButton = document.querySelector(
  '.filter-buttons .button[type="button"]'
);
const filterApplyButton = document.querySelector(
  '.filter-buttons .button[type="submit"]'
);
const resultCount = document.querySelector(".result-title");

// Приклад даних тварин
const animals = [
  {
    name: "Стелла",
    type: "Собака",
    species: "Невідома порода",
    age: 1,
    gender: "Ж",
    size: "Великий",
    image: "./images/animals/stella.jpg",
  },
  {
    name: "Мілка",
    type: "Кішка",
    species: "Невідома порода",
    age: 1,
    gender: "Ж",
    size: "Середній",
    image: "./images/animals/milka.jpg",
  },
  {
    name: "Стефані",
    type: "Кішка",
    species: "Невідома порода",
    age: 1,
    gender: "Ж",
    size: "Маленький",
    image: "./images/animals/steffani.jpg",
  },
  {
    name: "Мері",
    type: "Кішка",
    species: "Невідома порода",
    age: 1,
    gender: "Ж",
    size: "Великий",
    image: "./images/animals/meri.jfif",
  },
  {
    name: "Челсі",
    type: "Собака",
    species: "Пудель, мисливський тер'єр",
    age: 1,
    gender: "М",
    size: "Маленький",
    image: "./images/animals/chelsi.jpg",
  },
  {
    name: "Тося",
    type: "Кішка",
    species: "Невідома порода",
    age: 1,
    gender: "Ж",
    size: "Середній",
    image: "./images/animals/tosja.png",
  },
  {
    name: "Барбариса",
    type: "Кішка",
    species: "Невідома порода",
    age: 2,
    gender: "Ж",
    size: "Середній",
    image: "./images/animals/barbarysa.jfif",
  },
  {
    name: "Діна",
    type: "Собака",
    species: "Невідома порода",
    age: 2,
    gender: "Ж",
    size: "Маленький",
    image: "./images/animals/dina.png",
  },
  {
    name: "Лакі",
    type: "Кішка",
    species: "Невідома порода",
    age: 2,
    gender: "М",
    size: "Середній",
    image: "./images/animals/luky.jfif",
  },
  {
    name: "Маркіз",
    type: "Кішка",
    species: "Невідома порода",
    age: 3,
    gender: "Ж",
    size: "Великий",
    image: "./images/animals/markis.jpg",
  },
  {
    name: "Джоуі",
    type: "Собака",
    species: "Невідома порода",
    age: 3,
    gender: "М",
    size: "Великий",
    image: "./images/animals/joui.jpg",
  },
  {
    name: "Аліса",
    type: "Собака",
    species: "Невідома порода",
    age: 3,
    gender: "Ж",
    size: "Маленький",
    image: "./images/animals/alisa.jpg",
  },
  {
    name: "Арчі",
    type: "Собака",
    species: "Хаскі",
    age: 4,
    gender: "М",
    size: "Великий",
    image: "./images/animals/archi.jpg",
  },
];

// Функція для рендеру результатів
function renderResults(filteredAnimals) {
  resultsSection.innerHTML = ""; // Очистка попередніх результатів
  filteredAnimals.forEach((animal) => {
    const animalCard = document.createElement("article");
    animalCard.classList.add("result-item");
    animalCard.innerHTML = `
      <h4 class="result-name">${animal.name}</h4>
      <img class="result-image" src="${animal.image}" alt="${animal.name}" />
      <div class="result-details">
        <p class="result-detail"><strong>Тип:</strong> ${animal.type}</p>
        <p class="result-detail"><strong>Порода:</strong> ${animal.species}</p>
        <p class="result-detail"><strong>Вік:</strong> ${animal.age} рік</p>
        <p class="result-detail"><strong>Стать:</strong> ${animal.gender}</p>
        <p class="result-detail"><strong>Розмір:</strong> ${animal.size}</p>
      </div>
    `;
    resultsSection.appendChild(animalCard);
  });
  resultCount.textContent = `Знайдено ${filteredAnimals.length} тварин`;
}

// Ініціалізація початкових результатів
renderResults(animals);

// Функція для очистки фільтрів
function clearFilters() {
  filterForm.reset();
  renderResults(animals);
  console.log("Filters cleared. Showing all animals.");
}

// Функція для застосування фільтрів
function applyFilters(event) {
  event.preventDefault();

  const formData = new FormData(filterForm);
  const category = formData.get("category");
  const gender = formData.get("gender");
  const ageMin = parseInt(formData.get("age_min"), 10) || 0;
  const ageMax = parseInt(formData.get("age_max"), 10) || 25;
  const size = formData.get("size");

  const filteredAnimals = animals.filter((animal) => {
    return (
      (category === "Не важливо" || animal.type === category) &&
      (gender === "Не важливо" || animal.gender === gender) &&
      animal.age >= ageMin &&
      animal.age <= ageMax &&
      (size === "Не важливо" || animal.size === size)
    );
  });

  renderResults(filteredAnimals);
  console.log(`Filters applied. Found ${filteredAnimals.length} animals.`);
}

// Події для кнопок очистки та застосування фільтрів
filterClearButton.addEventListener("click", clearFilters);
filterApplyButton.addEventListener("click", applyFilters);

function calculateStatistics() {
  let totalAnimals = animals.length;
  let dogs = 0;
  let cats = 0;
  let totalAge = 0;

  for (let i = 0; i < totalAnimals; i++) {
    const animal = animals[i];
    totalAge += animal.age;

    if (animal.type === "Собака") {
      dogs++;
    } else if (animal.type === "Кішка") {
      cats++;
    }
  }

  const averageAge = (totalAge / totalAnimals).toFixed(1);
  console.log(`Всього тварин: ${totalAnimals}`);
  console.log(`Собак: ${dogs}`);
  console.log(`Кішок: ${cats}`);
  console.log(`Середній вік тварин: ${averageAge}`);
}

calculateStatistics();
