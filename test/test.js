import { should } from 'chai';
import _ from 'lodash';
import Scale from '../src/Scale.js';
import {
  handleThreeCoin,
  handleThreeCoinFromDifferentGroups,
  handleTwoGroup,
} from '../src/algo.js';
import {
  findFaultCoin,
}
from '../src/algo2-refactor.js';

should();

describe('Scale', () => {
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

  describe('#weight()', () => {
    it('it should return 1 if leftGroup > rightGroup, 2 if leftGroup = rightGroup, 3 if leftGroup < rightGroup', done => {
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

  describe('#checkResult()', () => {
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
});

describe('algo', () => {
  describe('#handleTwoGroup()', () => {
    it(
      'it should find out the fault coin index, whether the fault coin is heavier or lighter',
      done => {
        const scale = new Scale();
        let firstGroup = [0, 1, 2, 3];
        let secondGroup = [4, 5, 6, 7];
        if (scale.weigh(firstGroup, secondGroup) === 2) {
          firstGroup = firstGroup.map(x => x + 4);
          secondGroup = secondGroup.map(x => x + 4);
        }
        if (scale.weigh(firstGroup, secondGroup) === 1) {
          const result = handleTwoGroup(scale, firstGroup, secondGroup);
          scale.checkResult(result.faultIndex, result.heavier).should.be.eql(true);
        } else {
          const result = handleTwoGroup(scale, secondGroup, firstGroup);
          scale.checkResult(result.faultIndex, result.heavier).should.be.eql(true);
        }
        done();
      },
    );
  });

  describe('#handleThreeCoinFromDifferentGroups()', () => {
    it('it should return the fault coin index, whether the fault coin is heavier or lighter', done => {
      const scale = new Scale();
      const indexGroup = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
      const normalGroup = _.filter(indexGroup, x => scale.coins[x] === 2);
      const faultIndex = _.findIndex(scale.coins, x => x !== 2);
      if (scale.heavier) {
        const result = handleThreeCoinFromDifferentGroups(
          scale,
          normalGroup[0],
          normalGroup[1],
          scale.faultIndex,
        );
        scale.checkResult(result.faultIndex, result.heavier).should.be.eql(true);
      } else {
        const result = handleThreeCoinFromDifferentGroups(
          scale,
          normalGroup[0],
          faultIndex,
          normalGroup[1],
        );
        scale.checkResult(result.faultIndex, result.heavier).should.be.eql(true);
      }
      done();
    });
  });

  describe('#handleThreeCoin()', () => {
    it('it should return the fault index', done => {
      const scale = new Scale();
      let faultGroup = [0, 1, 2];
      while (true) {
        if (_.some(faultGroup, x => scale.coins[x] !== 2)) {
          break;
        } else {
          faultGroup = faultGroup.map(x => x + 3);
        }
      }
      const heavier = _.some(faultGroup, x => scale.coins[x] > 2);
      handleThreeCoin(scale, faultGroup, heavier).should.be.eql(scale.faultIndex);
      done();
    });
  });

  describe('#findFaultCoin()', () => {
    it('it should run the test 1000 times without any errors', done => {
      let testCaseFails = 0;

      for (let i = 0; i < 1000; i += 1) {
        const scale = new Scale();
        const { faultIndex, heavier } = findFaultCoin(scale);
        testCaseFails += !scale.checkResult(faultIndex, heavier);
      }
      testCaseFails.should.be.eql(0);
      done();
    });
  });
});
