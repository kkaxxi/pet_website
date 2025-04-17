document.addEventListener("DOMContentLoaded", () => {
  // Випадаючий блок "Волонтерство у притулках"
  const toggleVolunteeringButton = document.getElementById(
    "toggle-volunteering"
  );
  const volunteeringContent = document.getElementById("volunteering-content");

  toggleVolunteeringButton.addEventListener("click", () => {
    volunteeringContent.style.display =
      volunteeringContent.style.display === "none" ||
      volunteeringContent.style.display === ""
        ? "block"
        : "none";
  });

  // Випадаючий блок "Пожертви на підтримку"
  const toggleDonationsButton = document.getElementById("toggle-donations");
  const donationsContent = document.getElementById("donations-content");

  toggleDonationsButton.addEventListener("click", () => {
    donationsContent.style.display =
      donationsContent.style.display === "none" ||
      donationsContent.style.display === ""
        ? "block"
        : "none";
  });

  // Випадаючий блок "Усиновлення тварин"
  const toggleAdoptionButton = document.getElementById("toggle-adoption");
  const adoptionContent = document.getElementById("adoption-content");

  toggleAdoptionButton.addEventListener("click", () => {
    adoptionContent.style.display =
      adoptionContent.style.display === "none" ||
      adoptionContent.style.display === ""
        ? "block"
        : "none";
  });
});
