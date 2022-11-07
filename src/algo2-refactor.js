import _ from 'lodash';
import Scale from './Scale.js';

function findFaultCoin(scale) {
  const coinGroups = _.chunk(_.range(12), 3);
  const threeTimesResult = [
    scale.weigh(coinGroups[0], coinGroups[1]),
    scale.weigh(coinGroups[0], coinGroups[2]),
    scale.weigh(coinGroups[0], coinGroups[3]),
  ];
  if (threeTimesResult.every(x => x === 1)) {
    return { faultIndex: findHeavierCoin(scale, coinGroups[0]), heavier: true };
  }
  if (threeTimesResult.every(x => x === 3)) {
    return { faultIndex: findLighterCoin(scale, coinGroups[0]), heavier: false };
  }
  if (_.findIndex(threeTimesResult, x => x === 1) !== -1) {
    const faultGroupIndex = _.findIndex(threeTimesResult, x => x === 1) + 1;
    return { faultIndex: findLighterCoin(scale, coinGroups[faultGroupIndex]), heavier: false };
  }
  const faultGroupIndex = _.findIndex(threeTimesResult, x => x === 3) + 1;
  return { faultIndex: findHeavierCoin(scale, coinGroups[faultGroupIndex]), heavier: true };
}

function findHeavierCoin(scale, faultGroup) {
  const faultIndex = scale.weigh([faultGroup[0]], [faultGroup[2]]) - 1;
  return faultGroup[faultIndex];
}

function findLighterCoin(scale, faultGroup) {
  const faultIndex = scale.weigh([faultGroup[2]], [faultGroup[0]]) - 1;
  return faultGroup[faultIndex];
}

export { findFaultCoin };
