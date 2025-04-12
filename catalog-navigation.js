/**
 * catalog-navigation.js
 * Script untuk menangani navigasi berdasarkan pilihan eco-tag
 */

// Fungsi untuk menangani navigasi berdasarkan eco-tag yang dipilih
function handleEcoTagNavigation() {
  // Mendapatkan elemen select untuk eco-tag
  const ecoTagSelect = document.getElementById("eco-tag");

  // Pemetaan nilai eco-tag ke halaman tujuan
  const ecoTagMapping = {
    organik: "baju.html",
    "daur-ulang": "aksesoris.html",
    lokal: "makanan.html",
  };

  // Tambahkan event listener untuk perubahan pada select eco-tag
  ecoTagSelect.addEventListener("change", function () {
    const selectedValue = this.value;

    // Jika nilai yang dipilih ada dalam pemetaan, arahkan ke halaman yang sesuai
    if (selectedValue && ecoTagMapping[selectedValue]) {
      window.location.href = ecoTagMapping[selectedValue];
    }
  });
}

// Jalankan fungsi saat dokumen telah dimuat sepenuhnya
document.addEventListener("DOMContentLoaded", function () {
  handleEcoTagNavigation();
});
