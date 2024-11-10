// script.js
document.getElementById("randomButton").addEventListener("click", () => {
  const images = document.querySelectorAll(".random-image");
  const imageContainer = document.getElementById("imageContainer");

  // Rimuovi eventuali immagini visibili
  images.forEach((img) => img.classList.remove("visible"));

  // Fai partire l'animazione di shuffle
  imageContainer.style.animation = "shuffle 1s ease-in-out";

  setTimeout(() => {
    // Fermiamo l'animazione e resettiamo la posizione
    imageContainer.style.animation = "";

    // Scegliamo un'immagine casuale
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    // Mostriamo l'immagine scelta
    selectedImage.classList.add("visible");
  }, 1000); // Sincronizziamo l'animazione con il timeout
});
