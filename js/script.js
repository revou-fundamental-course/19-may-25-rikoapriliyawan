  const inputSuhu = document.getElementById("Input-Suhu");
  const hasilSuhu = document.getElementById("hasil-suhu");
  const detailSuhu = document.getElementById("detail-suhu");
  const btnKonversi = document.querySelector(".bg-lightseagreen");
  const btnReset = document.querySelector(".bg-lightcoral");
  const btnReverse = document.querySelector(".bg-lightblue");
  let isCelciusToFahrenheit = true;


    // Change Mode
  const toggleBtn = document.getElementById("toggle-theme");
  const body = document.body;

  // Toggle dark mode
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    const icon = toggleBtn.querySelector("i");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
  });

  // Tambahkan animasi masuk saat load
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("main").classList.add("slide-in");
  });

  btnKonversi.addEventListener("click", function (e) {
    e.preventDefault();
    const inputValue = parseFloat(inputSuhu.value);

    if (isNaN(inputValue)) {
      hasilSuhu.value = "";
      detailSuhu.value = "Mohon masukkan angka yang valid.";
      return;
    }

    if (isCelciusToFahrenheit) {
      const fahrenheit = (inputValue * 9 / 5) + 32;
      hasilSuhu.value = fahrenheit.toFixed(2);
      detailSuhu.value = `${inputValue} °C * 9/5 + 32 = ${fahrenheit.toFixed(2)} °F`;
    } else {
      const celcius = (inputValue - 32) * 5 / 9;
      hasilSuhu.value = celcius.toFixed(2);
      detailSuhu.value = `(${inputValue} °F - 32) * 5/9 = ${celcius.toFixed(2)} °C`;
    }
  });

  btnReset.addEventListener("click", function (e) {
    e.preventDefault();
    inputSuhu.value = "";
    hasilSuhu.value = "";
    detailSuhu.value = "";
  });

  btnReverse.addEventListener("click", function (e) {
    e.preventDefault();
    isCelciusToFahrenheit = !isCelciusToFahrenheit;
    document.querySelector("label[for='Input-Suhu']").innerHTML = isCelciusToFahrenheit
      ? "Celcius (°C):"
      : "Fahrenheit (°F):";
    document.querySelector("label[for='hasil-suhu']").innerHTML = isCelciusToFahrenheit
      ? "Fahrenheit (°F)"
      : "Celcius (°C)";
    inputSuhu.value = "";
    hasilSuhu.value = "";
    detailSuhu.value = "";
  });


