import {
  getDiceRollArray,
  getDicePlaceholderHtml,
  getPercentage,
} from "./utils.js";

class Character {
  constructor(data) {
    Object.assign(this, data);
    this.maxHealth = this.health;
    this.diceArray = getDicePlaceholderHtml(this.diceCount);

    this.getDiceHtml = () => {
      this.currentDiceScore = getDiceRollArray(this.diceCount);
      this.diceArray = this.currentDiceScore
        .map((num) => `<div class="dice">${num}</div>`)
        .join("");
    };

    this.takeDamage = (attackScoreArray) => {
      const totalAttackScore = attackScoreArray.reduce(
        (totalHealth, currentHealth) => totalHealth + currentHealth
      );
      this.health -= totalAttackScore;
      if (this.health <= 0) {
        this.dead = true;
        this.health = 0;
      }
    };

    this.getHealthBarHtml = () => {
      const percent = getPercentage(this.health, this.maxHealth);
      
      return `
      <div class="health-bar-outer">
          <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
          style="width: ${percent}%">
          </div>
      </div>`;
    };

    this.getCharacterHtml = () => {
      const { name, avatar, health } = this;
      const healthBar = this.getHealthBarHtml();
      
      return `
      <div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}"/>
        <div class="health">health: <b> ${health} </b></div>
        ${healthBar}
        <div class="dice-container">
          ${this.diceArray}
        </div>
      </div> 
    `;
    };
  }
}

export default Character;
