class Scale {
  constructor() {
    this.coins = [];
    this.faultIndex = Math.floor(Math.random() * 12);
    for (let i = 0; i < 12; i += 1) {
      if (i !== this.faultIndex) {
        this.coins.push(2);
      } else if (Math.floor(Math.random() * 2)) {
        this.heavier = true;
        this.coins.push(3);
      } else {
        this.heavier = false;
        this.coins.push(1);
      }
    }
    this.remainingTestTime = 1;
  }

  weigh(left, right) {
    const leftCoins = left.map(x => this.coins[x]);
    const rightCoins = right.map(x => this.coins[x]);
    const leftWeight = leftCoins.reduce((x, y) => x + y);
    const rightWeight = rightCoins.reduce((x, y) => x + y);
    if (leftWeight > rightWeight) {
      return 1;
    }
    if (rightWeight === leftWeight) {
      return 2;
    }
    return 3;
  }

  checkResult(index, heavier) {
    this.remainingTestTime -= 1;
    return this.remainingTestTime === 0 && index === this.faultIndex && this.heavier === heavier;
  }
}

export default Scale;
