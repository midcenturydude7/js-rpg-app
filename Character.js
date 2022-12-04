import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js";

class Character {
  constructor(data) {
    Object.assign(this, data);

    this.diceArray = getDicePlaceholderHtml(this.diceCount);

    this.getDiceHtml = () => {
      this.currentDiceScore = getDiceRollArray(this.diceCount);
      this.diceArray = this.currentDiceScore
        .map((num) => {
          return `
          <div class="dice">${num}</div>
        `;
        })
        .join("");
    };

    this.takeDamage = (attackScoreArray) => {
      const totalAttackScore = attackScoreArray.reduce(
        (totalHealth, currentHealth) => {
          return totalHealth + currentHealth;
        }
      );
      this.health -= totalAttackScore;
    };

    this.getCharacterHtml = () => {
      const { name, avatar, health, diceArray } = this;

      return `
      <div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}"/>
        <div class="health">health: <b> ${health} </b></div>
        <div class="dice-container">
          ${diceArray}
        </div>
      </div> 
    `;
    };
  }
}

export default Character;
