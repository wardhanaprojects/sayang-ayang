// Array berisi berbagai jenis topping dalam format background-image CSS
const toppings = [
  "repeating-linear-gradient(135deg, #ff7eaf 0, #ff7eaf 20px, #ff0565 20px, #ff0565 40px)", // Topping untuk popsicle-1
  "radial-gradient(circle at 30px 53px, #521a01 80px, #ffba00 81px)", // Topping untuk popsicle-2
  "radial-gradient(#c39a6b 4px, transparent 4px)", // Topping untuk popsicle-3
  "linear-gradient(45deg, #f8b400, #fcf2d4)", // Random Topping 1
  "radial-gradient(circle, #c0e218, #0a8d09)", // Random Topping 2
  "repeating-linear-gradient(45deg, #ed6a5a, #f4f1bb, #9bc1bc)", // Random Topping 3
];

// Fungsi untuk mengenerate topping acak
function generateRandomTopping() {
  const popsicles = document.querySelectorAll(".popsicle");

  popsicles.forEach((popsicle) => {
    const randomTopping = toppings[Math.floor(Math.random() * toppings.length)];
    popsicle.style.backgroundImage = randomTopping;
  });
}

// Fungsi untuk mengganti warna popsicle (dari kode sebelumnya)
function changeColor(popsicleClass) {
  const popsicle = document.querySelector(`.${popsicleClass}`);
  const randomColor = getRandomColor();
  popsicle.style.background = randomColor;
}

// Fungsi untuk mendapatkan warna acak (dari kode sebelumnya)
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
