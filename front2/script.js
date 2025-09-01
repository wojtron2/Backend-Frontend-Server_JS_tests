const przycisk = document.getElementById("przycisk");
const tytul = document.getElementById("tytul");
const obrazek = document.getElementById("obrazek");

przycisk.addEventListener("click", () => {
  tytul.textContent = "Super! Kliknąłeś przycisk 🚀";
  obrazek.innerHTML = `<img src="https://picsum.photos/200" alt="Losowy obrazek">`;
});