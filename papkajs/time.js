//! Завдання N5 ( Лічильник часу )
const inputTime = document.getElementById("input-time");
const pTime = document.getElementById("p-time");

inputTime.addEventListener("input", inputSTime);

function getWordForm(n, forms) {
  n = Math.abs(n);
  if (n % 10 === 1 && n % 100 !== 11) {
    return forms[0];
  } else if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) {
    return forms[1];
  } else {
    return forms[2];
  }
}

function inputSTime() {
  let min = parseFloat(inputTime.value);

  if (isNaN(min)) {
    pTime.textContent = "Введіть число";
    return;
  }

  const day = Math.floor(min / (60 * 24));
  let god = Math.floor(min / 60);
  const minostacha = Math.floor(min % 60);

  if (god >= 24) {
    god = god % 24;
  }

  const dayWord = getWordForm(day, ["день", "дні", "днів"]);
  const hourWord = getWordForm(god, ["година", "години", "годин"]);
  const minWord = getWordForm(minostacha, ["хвилина", "хвилини", "хвилин"]);

  if (day >= 1) {
    pTime.textContent = `${day} ${dayWord}, ${god} ${hourWord}, ${minostacha} ${minWord}`;
  } else {
    pTime.textContent = `${god} ${hourWord}, ${minostacha} ${minWord}`;
  }
}

//ЗРОБЛЕНО І ПРАЦЮЄ