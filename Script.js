document.getElementById("celsiusToFahrenheit").addEventListener("click", function () {
    const celsius = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultText").textContent = `${celsius}°C is ${fahrenheit}°F`;
});

document.getElementById("fahrenheitToCelsius").addEventListener("click", function () {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("resultText").textContent = `${fahrenheit}°F is ${celsius}°C`;
});
