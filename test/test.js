import chai from 'chai';
import _ from 'lodash';
import Scale from '../src/Scale.js';

describe('Scale', () => {
  beforeEach(done => {
    // Before each test we empty the database in your case
    done();
  });

  describe('Scale()', () => {
    it('it should create a new Scale object with 12 coins that has 1 fault', done => {
      const scale = new Scale();
      const faultCoinNo = _.filter(scale.coins, x => x === 1).length + _.filter(scale.coins, x => x === 3).length;
      const normalCoinNo = _.filter(scale.coins, x => x === 2).length;
      let faultIndex = scale.coins.findIndex(x => x === 1);
      if (faultIndex === -1) {
        faultIndex = scale.coins.findIndex(x => x === 3);
      }
      const heavier = scale.coins.findIndex(x => x === 3) !== -1;
      scale.coins.length.should.be.eql(12);
      scale.heavier.should.be.eql(heavier);
      scale.faultIndex.should.be.eql(faultIndex);
      faultCoinNo.should.be.eql(1);
      normalCoinNo.should.be.eql(11);
      done();
    });
  });

  describe('Scale.weight(leftGroup, rightGroup)', () => {
    it('it should return 1 if leftGroup > rightGroup, 2 if leftGroup = rightGroup, 3 if leftGroup < rightGroup', done => {
      const should = chai.should();
      for (let count = 0; count < 100; count += 1) {
        const scale = new Scale();
        const RandomCoinIndex = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
        const group1 = RandomCoinIndex.slice(0, 4);
        const group2 = RandomCoinIndex.slice(4, 8);
        const result = scale.weigh(group1, group2);
        const group1Weight = group1.reduce((x, y) => x + scale.coins[y], 0);
        const group2Weight = group2.reduce((x, y) => x + scale.coins[y], 0);
        if (group1Weight > group2Weight) {
          result.should.be.eql(1);
        }
        if (group1Weight === group2Weight) {
          result.should.be.eql(2);
        }
        if (group1Weight < group2Weight) {
          result.should.be.eql(3);
        }
      }
      done();
    });
  });

  describe('Scale.checkResult(index, heavier)', () => {
    const should = chai.should();
    it('it should return true', done => {
      const scale = new Scale();
      const heavier = scale.coins.findIndex(x => x === 1) === -1;
      if (heavier) {
        const faultIndex = scale.coins.findIndex(x => x === 3);
        scale.checkResult(faultIndex, heavier).should.be.eql(true);
      } else {
        const faultIndex = scale.coins.findIndex(x => x === 1);
        scale.checkResult(faultIndex, heavier).should.be.eql(true);
      }
      done();
    });
  });

  describe('Scale.checkResult(index, heavier)', () => {
    const should = chai.should();
    it('it should return false', done => {
      const scale = new Scale();
      const heavier = scale.coins.findIndex(x => x === 1) === -1;
      if (heavier) {
        const faultIndex = scale.coins.findIndex(x => x === 3);
        scale.checkResult(faultIndex, !heavier).should.be.eql(false);
      } else {
        const faultIndex = scale.coins.findIndex(x => x === 1);
        scale.checkResult(faultIndex, !heavier).should.be.eql(false);
      }
      done();
    });
  });
});
