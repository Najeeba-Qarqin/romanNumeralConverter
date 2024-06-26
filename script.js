const number = document.querySelector('#number');
const button = document.querySelector('#convert-btn');
const result = document.querySelector('#output');

const numeral = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
];

number.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    button.click();
  }
});

button.addEventListener('click', () => {
  if (number.value === '') {
    result.innerHTML = 'Please enter a valid number';
  } else if (number.value < 0) {
    result.innerHTML = 'Please enter a number greater than or equal to 1';
  } else if (number.value > 3999) {
    result.innerHTML = 'Please enter a number less than or equal to 3999';
  } else {
    let output = '';
    for (const [roman, Number] of Object.values(numeral)) {
      while (number.value >= Number) {
        output += roman;
        number.value -= Number;
      }
      result.innerText = output;
    }
  }
});