const inputFirst = document.querySelector("#inputFirst");
const inputSecond = document.querySelector("#inputSecond");
const gradeToggleFirst = document.querySelector("#gradeToggleFirst");
const gradeToggleSecond = document.querySelector("#gradeToggleSecond");
const selectFirst = document.querySelector("#selectFirst");
const selectSecond = document.querySelector("#selectSecond");
const switchGrade = document.querySelector("#switchGrade");

let isCelsius = true;

function convertTemperature() {
  const value = inputFirst.value;

  if (isNaN(value)) return;

  if (isCelsius) {
    inputSecond.value = (value * 9) / 5 + 32;
  }

  if (!isCelsius) {
    inputSecond.value = ((value - 32) * 5) / 9;
  }
}

function switchGradeToggle() {
  if (isCelsius) {
    gradeToggleFirst.textContent = "Fahrenheit";
    gradeToggleSecond.textContent = "Celsius";
  }

  if (!isCelsius) {
    gradeToggleFirst.textContent = "Celsius";
    gradeToggleSecond.textContent = "Fahrenheit";
  }

  isCelsius = !isCelsius;
}

inputFirst.addEventListener("input", convertTemperature);

switchGrade.addEventListener("click", () => {
  switchGradeToggle();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    e.preventDefault();
    switchGradeToggle();
  }
});
