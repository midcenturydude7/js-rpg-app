const getDiceRollArray = (diceCount) => {
  return new Array(diceCount).fill(0).map(() => {
    return Math.floor(Math.random() * 6) + 1;
  });
};

const getPercentage = (remainingHealth, maximumHealth) => {
  return (100 * remainingHealth) / maximumHealth;
};

const getDicePlaceholderHtml = (diceCount) => {
  return new Array(diceCount)
    .fill(0)
    .map(() => {
      return `
      <div class="placeholder-dice"></div>
    `;
    })
    .join("");
};

export { getDiceRollArray, getDicePlaceholderHtml, getPercentage };
