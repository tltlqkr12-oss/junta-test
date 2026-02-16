const generateButton = document.getElementById('generate-button');
const winningNumbersDiv = document.getElementById('winning-numbers');

generateButton.addEventListener('click', () => {
  const numbers = generateLoto7Numbers();
  displayNumbers(numbers);
});

function generateLoto7Numbers() {
  const allNumbers = Array.from({ length: 37 }, (_, i) => i + 1);
  const mainNumbers = [];
  const bonusNumbers = [];

  // Select 7 main numbers
  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * allNumbers.length);
    mainNumbers.push(allNumbers.splice(randomIndex, 1)[0]);
  }

  // Select 2 bonus numbers from the remaining
  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * allNumbers.length);
    bonusNumbers.push(allNumbers.splice(randomIndex, 1)[0]);
  }
  
  mainNumbers.sort((a,b) => a - b);
  bonusNumbers.sort((a,b) => a - b);

  return { mainNumbers, bonusNumbers };
}

function displayNumbers({ mainNumbers, bonusNumbers }) {
  winningNumbersDiv.innerHTML = `
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
