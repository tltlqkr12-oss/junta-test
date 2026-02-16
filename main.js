// Loto 7
const loto7Button = document.getElementById('loto7-button');
const loto7NumbersDiv = document.getElementById('loto7-numbers');

loto7Button.addEventListener('click', () => {
  const numbers = generateLoto7Numbers();
  displayLoto7Numbers(numbers);
});

function generateLoto7Numbers() {
  const allNumbers = Array.from({ length: 37 }, (_, i) => i + 1);
  const mainNumbers = [];
  const bonusNumbers = [];

  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * allNumbers.length);
    mainNumbers.push(allNumbers.splice(randomIndex, 1)[0]);
  }

  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * allNumbers.length);
    bonusNumbers.push(allNumbers.splice(randomIndex, 1)[0]);
  }
  
  mainNumbers.sort((a,b) => a - b);
  bonusNumbers.sort((a,b) => a - b);

  return { mainNumbers, bonusNumbers };
}

function displayLoto7Numbers({ mainNumbers, bonusNumbers }) {
  loto7NumbersDiv.innerHTML = `
    <h2>本数字</h2>
    <div class="numbers main">
      ${mainNumbers.map(num => `<span>${num}</span>`).join('')}
    </div>
    <h2>ボーナス数字</h2>
    <div class="numbers bonus">
      ${bonusNumbers.map(num => `<span>${num}</span>`).join('')}
    </div>
  `;
}

// Loto 6
const loto6Button = document.getElementById('loto6-button');
const loto6NumbersDiv = document.getElementById('loto6-numbers');

loto6Button.addEventListener('click', () => {
  const numbers = generateLoto6Numbers();
  displayLoto6Numbers(numbers);
});

function generateLoto6Numbers() {
  const allNumbers = Array.from({ length: 43 }, (_, i) => i + 1);
  const mainNumbers = [];

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * allNumbers.length);
    mainNumbers.push(allNumbers.splice(randomIndex, 1)[0]);
  }
  
  mainNumbers.sort((a,b) => a - b);

  return { mainNumbers };
}

function displayLoto6Numbers({ mainNumbers }) {
  loto6NumbersDiv.innerHTML = `
    <h2>本数字</h2>
    <div class="numbers main">
      ${mainNumbers.map(num => `<span>${num}</span>`).join('')}
    </div>
  `;
}
