document.addEventListener("DOMContentLoaded", function () {
  const kategoriSelect = document.getElementById("kategori");

  kategoriSelect.addEventListener("change", function () {
    const selectedValue = this.value;

    if (selectedValue === "baju") {
      window.location.href = "baju.html";
    } else if (selectedValue === "aksesoris") {
      window.location.href = "aksesoris.html";
    } else if (selectedValue === "makanan") {
      window.location.href = "makanan.html";
    } else {
      window.location.href = "index.html";
    }
  });
});
